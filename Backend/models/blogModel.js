const mongoose=require('mongoose');//importing mongoose

const Schema=mongoose.Schema;//creating schema

const blogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    intro:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }}
    ,{timestamps:true});

    module.exports=mongoose.model('Blog',blogSchema);//exporting model