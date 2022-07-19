$(function(){
	var banner = $('#imgBnArea ul li img');
	var current = 0;
	var timer;
	start();
	function move(tg,start,end){
	tg.css('left',start).animate({left:end},1000);
	};
	function start(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%');
			current++;
			if(current==banner.size()) current=0;
			var next = banner.eq(current);
			move(next,'100%','0%');
		},2500);		
	};
	banner.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			start();
		}
	);
	
/* 	var event = $('#contents > ul > li');
	event.hover(
		function(){
			$(this).find('img').css({'margin-top': '-150px'})
		},
		function(){
			$(this).find('img').css({'margin-top': '0px'})			
		}
	); 
	
	$('#contents li img').each(function(){
		$(this).hover(
			function(){
				$(this).parents('#contents').css('overflow', 'visible');
				$(this).parent('li').css('overflow', 'visible');
				$(this).css({position: 'relative','z-index': '1', top: -50});
				$('#foot').css({position: 'relative','z-index': '100'});
			},function(){
				$(this).parents('#contents').css('overflow', 'auto');
				$(this).parent('li').css('overflow', 'hidden');
				$(this).css({position: 'relative','z-index': '1', top: 0});
				$('#foot').css({position: 'relative','z-index': '100'});
			}
		);
	});	 */
	
	
	
});