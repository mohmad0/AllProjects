$(function(){
    $('button').on('click' , function(){
        $('#show').load($(this).data('page') + ' .content', function(responsetext, statustext,xhr){
            if(statustext === 'success'){
                console.log('Data Loaded');
            }
        });
    });
    //     $('#show').load('demo-tow.html .content' , function(responsetext, statustext,xhr){
    //     if(statustext === 'success'){
    //         console.log('Data Loaded');
    //     }
    // });

});
