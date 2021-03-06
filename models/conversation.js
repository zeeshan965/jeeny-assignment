'use strict';
const { Model } = require ( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
    class Conversation extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate ( models ) {
            Conversation.belongsToMany ( models.user, {
                through : models.conversation_users
            } )
        }
    };
    Conversation.init ( {
        created_by : DataTypes.INTEGER
    }, {
        sequelize,
        modelName : 'conversation',
    } );
    return Conversation;
};