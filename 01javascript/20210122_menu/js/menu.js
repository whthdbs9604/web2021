function nowMenu(menu){
   console.log(menu);
   $("ul.menu>li").eq(menu).addClass("active");
   $(".bar").css({left:200*menu}); //menu 0 1 2 3 4

   //$("ul.menu>li").hover(function(){},function(){}); mouseenter / mouseleave
   $("ul.menu>li").hover(function(){
     var menuLi = $(this).index();
     $(".bar").stop().animate({left:menuLi*200},100);
   },function(){
     $(".bar").stop().animate({left:menu*200},100);
   });
 }
