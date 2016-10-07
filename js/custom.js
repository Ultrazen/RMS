//graph
$(document).ready(function() {
//page content loader
    $('#content').load('dashboard.html');
    $('#nav .sidebar ul li').not('.treeview').find('a').click(function(e){  
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
    $('#nav .sidebar ul li.admin').click(function(e){  
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

    //image tooltip
    var title = '';
    $('body').on('mouseenter','.teacher-profile',function(){
        title = $(this).data('title');
        if($(this).parent().find('span').length == 0){
            $(this).before('<span>'+title+'</span>');
        }
        
    });

});    
//validation 

