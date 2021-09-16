const createError = require ( 'http-errors' );
const express = require ( 'express' );
const path = require ( 'path' );
const cookieParser = require ( 'cookie-parser' );
const logger = require ( 'morgan' );
const bodyParser = require ( "body-parser" );
require ( 'dotenv' ).config ();

const indexRouter = require ( './routes/index' );
const api = require ( "./routes/api" );
const rateLimit = require("express-rate-limit");

const app = express ();

// view engine setup
app.set ( 'views', path.join ( __dirname, 'views' ) );
app.set ( 'view engine', 'pug' );

app.use ( logger ( 'dev' ) );
app.use ( '/uploads', express.static ( 'uploads' ) );
app.use ( express.json () );
app.use ( express.urlencoded ( { extended : false } ) );
app.use ( cookieParser () );
app.use ( express.static ( path.join ( __dirname, 'public' ) ) );
app.use ( bodyParser.urlencoded ( { extended : true } ) );
app.use ( bodyParser.raw ( { extended : true } ) );
app.use ( bodyParser.json ( { extended : true } ) );
app.use ( bodyParser.text ( { extended : true } ) );

//Implement rate limiting
app.use(
    rateLimit({
        windowMs: 60 * 1000, // 12 hour duration in milliseconds
        max: 5,
        message: "You exceeded 5 requests in 60 seconds!",
        headers: true,
    })
);

// Routes which should handle requests
app.use ( '/', indexRouter );
app.use ( "/api", api );

/**
 * CORS
 */
app.use ( ( req, res, next ) => {
    res.header ( "Access-Control-Allow-Origin", "*" );
    res.header ( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization" );
    if ( req.method === 'OPTIONS' ) {
        res.header ( 'Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET' );
        return res.status ( 200 ).json ( {} );
    }
    next ();
} );

// catch 404 and forward to error handler
app.use ( ( req, res, next ) => {
    next ( createError ( 404 ) );
} );

// error handler
app.use ( ( error, req, res, next ) => {
    res.status ( error.status || 500 );

    // set locals, only providing error in development
    res.locals.message = error.message;
    res.locals.error = req.app.get ( 'env' ) === 'development' ? error : {};

    // render the error page
    if ( ! req.xhr ) res.render ( 'error' );
    if ( req.xhr ) res.json ( { error : { message : error.message } } );
} );

module.exports = app;
