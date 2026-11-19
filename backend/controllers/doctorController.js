import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import doctorModel from "../models/doctorModel.js"


const doctorList = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select(['-password','-email'])
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


// API for doctor login 
const loginDoctor = async (req,res)=>{
    try {
        const {email,password} = req.body;
        const doctor  = await doctorModel.findOne({email})
        if(!doctor){
            return res.json({success:false,message:'Inavlid Credentials!!'})
        }
        const isMatch = await bcrypt.compare(password,doctor.password)
        if(isMatch){
            const token = jwt.sign({id:doctor._id},process.env.JWT_SECRETkEY)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invalid Credentials!!"})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }
}


export {doctorList,loginDoctor}