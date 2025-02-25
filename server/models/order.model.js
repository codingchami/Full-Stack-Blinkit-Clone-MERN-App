import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user_Id : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    ordeId : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : "product"
    },
    product_details : {
        _id : String,
        name : String,
        image : Array,

    },
    paymentId : {
        type : String,
        default : ""
    },
    payment_status : {
        type : String,
        default : ""
    },
    delivery_address : {
        type : mongoose.Schema.ObjectId,
        ref : "address"
    },
    subTotal : {
        type : Number,
        default : 0
    },
    totalAmount : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ""
    }
},{
    timestamps : true
})

const OrderModel = mongoose.model('order', orderSchema)

export default OrderModel