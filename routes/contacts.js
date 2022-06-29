import { Router } from 'express'
import * as contactsCtrl from '../controllers/contacts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/passwords/new
router.get('/new', contactsCtrl.new)

router.post('/', contactsCtrl.create)

router.get('/', isLoggedIn, contactsCtrl.index)


export {
    router
}