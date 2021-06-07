let express = require ( 'express' );
let router = express.Router ();

const UserController = require ( '../controllers/user' );

router.get ( '/', UserController.find );
router.get ( '/:id', UserController.findById );
router.post ( '/', UserController.save );
router.put ( '/:id', UserController.update );
router.patch ( '/:id', UserController.update );
router.delete ( '/:id', UserController.delete );


module.exports = router;
