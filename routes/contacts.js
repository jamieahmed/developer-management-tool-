import { Router } from 'express'
import * as contactsCtrl from '../controllers/contacts.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET localhost:3000/passwords/new
router.get('/', isLoggedIn, contactsCtrl.index)

router.get('/new', contactsCtrl.new)

router.post('/', contactsCtrl.create)

router.delete("/:id", isLoggedIn, contactsCtrl.delete)

router.get("/:id/edit", contactsCtrl.edit)

router.put("/:id", contactsCtrl.update)

export {
    router
}