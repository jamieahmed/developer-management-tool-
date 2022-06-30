import { Comment } from "../models/comment.js";
import { Profile } from "../models/profile.js";


function index(req, res) {
    Profile.findById(req.user.profile)
        .populate("comments")
        .then((profile) => {
            res.render("", {
                comments: profile.comments,
                title: "Comments",
            });
        })
        .catch((err) => {
            res.redirect("/");
        });
}

function create(req, res) {
    Comment.create(req.body)
        .then(comment => {
            console.log(comment)
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
            console.log('/')
        });
}


function createReview(req, res) {
    Comment.findById(req.params.id)
        .then(comment => {
            comment.reviews.push(req.body)
            comment.save()
                .then(() => {
                    res.redirect(`/comments/${comment._id}`)
                })
        })
}


export {
    index,
    create,
    createReview
}