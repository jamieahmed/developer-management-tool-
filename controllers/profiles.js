import { Profile } from "../models/profile.js";

function index(req, res) {
    Profile.find({})
        .then((profiles) => {
            res.render("profiles/index", {
                profiles,
                title: "Profiles",
            });
        })
        .catch((err) => {
            console.log(err);
            res.redirect(`/profiles/${req.user.profile._id}`);
        });
}

function show(req, res) {
    Profile.findById(req.params.id)
        .then(profile => {
            const isSelf = profile._id.equals(req.user.profile._id)
            res.render("profiles/show", {
                title: `profiles ${profile.name}'s profile`,
                profile,
                isSelf,
            })
        })
        .catch((err) => {
            console.log(err)
            res.redirect("/")
        })
}

function createprofileDetail(req, res) {
    Profile.findById(req.user.profile._id)
        .then(profile => {
            profile.profileDetails.push(req.body)
            profile.save()
                .then(() => {
                    res.redirect(`/profiles/${req.user.profile._id}`)
                })
        })
        .catch(err => {
            console.log(err)
            res.redirect(`/profiles/${req.user.profile._id}`)
        })
}
function newProfile(req, res) {
    res.render('profiles/new', {
        title: 'addInfo'
    })
}

function deletedetails(req, res) {
    Profile.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/profiles");
        })
        .catch((err) => {
            console.log(err);
            res.redirect("/profiles");
        });
}

function edit(req, res) {
    Profile.findById(req.params.id)
        .then(profile => {
            res.render("profiles/edit", {
                profile,
                title: "Edit profile"
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect("/")
        })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((profile) => {
        res.redirect(`/profiles/${profile._id}`);
    })
    .catch((err) => {
        console.log(err);
        res.redirect("/");
    });
  }

export {
    index,
    show,
    createprofileDetail,
    newProfile as new,
    deletedetails as delete,
    edit,
    update
};
