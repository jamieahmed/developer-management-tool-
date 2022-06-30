import mongoose from 'mongoose'

const Schema = mongoose.Schema


const contactSchema = new Schema({
    fullName: String,
    phoneNumber: Number,
    email: String,
    profession: String,
    relatedName: String,
    address: String,
    company: String,
    note: String,
    owner: { type: Schema.Types.ObjectId, ref: "Profile" }
}, {
    timestamps: true
})

const Contact = mongoose.model('Contact', contactSchema)

export {
    Contact
}