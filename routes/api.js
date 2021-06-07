let express = require ( "express" );
let router = express.Router ();

router.use ( '/users', require ( './users' ) );
router.get ( '/', function ( req, res, next ) {
    res.send ( 'respond with a resource' );
} );

module.exports = router;