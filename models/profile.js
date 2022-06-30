import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileDetailsSchema = new Schema({
  age: Number,
  gender: String,
  pNumber: Number,
  profession: String,
  company: String,
  address: String,
  bio: String
},
  {
    timestamps: true
  })

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  profileDetails: [profileDetailsSchema],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Contact" }],
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
