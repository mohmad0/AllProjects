/*global,$*/ 

$(function(){
    $('button').on('click' ,function(){
        $.get('../send.php?name=mohmad&age=22', function(data, status, xhr){
            console.log(data);
            console.log(status);
            console.log(xhr);
        });
    });
});