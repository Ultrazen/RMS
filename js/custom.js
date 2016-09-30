//graph
$(document).ready(function() {
//page content loader
    $('#content').load('dashboard.html');
    $('#nav .sidebar ul li a').click(function(e){  
        e.preventDefault();      
        var url = $(this).attr('href');
            $.ajax({
            url: url,

            /*beforeSend: function(data){
                $('#content').html(loader);
            },*/
            dataType: 'html',
            success: function(data){
                setTimeout(function(){
                $('#content').html(data);
                },1000);
            }
     });
});
    $('#nav .sidebar ul li a ul li a').click(function(e){  
        e.preventDefault();      
        var url = $(this).attr('href');
            $.ajax({
            url: url,

            /*beforeSend: function(data){
                $('#content').html(loader);
            },*/
            dataType: 'html',
            success: function(data){
                setTimeout(function(){
                $('#content').html(data);
                },1000);
            }
     });
});
});    
//validation 

