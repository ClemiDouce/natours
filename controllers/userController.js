const fs = require("fs");

const fileName = `${__dirname}/../dev-data/data/users.json`;

const users = JSON.parse(fs.readFileSync(fileName));

exports.getAllUsers = (req, res) => {};
exports.createUser = (req, res) => {};
exports.getUser = (req, res) => {};
exports.updateUser = (req, res) => {};
exports.deleteUser = (req, res) => {};
