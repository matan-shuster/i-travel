const {User} = require('../db/models');

class UserManager {
    constructor() {
        this.userList = this.getUserList() || [];
    }

    async createUser(userObject) {
        const {
            dataValues: {id}
        } = await User.create({
            ...userObject
        });
        this.userList.push({...userObject, id});
        return {userObject, id};
    }

    async getUserList() {
        return (await User.findAll()).map((element) =>
            element.get({plain: true})
        );
    }

    async getUserByID(userID) {
        return this.userList.find(user => user.id === userID);
    }

    async deleteUser(userID) {
        await User.destroy({
            where: {id: userID}
        });
    }

    async updateUser(userID, userObject) {
        await User.update({
            ...userObject
        }, {
            where: {id: userID}
        });
    }
}

module.exports = UserManager;