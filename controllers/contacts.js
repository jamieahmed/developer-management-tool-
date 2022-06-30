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
          res.redirect(`/contacts`);
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

function deleteContacts(req, res) {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/contacts");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/contacts");
    });
}

function edit(req, res) {
  Contact.findById(req.params.id)
    .then((contact) => {
      res.render("contacts/edit", {
        contact: contact,
        title: "Edit Contacts",
      });
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}

function update(req, res) {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((contact) => {
      res.redirect('/contacts');
    })
    .catch((err) => {
      console.log(err);
      res.redirect("/");
    });
}




export { newContacts as new, index, create, deleteContacts as delete, edit, update, };
