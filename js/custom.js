$(document).ready(function(a){$("body").bind("touchstart",function(){}),$(".navigation-icon, .talk_to_text, .main_navbar span.close1").click(function(a){$(".menu_btns").toggleClass("navbar_open"),$(".main_navbar").fadeToggle(),$(".cta_main_block").hide(),$(".cta_block").show(),$(".cta_employee_form").hide()}),$(".menu_BTN").click(function(){$(".fling_mrnu").slideToggle()}),$("nav ul li").hover(function(){$(this).addClass("nav_active"),$(this).siblings().css({opacity:"0.2"});var a="."+$(this).attr("id");$(a).addClass("show")},function(){$(this).removeClass("nav_active"),$(this).siblings().css({opacity:"1"});var a="."+$(this).attr("id");$(a).removeClass("show")}),$(".cta_icon").click(function(a){$(".main_navbar").hide(),$(".cta_main_block").fadeToggle(),$(".menu_btns").addClass("cta_open")}),$(".cta_block ul li").click(function(a){$(this).hasClass("cta_form_go")&&($(this).parents(".cta_block").hide(),$(".cta_employee_form").fadeIn(),$(".menu_btns").addClass("goback"));var e="."+$(this).attr("id");$(e).show().siblings().hide()}),$(".close_icon").click(function(a){$(".menu_btns").removeClass("navbar_open").removeClass("cta_open"),$(".main_navbar, .cta_main_block").fadeOut(),$(this).hasClass("go_back")&&$(".close_icon").removeClass("go_back")}),$(".go_back").click(function(a){$(".menu_btns").removeClass("goback"),$(".cta_employee_form").hide(),$(".cta_block").fadeIn(),$("#name,#email,#phone,#description").css({"border-color":""}).val(""),$(".errS, .f_success").text(" ")}),$(".cta_employee_form button").click(function(a){var e=$("#name"),o=$("#email"),s=$("#phone"),c=$("#description"),i=0;if(""==$.trim($("#name").val())?(e.css({"border-color":"#f00"}),i=1):e.css({"border-color":"#0f0"}),""==$("#email").val())o.css({"border-color":"#f00"}),i=1;else{var n=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;n.test($("#email").val())?o.css({"border-color":"#0f0"}):(o.css({"border-color":"#f00"}),i=1)}if(""==$.trim($("#phone").val())?(s.css({"border-color":"#f00"}),i=1):s.css({"border-color":"#0f0"}),""==$.trim($("#description").val())?(c.css({"border-color":"#f00"}),i=1):c.css({"border-color":"#0f0"}),i)return $(".errS").text("Required : valid info."),$(".f_success").hide(),!1;var t="name="+e.val()+"&email="+o.val()+"&phone="+s.val()+"&description="+c.val();return $.ajax({url:"submit.php",type:"POST",data:t,cache:!1,success:function(a){$(".f_success").html(a),$(".f_success").show(),$(".errS").text(""),$("#name,#email,#phone,#description").val("")}}),!1}),$("#phone").keypress(function(a){return 8!=a.which&&0!=a.which&&(a.which<48||a.which>57)?!1:void 0}),wow=new WOW({animateClass:"animated",offset:100,mobile:!0}),wow.init()}),
$(window).load(function(){
	//$(".pre_loader").fadeOut("slow")
});