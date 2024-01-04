const express=require("express")
const router=express.Router() 
const {getContact, updateContact, deleteContact,createContact}=require('../routs/controllers/contactControllers')        
router.route('/').get(getContact)
router.route('/').post(createContact)
router.route('/:id').put(updateContact)
router.route('/:id').delete(deleteContact)






module.exports=router