
$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        alert(season);
    
if(season == 'Spring'){
    $("html").css("background-color","#2B7129");
    $("#wear").attr("src", "images/spring-wear.jpg"); 
    $("#logo").attr("src", "images/spring.gif");
    $("header h3").text("Spring into spring!");
    } 
    


if(season == 'Summer'){
    $("html").css("background-color","#EBA52B");
    $("#wear").attr("src", "images/summer-wear.jpg");
    // replace logo 
    $("#logo").attr("src", "images/summer.gif");

    $("header h3").text("Jump into summer!");
}

if(season == 'Fall'){
    $("html").css("background-color","#A81124");
    $("#wear").attr("src", "images/fall-wear.jpg");
    // replace logo 
    $("#logo").attr("src", "images/fall.gif");

    $("header h3").text("Fall into fall!");
    } 

if(season == 'Winter'){

        $("html").css("background-color","#005393");
        $("#wear").attr("src", "images/winter-wear.jpg");
        // replace logo 
        $("#logo").attr("src", "images/winter.gif");
    
        $("header h3").text("Shiver into winter!");
        }
    
    

if(season == 'Default'){


    $("html").css("background-color","pink");
    $("#wear").attr("src", "images/default.jpeg");
    $("#logo").attr("src", "images/four-seasons.gif");
    $("header h3").text("Wow looks nice!");
 } 
});
});
        
        
    




// switch(season) {
    
//     case "spring":{
     
//     $("html").css("background-color","#2B7129");
//     $("#wear").attr("src", "images/spring-wear.jpg");
//     // replace logo 
//     $("#logo").attr("src", "images/spring.gif");

//     $("header h3").text("Spring into spring!");
//     }; 

//     break;
    
    
//     case "summer":{ 

//     $("html").css("background-color","#EBA52B");
//     $("#wear").attr("src", "images/summer-wear.jpg");
//     // replace logo 
//     $("#logo").attr("src", "images/summer.gif");

//     $("header h3").text("Jump into summer!");
// };
    

// case "fall":{
     
//     $("html").css("background-color","#A81124");
//     $("#wear").attr("src", "images/fall-wear.jpg");
//     // replace logo 
//     $("#logo").attr("src", "images/fall.gif");

//     $("header h3").text("Fall into fall!");
//     }; 

//     break;

//     case "winter":{
     
//         $("html").css("background-color","#2B7129");
//         $("#wear").attr("src", "images/spring-wear.jpg");
//         // replace logo 
//         $("#logo").attr("src", "images/spring.gif");
    
//         $("header h3").text("Jump into winter!");
//         }; 
    
//         break;

//         case "default":{
     
//             $("html").css("background-color","pink");
//             $("#wear").attr("src", "images/300x400.png");
//             // replace logo 
//             $("#logo").attr("src", "images/four-seasons.gif");
        
//             $("header h3").text("Jump into winter!");
//             }; 
        
//             break;

//         };
//     });
















    
        

