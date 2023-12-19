import UserModel from '../models/user.js';
const getAllUser = async(req, res)=>{
    try{
        let users = await UserModel.find()
        res.status(200).send({
            message:"Users List Fetched",
            users
        })
    }catch(error){
        res.this.state(500).send({error:error.message})
    }
}


const getUserById = async(req, res)=>{
    try{
        let {id} = req.params
        let user = await UserModel.findById(id)
        if(user){
        res.status(200).send({
            message:"User Data Fetched",
            user
        })
    }else{
        res.status(400).send({
            message:"Invaild User  Id"})
    }
    }catch(error){
        res.this.state(500).send({error:error.message})
    }
}

const createUser = async(req, res)=>{
    try{
        let user = await UserModel.findOne({email:req.body.email})
        if(!user){
            await UserModel.create(req.body)
            res.state(200).send({message:"User Creater Successfully"})
        }else{
            res.state(400).send({message:`User with ${req.body.email} already exists`})
        }
    }catch(error){
        res.state(500).send({error:error.message})
    }
}

const editUserById = async(req, res)=>{
    try{
        let {id} = req.params
        let user = await UserModel.findById(id)
        if(user){

            user.firstName = req.body.firstName
            user.lastName = req.body.lastName
            user.email = req.body.email

            await user.save()

        res.status(200).send({
            message:"User Data saved",
            user
        })
    }else{
        res.status(400).send({
            message:"Invaild User  Id"})
    }
    }catch(error){
        res.this.state(500).send({error:error.message})
    }
}


const deleteUserById = async(req, res)=>{
    try{
        let {id} = req.params
        let user = await UserModel.findById(id)
        if(user){
            await UserModel.deleteOne({_id:id})

        res.status(200).send({
            message:"User Deleted",
            user
        })
    }else{
        res.status(400).send({
            message:"Invaild User  Id"})
    }
    }catch(error){
        res.this.state(500).send({error:error.message})
    }
}


export default {
    getAllUser,
    createUser,
    getUserById,
    editUserById,
    deleteUserById
}