const DB = require ( '../models' );

class MessageController {

    /**
     * @param req
     * @param res
     */
    static find = ( req, res ) => {
        DB.Message.findAll ().then ( ( users ) => {
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
        DB.Message.findByPk ( req.params.id ).then ( ( message ) => {
            if ( ! message ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data find Successfully', data : message } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static save = ( req, res ) => {
        DB.Message.create ( {
            conversation_id : req.body.conversation_id,
            body : req.body.body,
            created_by : req.body.created_by
        } ).then ( ( message ) => {
            if ( ! message ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data created Successfully', data : message } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static update = ( req, res ) => {
        DB.Message.update ( {
            conversation_id : req.body.conversation_id,
            body : req.body.body,
            created_by : req.body.created_by
        }, { where : { id : req.params.id } } ).then ( ( message ) => {
            if ( ! message ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data updated Successfully', data : message } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static delete = ( req, res ) => {
        DB.Message.destroy ( {
            where : { id : req.params.id },
        } ).then ( ( message ) => {
            if ( ! message ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data deleted Successfully', data : message } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };
}

module.exports = MessageController;
