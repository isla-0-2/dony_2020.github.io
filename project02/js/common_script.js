$(function(){

	/* 툴팁 */
	
	var balloon = $('<div class="balloon"></div>').appendTo('body');
	function updateBalloonPosition(x,y){
		balloon.css({left: x+5, top: y});
	};
	function showBalloon(){
		balloon.stop();
		balloon.css('opacity',0);
		balloon.show();
		balloon.animate({opacity: 1},500);		
		/* ballooon.stop().css('opacity',0).show().animate(opacity:1),500; -> 요약한거*/
	};
	function hideBalloon(){
		balloon.stop();
		/* balloon.css('opacity',1);
		balloon.hide(); */
		balloon.animate({opacity: 0},500,function(){balloon.hide();});		
		/* balloon.animate({opacity: 0},500,function(){balloon.hide();}); -> 콜백함수 앞을 실행하고 실행하라 */
		/* balloon.stop().css('opacity',1).hide().animate(opacity:0),500; -> 요약한거 */
	};
	
	$('.hLogo').each(function(){
		var element = $(this);
		var text = element.attr('title');
		element.attr('title','');
		element.hover(
			function(event){
				balloon.text(text);
				/* updateBalloonPosition(event.pageX,event.pageY) 마우스를 이동하면 그 값이 전달 */
				updateBalloonPosition(event.pageX,event.pageY);
				/* balloon.show(); */
				showBalloon();
			},
			function(){
				/* balloon.hide(); */
				hideBalloon();
			}
		);
		element.mousemove(function(event){
			updateBalloonPosition(event.pageX,event.pageY);
		});
	});
	
	
	/* 퀵메뉴 */
	$('.quick_icon>li').hover(
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/quick_on_0'+num+'.png'});
		},
		function(){
			var num = $(this).index()+1;
			$(this).find('>a>img').attr({'src':'images/quick_0'+num+'.png'});
		}
	);
	bb = true;
	$('.quick_toggle').click(function(){
		if(bb){
			$(this).addClass('quick_open');
			$(this).stop(true,true).animate({'margin-right':'-100px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-right':'-100px'},500,function(){bb=false;});
		}else{
			$(this).removeClass('quick_open');
			$(this).stop(true,true).animate({'margin-right':'0px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-right':'0px'},500,function(){bb=true;});
		};
	});	
	
	
	
});















