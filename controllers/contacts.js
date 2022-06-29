import { Contact } from "../models/contact.js";
import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.findById(req.user.profile)
    .populate("contacts")
    .then((profile) => {
      res.render("contacts/index", {
        contacts: profile.contacts,
        title: "My Contacts",
      });
    })
    .catch((err) => {
      res.redirect("/");
    });
}
function create(req, res) {
  console.log(req.user);
  Contact.create(req.body)
    .then((contact) => {
      console.log(contact);
      Profile.findById(req.user.profile).then((profile) => {
        console.log(profile);
        profile.contacts.push(contact);
        profile.save().then((profile) => {
          res.redirect(`/profiles/${profile._id}`);
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function newContacts(req, res) {
  res.render("contacts/new", {
    title: "Add Contacts",
  });
}

export { newContacts as new, index, create };
