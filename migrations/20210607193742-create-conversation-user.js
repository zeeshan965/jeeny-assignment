'use strict';
module.exports = {
    up : async ( queryInterface, Sequelize ) => {
        await queryInterface.createTable ( 'conversation_users', {
            id : {
                allowNull : false,
                autoIncrement : true,
                primaryKey : true,
                type : Sequelize.INTEGER
            },
            conversation_id : {
                type : Sequelize.INTEGER
            },
            user_id : {
                type : Sequelize.INTEGER
            },
            last_message : {
                type : Sequelize.TEXT
            },
            is_seen : {
                type : Sequelize.TINYINT
            },
            created_at : {
                allowNull : false,
                type : Sequelize.DATE
            },
            updated_at : {
                allowNull : false,
                type : Sequelize.DATE
            }
        } );
    },
    down : async ( queryInterface, Sequelize ) => {
        await queryInterface.dropTable ( 'conversation_users' );
    }
};