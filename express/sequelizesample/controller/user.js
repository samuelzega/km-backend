const { User } = require('../models')

module.exports = class {
    static async getAll(req, res, next) {
        User.findAll()
            .then((result) => {
                res.status(200).send({
                    status: 200,
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }

    static async addUser(req, res, next) {
        User.create(req.body)
            .then((result) => {
                res.status(201).send({
                    status: 201,
                    message: 'New student created!',
                    data: result,
                })
            })
            .catch((err) => {
                res.status(400).send(err)
            })
    }
}
