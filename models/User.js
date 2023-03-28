import mongoose, { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    cep: {
        type: String
    },
    number: {
        type: Number
    },
    complement: {
        type: String
    }
})

const User = models?.User || model('User', UserSchema)

export default User