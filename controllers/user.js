const DB = require ( '../models' );

class UserController {

    /**
     * @param req
     * @param res
     */
    static findUsers = ( req, res ) => {
        DB.User.findAll ().then ( ( users ) => {
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
    static findUsersById = ( req, res ) => {
        DB.User.findByPk ( req.params.id ).then ( ( user ) => {
            if ( ! user ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data find Successfully', data : user } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static save = ( req, res ) => {
        DB.User.create ( {
            name : req.body.name,
            email : req.body.email
        } ).then ( ( user ) => {
            if ( ! user ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data created Successfully', data : user } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static update = ( req, res ) => {
        DB.User.update ( { name : req.body.name }, { where : { id : req.params.id } } ).then ( ( user ) => {
            if ( ! user ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data updated Successfully', data : user } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };

    /**
     * @param req
     * @param res
     */
    static delete = ( req, res ) => {
        DB.User.destroy ( {
            where : { id : req.params.id },
        } ).then ( ( user ) => {
            if ( ! user ) return res.status ( 200 ).send ( { status : 404, message : 'No data found' } );
            res.status ( 200 ).send ( { status : 200, message : 'Data deleted Successfully', data : user } );
        } ).catch ( ( error ) => {
            return res.status ( 200 ).send ( { status : 404, message : 'No data found', error : error } );
        } );
    };
}

module.exports = UserController;
