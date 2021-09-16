let express = require ( "express" );
let router = express.Router ();

router.use ( '/users', require ( './users' ) );
router.use ( '/conversations', require ( './conversation' ) );
router.use ( '/messages', require ( './message' ) );

router.get ( '/', function ( req, res, next ) {
    res.status ( 200 ).send ( { status : 200, message : 'API is running' } );
} );

const posts = [
    {
        id: 1,
        author: "Lilian",
        title: "Stock market",
        body: "Post 1",
    },

    {
        id: 2,
        author: "Tom",
        title: "Covid 19",
        body: "Post 2",
    },

    {
        id: 3,
        author: "Vincent",
        title: "Django APIs",
        body: "Post 3",
    },

    {
        id: 4,
        author: "Cindy",
        title: "Node.js Streams",
        body: "Post 4",
    },
];
router.get("/posts", function (req, res, next) {
    res.json(posts);
});

module.exports = router;