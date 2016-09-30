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
CKEDITOR: "*Exam description at least 20 word description required"

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
