'use strict';

const { Model } = require ( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
    class ConversationUser extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate ( models ) {
            // define association here
        }
    };
    ConversationUser.init ( {
        conversation_id : DataTypes.INTEGER,
        user_id : DataTypes.INTEGER,
        last_message : DataTypes.TEXT,
        is_seen : DataTypes.TINYINT
    }, {
        sequelize,
        modelName : 'conversation_users',
        underscored : true
    } );
    return ConversationUser;
};