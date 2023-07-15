const express=require('express');
const router=express.Router();
const doctorsController=require('../controllers/doctors.controller');


// ---------------------This is doctors routes ---------------------------- 
const getReqDoctors=doctorsController.doctors;
const getByIdReqDoctors=doctorsController.getReqByIdDoctors;
const postReqDoctors=doctorsController.insertDoctors;
const deleteReqDoctors=doctorsController.deleteDoctors;
const putReqDoctors=doctorsController.putDoctors;
 
router.get('/doctors',getReqDoctors);
router.get('/doctors/:id',getByIdReqDoctors);
router.post('/doctors',postReqDoctors);
router.delete('/doctors/:id',deleteReqDoctors);
router.put('/doctors/:id',putReqDoctors);


module.exports=router;