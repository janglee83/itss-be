const mongoose = require('mongoose')

const Ratting = mongoose.Schema(
    {
        staff_id: {
            type: mongoose.Types.ObjectId,
            ref: 'Staff'
        },
        user_id: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        request_detail_id: {
            type: mongoose.Types.ObjectId,
            ref: 'RequestDetail'
        },
        ratting: {
            type: Number,
            require: true
        },
        comment: String
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

module.exports = mongoose.model('Ratting', Ratting);