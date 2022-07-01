import { Router } from 'express'
import { Comment } from '../models/comment.js'


const router = Router()

router.get('/', function (req, res) {
  Comment.find({})
    .then(comments => {
      res.render('index', { title: 'Home Page', comments: comments.slice(0, 9), user: req.user ? req.user : null })
    }).catch(err => {
      console.log(err)
    })
})

export {
  router
}
