import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ProfileDetailsSchema = new Schema({
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
  ProfileDetails: [ProfileDetailsSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
