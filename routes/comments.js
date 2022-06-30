import { Router } from 'express'
import * as commentsCtrl from '../controllers/comments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.post('/', commentsCtrl.create)

router.post('/:id/reviews', isLoggedIn, commentsCtrl.createReview)

export {
    router
}