//Register new User
import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export async function registerUserController(request,response){
    try{
        const{name, email,password} = request.body;

        if(!name || !email || !password){
            return response.status(400).json({
                message : "Provide email,name and password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({email})

        if(user){
            return response.json({
                message : "Already register email",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)

        const playload = {
            name,
            email,
            password : hashPassword
        }

        //save those data inside the MongoDB database
        const newUser = new UserModel(playload)
        const save = await newUser.save()

        const verifyEmail = await sendEmail({
            sentTo : email,
            subject : "Verify email from binkeyit",
            html : verifyEmailTemplate
        })


    }catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}