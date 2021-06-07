let express = require ( 'express' );
let router = express.Router ();

const ConversationController = require ( '../controllers/conversation' );

router.get ( '/', ConversationController.find );
router.get ( '/:id', ConversationController.findById );
router.post ( '/', ConversationController.save );
router.put ( '/:id', ConversationController.update );
router.patch ( '/:id', ConversationController.update );
router.delete ( '/:id', ConversationController.delete );


module.exports = router;
