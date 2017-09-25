var express = require('express');
var app = express();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var router = express.Router();
var Training_com_Register = require('../../../models/training_company');
var ContactRegister = require('../../../models/contact');
var Student = require('../../../models/student');

exports.post=function(req, res) {


token = req.headers.token;
                if (token) {
                    jwt.verify(token, 'superSecret', function(err, decoded) {
                        console.log(decoded)

                        if (err) {
                            return res.status(401).send({ status: 401, message: 'Failed to authenticate token.' });
                       
                            }
                            else {

                                	Training_com_Register.findOne({ paperflow_id: decoded.paperflow_id }, function(err, data) {	

                                	var certificate = new ContactRegister()
                                    certificate.type_of_organization =su.type_of_organization  
                                    certificate.name_of_organization=su.name_of_organization 
                                    certificate.paperflow_id=su.paperflow_id
                               		certificate.first_name = req.body.first_name;

                                    certificate.last_name  = req.body.last_name ;
                                    certificate.data_of_birth = req.body.data_of_birth;
                                    certificate.gender = req.body.gender;
                                    certificate.nationality = req.body.nationality;
                                    certificate.father_name = req.body.father_name;
                                    certificate.father_email = req.body.father_email;
                                    certificate.mother_name = req.body.mother_name;
                                    certificate.mother_email = req.body.mother_email;
                                    certificate.marital_status = req.body.marital_status;

                                    certificate.type_hs.hs_status = req.body.hs_status;
                                    certificate.type_hs.name = req.body.type_name;
                                    certificate.type_hs.email = req.body.type_email;
                                    certificate.contact_number.primary =req.body.primary_no;
                                    certificate.contact_number.secondary =req.body.secondary_no;
                                    certificate.contact_number.other =req.body.other_no;
                                    certificate.email.primary =req.body.primary_email;
                                    certificate.email.alternate =req.body.alternate_email;
                                    certificatecertificate.permanent_address.address1 =req.body.permanent_address1;
                                    certificatecertificate.permanent_address.address2 =req.body.permanent_address2;
                                    certificatecertificate.permanent_address.city =req.body.permanent_city;
                                    certificatecertificate.permanent_address.district =req.body.permanent_district;

                                    certificatecertificate.permanent_address.state =req.body.permanent_state;
                                    certificatecertificate.permanent_address.pin_code =req.body.permanent_pin_code;
                                    certificate.permanent_address.country =req.body.permanent_country;
                                    certificate.current_address.address1 =req.body.current_address1;
                                    certificate.current_address.address2 =req.body.current_address2;
                                    certificate.current_address.city =req.body.current_city;
                                    certificate.current_address.district =req.body.current_district;

                                    certificate.current_address.state =req.body.current_state;
                                    certificate.current_address.pin_code =req.body.current_pin_code;
                                    certificate.current_address.country =req.body.current_country;
                                    certificate.previous_address.address1 =req.body.previous_address1;
                                    certificate.previous_address.address2 =req.body.previous_address2;
                                    certificate.previous_address.city =req.body.previous_city;
                                    certificate.previous_address.district =req.body.previous_district;


                                    certificate.previous_address.state =req.body.previous_state;
                                    certificate.previous_address.pin_code = req.body.previous_pin_code;
                                    certificate.previous_address.country = req.body.previous_country;
                                    certificate.government_id = req.body.government_id;
                                    certificate.aadhar_card = req.body.aadhar_card;

                                    certificate.certificate.issued_date=
                                    certificate.certificate.name_of_certificate=req.body.
                                    certificate.certificate. type_of_course=req.body. type_of_course//array
                                    certificate.certificate.course_name=req.body.course_name    //array
                                    certificate.certificate.version= req.body.version   //array

Student.findOne({aadhar_card:req.body.aadhar_card }, function(err, data) {
	if(data == null || data == undefined)
	{
		Student.findOne({government_id:req.body.government_id }, function(err, data) {
			if(data == null || data == undefined)
			{
				Student.findOne({"email.primary":req.body.primary_email }, function(err, data) {
					if(data == null || data == undefined)
					{
						Student.findOne({"email.alternate":req.body.alternate_email }, function(err, data) {
							if(data == null || data == undefined)
							{
								Student.findOne({$and:[{person_name:req.body.person_name},{father_name:req.body.father_name},{mother_name:req.body.mother_name},]}, function(err, data) {
									if(data == null || data == undefined)
									{
									certificate.save()
                                    Training_com_Register.findOne({$and:[{paperflow_id : decoded.paperflow_id},{"course.name":req.body.course_name}]}, function(err, course) {	
									certificate.certificate.duration=
                                    certificate.certificate.name_of_certificate=
                                    




                                    certificate.save(function(err) {
                                        if (!err)
                                        {
                                       res.json({success:true,message: "Student not found. Create student" });
                                        res.end()
                                        }
                                        else{
                                        res.json({success: false,message:err1 });
                                        res.end()
                                        }
										})

									}else{
//detail are save here
										res.json({success:true,message: "Student found by name." });
										}
								})
							}else{
									res.json({success:true,message: "Student found by alternate email." });
								}
						})
					}else{
							res.json({success:true,message: "Student found by primary email ." });
						}
					})
			}else{
					res.json({success:true,message: "Student found by government id ." });
					}
				})
	}else{
			res.json({success:true,message: "Student found by aadhar card." });
		}
	})
}







									// certificate.save(function(err) {
         //                                if (err)
         //                                {
         //                                //res.send(err)
         //                                res.json({success: false });
         //                                    res.end()
         //                                }
