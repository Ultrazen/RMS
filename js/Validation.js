$(document).ready(function(){
$('button').click(function(){
$('.errorContainer').hide().removeClass('open1').addClass('close1');
});
$('.submit').click(function(){
$('.errorContainer').addClass('open1').removeClass('close1');
});
//Class Management
//text only
$(function () {
$('.className, .studentname, .parentname').keydown(function (e) {
if (e.ctrlKey || e.altKey) {
e.preventDefault();
} else {
var key = e.keyCode;
if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
e.preventDefault();
}
}
});
});
//Class Form
$("form[name='classmngment']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
},   
rules: {
className: {
required:true,
digits:false},
sectionclass: "required"
},
// Specify validation error messages
messages: {
className: "*Please enter ClassName",
sectionclass: "*Please enter Section"
},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
// Make sure the form is submitted to the destination defined
// in the "action" attribute of the form when valid
submitHandler: function(form) {
form.submit();
}
});

//Student management
$("#Student form[name='student']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules: {
roll_no: {required:true,
digits:true,
minlength:1,
maxlength:999},
name: {required:true,
minlength:2},
classselect: {
required:true
},
section:{
required:true
},
address: "required",
email: "required",
parents_name: {required:true,
minlength:2},
parents_phone: {
required:true,
digits:true,
minlength:9,
maxlength:10},
student_phone:{
required:true,
digits:true,
minlength:10,
maxlength:10},
image:{
  required:true,
}
},
messages: {
roll_no: "*Enter Roll no.",
name: "*Enter Name",
classselect: "*Enter Class",
address: "*Enter Address",
parents_name: "*Enter parents name",
parents_phone: "*Enter Phn. Number",
student_phone: "*Enter Phn. Number",
classselect: "*Select Class",
section: "*Select Section",
image:"*Upload photo"
},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li'
});

//Add subject
$("form[name='Addsubject']").validate({

focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules: {
subjectClass: {
required:true
},
subject: "required",
full_mark:{
required:true,
digits:true
},
pass_mark:{
required:true,
digits:true
},
author:{
required:true,
minlength:2
}
},
messages: {
subjectClass:"*Select Class",
subject: "*Enter Subject",
author: "*Enter Author name",
full_mark: "*Enter Fullmarks",
pass_mark: "*Enter Passmarks"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li'
});

//Add New Exam
$("form[name='NewExam']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
exam_name: "required",
exam_date: "required",
description:{
required:true,
minlength:20
}
},
messages:{
exam_name: "*Enter Exam subject",
exam_date: "*Enter Exam date",
description: "*Exam description at least 20 word description required"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//section
$("form[name='section']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
section_Name: "required",
Teacher_Name: "required",
Class:{
required:true
}
},
messages:{
section_Name: "*Enter Section name",
Teacher_Name: "*Enter Teacher name",
Class: "*Choose Class"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});
//Teacher
$("form[name='addteacher']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
name:"required",
gender: "required",
address: "required",
phone: {
required:true,
digits:true,
minlength:10,
maxlength:10},
email: "required",
password: {
  required:true,
  minlength:6
},
image: "required"
},
messages:{
  name: "*Enter name",
  gender: "*Select gender ",
  address: "*Enter address",
  phone: "Enter phone no.",
  email: "Enter valid email",
  password: "*Enter password",
  image: "*upload image"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//Event
$("form[name='NewEvent']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
Event_title: "required",
Event_date: "required",
Event_description:{
required:true,
minlength:20
}
},
messages:{
Event_title: "*Enter Event name",
Event_date: "*Enter Event date",
Event_description: "*Describe Event with at least 20 words"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//Notice
$("form[name='NewNotice']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
notice_title: "required",
notice_date: "required",
Notice_description:{
required:true,
minlength:20
}
},
messages:{
notice_title: "*Enter Notice name",
notice_date: "*Enter Notice date",
Notice_description: "*Notice description needed(at least 20 words)"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//Add Book
$("form[name='addnewbook']").validate({
focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
name: "required",
author: "required",
description: "required",
classselect: "required",
status: "required"
},
messages:{
name: "*Enter name",
author: "*Enter Author name",
description: "*Book description",
classselect: "*select class",
status: "*Book status"
},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//Add User
$("form[name='addnewuser']").validate({

focusInvalid: false,
errorElement: "div",
errorPlacement: function(error, element) {
error.appendTo("div.errorContainer");
}, 
rules:{
fullname: "required",
email: "required",
password:"required",
address:"required",
phone:"required",
usertype:"required"

},
messages:{
fullname: "*Enter Full name",
email: "*Enter valid email",
password:"At least 6 characters required",
address:"*Enter your current address",
phone:"Enter your phn no.",
usertype:"Define usertype"

},
errorContainer: $('.errorContainer'),
errorLabelContainer: $('.errorContainer ul'),
wrapper: 'li',
});

//date picker
$( ".date" ).datepicker({ 
  minDate: 0, 
  maxDate: "+2M +10D",
   });
//Ckeditor

});
	var $rows = $('#table tbody tr');
$('#search').keyup(function() {
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    
    $rows.show().filter(function() {
        var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(val);
    }).hide();
});

//Ckeditor validation
