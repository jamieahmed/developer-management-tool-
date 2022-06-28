import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()


router.get('/', isLoggedIn, profilesCtrl.index)

router.get('/newdetails', isLoggedIn, profilesCtrl.new)

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/details', isLoggedIn, profilesCtrl.createprofileDetail)

//DELETE  localhost:3000/flights/:id 
router.delete("/:id", isLoggedIn, profilesCtrl.delete)


router.get("/:id/edit", isLoggedIn, profilesCtrl.edit)

router.put("/:id", isLoggedIn, profilesCtrl.update)



export {
    router
}