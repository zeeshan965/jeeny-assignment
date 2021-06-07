const DB = require ( '../models' );

class ConversationController {

    /**
     * @param req
     * @param res
     */
    static find = ( req, res ) => {
        DB.Conversation.findAll ().then ( ( users ) => {
            if ( ! users ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data find Successfully', data : users } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static findById = ( req, res ) => {
        DB.Conversation.findByPk ( req.params.id ).then ( ( conversation ) => {
            if ( ! conversation ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data find Successfully', data : conversation } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static save = ( req, res ) => {
        DB.Conversation.create ( {
            created_by : req.body.created_by
        } ).then ( ( conversation ) => {
            if ( ! conversation ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data created Successfully', data : conversation } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static update = ( req, res ) => {
        DB.Conversation.update ( { created_by : req.body.created_by }, { where : { id : req.params.id } } ).then ( ( conversation ) => {
            if ( ! conversation ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data updated Successfully', data : conversation } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static delete = ( req, res ) => {
        DB.Conversation.destroy ( {
            where : { id : req.params.id },
        } ).then ( ( conversation ) => {
            if ( ! conversation ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data deleted Successfully', data : conversation } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };
}

module.exports = ConversationController;
