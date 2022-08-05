const { User } = require("../db/models");

class UserManager {
  async createUser(userObject) {
    const {
      dataValues: { id },
    } = await User.create({
      ...userObject,
    });
    return { userObject, id };
  }

  async getUserList() {
    return (await User.findAll()).map((element) =>
      element.get({ plain: true })
    );
  }

  async getUserByID(userID) {
    return (
      await User.findAll({
        where: { id: userID },
      })
    ).map((element) => element.get({ plain: true }));
  }

  async deleteUser(userID) {
    await User.destroy({
      where: { id: userID },
    });
  }

  async updateUser(userID, userObject) {
    await User.update(
      {
        ...userObject,
      },
      {
        where: { id: userID },
      }
    );
  }
}

module.exports = UserManager;
