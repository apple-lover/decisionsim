// JavaScript Document

$(document).ready(function() {
	resizeContent();
	$( window ).resize(function() {
		resizeContent();
	});
	function resizeContent() 
	{
		var wid;
		var ua = navigator.userAgent;
		var checker = {
			iphone: ua.match(/(iPhone|iPod|iPad)/),
			blackberry: ua.match(/BlackBerry/),
			android: ua.match(/Android/)
		};
		wid = $(window).width();
		if (wid<1024) 
			wid = 1024;
		if (wid>1680)
			wid = 1680;
		$('.container, .dlg_gallery_upload, .back_fade').css('font-size', (wid / 2400) + "em");
		$('.back_fade').css('height', ($('.mainarea').height() * 1.0925) + "px");
		if (checker.iphone){
			$('.line_break').css('font-size','2.3em');
		}
		if (checker.android){
			$('.title_area').css('width',($('.mainarea').width() - 10) + "px");
			$('.mainbody .rightbody').css('width', ($('.mainbody').width()*0.76) + "px");
			$('.items').css('width', ($('.leftbody').width()*1 - wid / 2400 * 18) + "px");
			$('.upper3').css('width', ($('.upper_right').width()*0.24) + "px");
			$('.pa_top_right').css('width', ($('.pa_top').width()*0.24) + "px");
			$('.preview_devices').css('width', ($('.preview_select').width()*0.3 - 1) + "px");
			$('.preview_devices:last-child').css('width', ($('.preview_select').width()*0.39 - 2) + "px");
			$('.below_select').css('width', ($('.below_right').width()*0.72) + "px");
			$('.pa_active_node').css('margin-left', '19%');
			$('.patient_media_input').css('width', ($('.patient_selected_content').width() - 30) + "px");
			$('#patient_media_url').css('width', ($('.patient_media_input').width() - 10) + "px");
			$('.pa_title_textarea').css('width', ($('.patient_media_input').width() - 15) + "px");
			$('.pa_title_textinput').css('width', ($('.patient_media_input').width() - 15) + "px");
		}
	}
	$( ".pa_title_textarea, .pa_title_textinput" ).keyup(function() {
		var id, max, txt;
		id = parseInt($(this).attr("lblid"),10);
		max = parseInt($(this).attr("maxlength"),10);
		txt = $(this).val();
		console.log(max+ "," + txt.length);
		if (txt.length>max)
		{
			$('#pa_length' + id).val("0 characters left");
			$(this).html(substr(txt,0,max-1));
		}
		else
		{
			$('#pa_length' + id).html((max-txt.length) + " characters left");
		}
	});
	$('#upper_chg_img').on('click', function(){
		$(".back_fade").show();
		$('.dlg_gallery_upload').show("fast");
	})
	$('#dlg_close, .btn_cancel').on('click', function(){
		$(".back_fade").hide();
		$('.dlg_gallery_upload').hide("fast");
	})

	$('.below_preview #device1').on('click', function(){
		$('#desktop_img').hide();
		$('#ipad_img').hide();
		$('#iphone_img').show();

		$('#device2 img').attr("src","image/ipad_unselect.png");
		$('#device3 img').attr("src","image/desktop_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/iphone_select.png");
	})
	$('.below_preview #device2').on('click', function(){

		$('#ipad_img').show();
		$('#iphone_img').hide();	
		$('#desktop_img').hide();	
		$('#device1 img').attr("src","image/iphone_unselect.png");
		$('#device3 img').attr("src","image/desktop_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/ipad_select.png");
	})
	$('.below_preview #device3').on('click', function(){
		$('#ipad_img').hide();
		$('#iphone_img').hide();	
		$('#desktop_img').show();	
		$('#device1 img').attr("src","image/iphone_unselect.png");
		$('#device2 img').attr("src","image/ipad_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/desktop_select.png");
	})
	$('.preview_select #device1').on('click', function(){
		$('#desktop_img').hide();
		$('#ipad_img').hide();
		$('#iphone_img').show();

		$('#device2 img').attr("src","image/ipad_unselect.png");
		$('#device3 img').attr("src","image/desktop_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/iphone_select.png");
	})
	$('.preview_select #device2').on('click', function(){

		$('#ipad_img').show();
		$('#iphone_img').hide();	
		$('#desktop_img').hide();	
		$('#device1 img').attr("src","image/iphone_unselect.png");
		$('#device3 img').attr("src","image/desktop_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/ipad_select.png");
	})
	$('.preview_select #device3').on('click', function(){
		$('#ipad_img').hide();
		$('#iphone_img').hide();	
		$('#desktop_img').show();	
		$('#device1 img').attr("src","image/iphone_unselect.png");
		$('#device2 img').attr("src","image/ipad_unselect.png");
		$('.preview_devices').removeClass("selected");
		$(this).addClass("selected");
		$(this).find("img").attr("src","image/desktop_select.png");
	})
	$('.patient_menu_title').on('click', function(){
		$('.patient_menu_title').parent().removeClass("pa_menu_selected");
		$(this).parent().addClass("pa_menu_selected");
	})
	$('.patient_scale').on('click', function(){
		var sel;
		sel = $(this).find(".img_ticker").attr("sel");
		if (sel == "selected"){
			$(this).find(".img_ticker").removeClass("color_green");
			$(this).find(".img_ticker").addClass("color_black");
			$(this).find(".img_ticker").attr("sel","unselected");
		}
		else{
			$(this).find(".img_ticker").removeClass("color_black");
			$(this).find(".img_ticker").addClass("color_green");
			$(this).find(".img_ticker").attr("sel","selected");
		}
	})
});
