const express = require("express")
const { Mongoose } = require("mongoose")
const router = express.Router();
const delinfo = require('../models/delivery')

//getting all
router.get('/', async(req,res)=>{
    try{
        const delinfo = await loginfo.find()
        res.json(delinfo)
    } catch(err){
        res.status(500).json({message:err.message})
    }
});
// getting one
router.get('/:id',getdelivery, (req,res)=>{
    res.json(res.delinfo)
})
// posting one
router.post('/', async(req,res)=>{
    const delinfo = new loginfo({
        chef: req.body.chef,
        order: req.body.order,
        date: req.body.date,
        adress: req.body.adress
    })
    
    try{
        const delboy = await delinfo.save()
        res.status(201).json(delboy)
    console.log(delboy)
    } catch(err){
        res.status(400).json({message:err.message})
    }
});
// updating one
router.patch('/:id',getdelivery, async(req,res)=>{
    if(req.body.chef != null){
        res.delinfo.chef= req.body.chef
    }
    if(req.body.order != null){
        res.delinfo.order= req.body.order
    }
    if(req.body.date != null){
        res.delinfo.date= req.body.date
    }
    if(req.body.adress != null){
        res.delinfo.adress= req.body.adress
    }
    try{
        const upddelivery = await res.delinfo.save()
        res.json(upddelivery)
    }catch(err){
        res.status(400).json({message:err.message})
    }
});
// deleting one
router.delete('/:id',getdelivery, async(req,res)=>{
    try{
        await res.delinfo.remove()
        res.json({message:'Deleted User'})
    }catch(err){
        res.status(404).json({message:err.message})
    }
})
// middleware

async function getdelivery(req,res,next){
    let delinfo
    try{
        delinfo = await loginfo.findById(req.params.id)
        if (delinfo == null){
            return res.status(404).json({message: 'cannot find delinfo'})
        }
    } catch(err){
        return res.status(500).json({message:err.message})
    }
    res.delinfo = delinfo
    next()
}



module.exports = router