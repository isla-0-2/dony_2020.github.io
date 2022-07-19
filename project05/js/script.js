$(function(){
	// alert('a');

/* 	var banner = $('#imgBnArea>ul>li');
	var current = 0;
	var timer;
	start();
	
	function move(tg,start,end){
		tg.css('left',start).animate({left:end},500);
	};
	function start(){
		timer=setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'0%','-100%');
			current++;
			if(current==banner.size()) current=0;
			var next = banner.eq(current);
			move(next,'100%','0%');
		},1000);
	};
	banner.hover(
		function(){
			clearInterval(timer);
		},
		function(){
			start();
		}
	); */
	
	
/* 	$('#contents>ul').hover(
		function(){
			var ah = $(this).find('li').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:ah-imgh},5000);
		},
		function(){
			var ah = $(this).find('li').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	); */	
	
	$('#contents>ul').hover(
		function(){
			$('#contents>ul>li').stop(true,true).animate({'margin-top':'-294px'},500);
		},                        
		function(){
			$('#contents>ul>li').stop(false,false).animate({'margin-top':'0px'},500);
		}
	);	
	
	
	var banner = $('#imgBnArea>ul>li');
	var current = 0;
	var timer;
	wow();
	
	function move(tg,start,end){
		tg.css('opacity',start).animate({'opacity':end},1500);
	};
	
	function wow(){
		timer = setInterval(function(){
			var prev = banner.eq(current);
			move(prev,'100%','0%');
			current++;
			if(current==banner.size()) current=0;
			var next = banner.eq(current);
			move(next,'0%','100%');
		},1800);	
	};
	
	$('#banner').hover(
		function(){
			clearInterval(timer);
		},
		function(){
			wow();
		}
	);


	
});