import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name: { type: String, default: '' },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    pwd: { type: String, required: true },
    role: { type: Number, default: 0 },
    age: { type: Number, default: 0 },
    user_profile_photo: { type: String, default: '' },
    tel: { type: String, default: '' },
    nickname: { type: String, default: 'nobody' },
}, { 
    versionKey: false, timestamps: true
})

export default mongoose.model('User', UserSchema)