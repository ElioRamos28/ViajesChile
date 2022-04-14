$(window).scroll(function(){
    
    if ($("#menuc").offset().top > 350) {

    $("#menuc").removeClass("bg-transparent");
    $("#menuc").addClass("bg-black");

    }else{

        $("#menuc").removeClass("bg-black");
        $("#menuc").addClass("bg-black");



    }   
    
    
]);