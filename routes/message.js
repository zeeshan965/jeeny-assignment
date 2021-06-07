let express = require ( 'express' );
let router = express.Router ();

const MessageController = require ( '../controllers/message' );

router.get ( '/', MessageController.find );
router.get ( '/:id', MessageController.findById );
router.post ( '/', MessageController.save );
router.put ( '/:id', MessageController.update );
router.patch ( '/:id', MessageController.update );
router.delete ( '/:id', MessageController.delete );

module.exports = router;
