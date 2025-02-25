import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
    name : {
        type : String,
        required : ""
    },
    image : {
        type : String,
        default : ""
    },
    category : [
        {
            type : mongoose.Schema.ObjectId,
            ref : "category"
        }
    ]
},{
    timestamps : true
})

const subCategoryModel = mongoose.model('subCategory', subCategorySchema)

export default subCategoryModel;