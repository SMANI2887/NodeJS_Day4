import { Router } from "express";
import UserRouter from './user.js'
const router = Router()

router.use('/',(req, res)=>{
    
    res.status(200).send({message:`Data is successfully run`});
})
router.use('/user',UserRouter)

export default router