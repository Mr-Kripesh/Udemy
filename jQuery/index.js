/*$("h1").css("color","Green");  ---- doing this we are selecting every h1 element that is in the code
 We can do this if we insert the jQurey link below the js link in body section 
*****************

if we are confused and want to be sure that this must be loaded after the document is ready then we can use this
 
    $(document).ready(function(){
        $("h1").css("color","Green");
    });
    
    Now it will load only after the document is ready
****************************
in this we will learn how to select specific element of the code
    $("h1.title");  ---  this selects the h1 tag with class named as [title] 

    $("#header h1"); --- this selects the h1 element that is inside the div classed as header

******************************

in this we will learn how to extract infromation from anything about anything that is in the code we can use this to know their details/ properties

    console.log($("h1").css("font-size");); -- this gives back the font-size of the h1 element that are available in the whole document
    console.log($("h1.class2").css("font-family");); ---- This gives back the font-family of h1 element that is located inside the h1 element of class2
**********************************
in this we will learn how to add/manipulate the new style using the addClass function so that we can add style that we created in css
    
    $("h1").addClass("big-title");

Now we will learn how to remove the added or the exsiting css style from the specific code 
 
    $("h1").removeClass("big-title");
**********************************

What if we want to apply more than one style in the same code
yes we can do that its as simple as to add
 
    $("h1").addClass("big-title margin-50"); --- the key difference is that there must be a single space in between two different styles
***********************************

We can also check whether the specific class is added to the element or not

    concole.log($("h1").hasClass("big-title"););
***************************************

we can also change the content using jQuery 

    $("h1").text("Hello World!");
    $("button").text("Bye");

we can change the inner html using 
    $("button").html("<em>Bye</em>"); --- this helps to not just paste the text but also carryout the function attached to it like bold italic or anything.
****************************************
we will learn how to get the elements properties 
    
    console.log($("h1").attr("class"););
*******************************************

we will learn how to get the location of the value
    
    console.log($("img").attr("src")););
*********************************************

we will learn how to add the value to the attribute

    $("a").attr("href", "https:://youtube.com"));
************************************************

We will lean how to add event listener 

    $("h1").click(function(){
    $("h1").css("color","whiteyellow");     --- we are changing the color of h1 element to green when clicken on it
    });


    $("input").keypress(function(event){
    console.log(event.key);
    });


    $(document).keypress(function(event){
    $("h1").html(event.key);
    });


    $("h1").on("mouseover",function(){
    $("h1").css("color","yellow");    ---  we can use the mosueover function as i have done in this and we can also use other functions
    });


    we can use before after prepend and append to perform magical changes in the webiste
     before:
      $("h1").before("<button>New</button>");
    after:
      $("h1").after("<button>New</button>");
    prepend:
      $("h1").prepend("<button>New</button>");
    append:
      $("h1").append("<button>New</button>")

We can also do animation using jQuery 
 
    $("button").on("click", function(){
    $("h1").hide();                     --- we can use hide() to hide the object using jQuery
    });

   $("button").on("click", function(){
    $("h1").show();                --- we use this to show the hidden object using jQuery
   });

   $("button").on("click",function(){
    $("h1").toggle();    --- We can use the toggle function to hide and show object by clicking the button
   });

   $("button").on("click",function(){
    $("h1").fadeToggle();             ---It is use to toggle between fadeIn & fadeOut 
   });

   $("button").on("click", function(){
    $("h1").slideToggle();     --- It is use to toggle between slideUp & slideDown 
   });
   
   $("button").on("click", function(){
     $("h1").slideUp().slideDown().animate({margin: "20%"}).animate({opacity: 0.5}).animate("color","yellow");
   });


*/
$("h1").text("Hello World!").addClass("big-title margin-50");

$("h1").click(function(){
    $("h1").css("color", "green");
 });

$(document).keypress(function(event){
 $("h1").html(event.key);
});

$("h1").on("mouseover", function(){
 $("h1").css("color","yellow");
});

$("h1").before(`<button>New</button>`);
$("h1").after(`<button>New</button>`);
$("h1").prepend('<button>New</button>');
$("h1").append("<button>New</button>");




$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({margin: "10%" }).animate({opacity: 0.5}).css("color","purple");
  });