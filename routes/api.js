let express = require ( "express" );
let router = express.Router ();

router.use ( '/users', require ( './users' ) );
router.use ( '/conversations', require ( './conversation' ) );
router.use ( '/messages', require ( './message' ) );

router.get ( '/', function ( req, res, next ) {
    res.status ( 200 ).send ( { status : 200, message : 'API is running' } );
} );

module.exports = router;