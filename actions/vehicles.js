const Vehicle = require("../models/vehicle")
const { isInteger } = require("lodash")

const create = async (req) => {
    let { brand, type, cc } = req.body
    cc = parseInt(cc)
    console.log(`Value of cc ${cc}`)

    var insert_data = {
        brand,
        type,
        cc
    }

    let data = new Vehicle(insert_data)

    try {
        await data.save()

        return data
    } catch (err) {
        throw err
    }
}

const getAll = async () => {
    try {
        let query = await Vehicle.find({}).exec()
        let data = query.map((v, i) => {
            return {
                brand: v.brand,
                type: v.type,
                cc: v.cc
            }
        })

        return data
    } catch (err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await Vehicle.findOne({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

const update = async (id, updated_data) => {
    let { brand, type, cc, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        brand,
        type,
        cc
    }

    try {
        let query = await Vehicle.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch (err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await Vehicle.findOneAndDelete({
            _id: id
        }).exec()

        return query
    } catch (err) {
        throw err
    }
}

module.exports = {
    create,
    getAll,
    getDetail,
    update,
    destroy
}