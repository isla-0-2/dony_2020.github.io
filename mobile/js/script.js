jQuery(document).ready(function(){
	/* $('#content_left a').lightBox();  */
	$('.picture a').lightBox({
		overlayBgColor: '#000000',
		overlayOpacity: 0.8,
		containerResizeSpeed: 400
	}); 
	

	function allCheckFunc( obj ) {
			$("[name=checkOne]").prop("checked", $(obj).prop("checked") );
	}


	function oneCheckFunc( obj )
	{
		var allObj = $("[name=checkAll]");
		var objName = $(obj).attr("name");

		if( $(obj).prop("checked") )
		{
			checkBoxLength = $("[name="+ objName +"]").length;
			checkedLength = $("[name="+ objName +"]:checked").length;

			if( checkBoxLength == checkedLength ) {
				allObj.prop("checked", true);
			} else {
				allObj.prop("checked", false);
			}
		}
		else
		{
			allObj.prop("checked", false);
		}
	}

	$(function(){
		$("[name=checkAll]").click(function(){
			allCheckFunc( this );
		});
		$("[name=checkOne]").each(function(){
			$(this).click(function(){
				oneCheckFunc( $(this) );
			});
		});
	});
	
	$("#touchSlider").touchSlider({
		view : 3,
	});


	$("#touchSlider10").touchSlider({
		sidePage : true,

	});


	var tab = $('#sns_page .tab > li');
	tab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		tab.removeClass('active');
		tg.addClass('active')
	});	

	var btab = $('#brank_page .tab > li');
	btab.click(function(e){
		e.preventDefault();
		var i = $(this);
		btab.removeClass('active');
		i.addClass('active');
		//i.find('a');
	});	

	
});








