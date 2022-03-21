module.exports = (sequelize,Sequelize) => {

const user =  sequelize.define("User",{
    username : {
        type : Sequelize.STRING(100),
        allowNull: false,
        unique : true
    },
    Password : {
        type : Sequelize.STRING(100),
        allowNull: false,
        unique : true
    }

});
    return user;
}
