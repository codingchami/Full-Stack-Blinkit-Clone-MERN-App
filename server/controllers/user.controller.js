import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import verifyEmailTemplate from "../utils/verifyEmailTemplate.js";
import sendEmail from "../config/sendEmail.js";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import generatedRefreshToken from "../utils/generatedRefreshToken.js";
import uploadImageClodinary from "../utils/uploadimageCloudinary.js";

//Register new User
export async function registerUserController(request, response) {
    try {
        const { name, email, password } = request.body;

        if (!name || !email || !password) {
            return response.status(400).json({
                message: "Provide email,name and password",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({ email })

        if (user) {
            return response.json({
                message: "Already register email",
                error: true,
                success: false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)

        const playload = {
            name,
            email,
            password: hashPassword
        }

        //save those data inside the MongoDB database
        const newUser = new UserModel(playload)
        const save = await newUser.save()

        const VerifyEmailUrl = `${process.env.FRONTEND_URL}/verify-email?code=${save?._id}`

        const verifyEmail = await sendEmail({
            sentTo: email,
            subject: "Verify email from binkeyit",
            html: verifyEmailTemplate({
                name,
                url: "https://github.com/codingchami"
            })
        })

        return response.json({
            message: "User register successfully",
            error: false,
            success: true,
            data: save
        })


    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

export async function verifyEmailController(request, response) {
    try {
        const { code } = request.body
        const user = await UserModel.findOne({ _id: code })

        if (!user) {
            return response.status(400).json({
                message: "Invalid code",
                error: true,
                success: false
            })
        }

        const updateUser = await UserModel.updateOne({ _id: code }, {
            verify_email: true
        })

        return response.json({
            message: "Verified",
            success: true,
            error: false
        })
    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: true
        })
    }
}

//user login controller
export async function loginController(request, response) {
    try {
        const { email, password } = request.body

        if(!email || !password){
            return response.status(400).json({
                message: "Provide email and password",
                error: true,
                success: false
            })
        }

        const user = await UserModel.findOne({ email })

        if (!user) {
            return response.status(400).json({
                message: "User not register!..",
                error: true,
                success: false
            })
        }

        if (user.status !== "Active") {
            return response.status(400).json({
                message: "Contact to Admin",
                error: true,
                success: false
            })

        }
        const checkPassword = await bcryptjs.compare(password, user.password)

        if (!checkPassword) {
            return response.status(400).json({
                message: "Check Your Password!..",
                error: true,
                success: false
            })
        }

        const accesstoken = await generatedAccessToken(user._id)
        const refreshtoken = await generatedRefreshToken(user._id)

        const cookiesOption = {
            httpOnly: true,
            secure: true,
            sameSite: "None"
        }
        response.cookie('accessToken', accesstoken, cookiesOption)
        response.cookie('refreshtoken', refreshtoken, cookiesOption)

        return response.status(200).json({
            message: "User login successfully",
            error: false,
            success: true,
            data: {
                accesstoken,
                refreshtoken
            }

        })

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        })
    }
}

//logout controller
export async function logoutController(request,response){
    try {
        const userid = request.userId //middleware

        const cookiesOption = {
            httpOnly : true,
            secure : true,
            sameSite : "None"
        }

        response.clearCookie("accessToken",cookiesOption)
        response.clearCookie("refreshToken",cookiesOption)

        const removeRefreshToken = await UserModel.findByIdAndUpdate(userid,{
            refresh_token : ""
        })

        return response.json({
            message : "Logout successfully",
            error : false,
            success : true
        })
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

//upload user avatar
export async function uploadAvatar(request,response){
    try{
        const image = request.file

        const upload = await uploadImageClodinary(image)

        return response.json({
            message : "Upload Profile",
            data : upload
        })
       
    }catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}