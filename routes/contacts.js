import { Router } from 'express'
import * as contactsCtrl from '../controllers/contacts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/passwords/new
router.get('/', isLoggedIn, contactsCtrl.index)

router.get('/new', isLoggedIn, contactsCtrl.new)

router.post('/', isLoggedIn, contactsCtrl.create)

router.delete("/:id", isLoggedIn, contactsCtrl.delete)

router.get("/:id/edit",isLoggedIn, contactsCtrl.edit)

router.put("/:id", isLoggedIn, contactsCtrl.update)


export {
    router
}