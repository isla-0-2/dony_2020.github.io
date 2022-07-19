$(document).ready(function(){
	/* $('a.gallery').colorbox(); */

	var options = { 
		'speed' : 500, 
		// 스피드
		'initTop': 160, 
		// 기본 top 위치
		'alwaysTop' : false, 
		// 항상고정 true , false 이동
		'default_x' : '#main_inner' 
		//레어아웃이 가운데 정렬 일때 레이어가 붙는 아이디값
	}
	$('#floatdiv').Floater(options);

	$('#btn01').click(function(){
		$('html, body').animate({scrollTop: $('#main').offset().top-0},500);
	});
	$('#btn02').click(function(){
		$('html, body').animate({scrollTop: $('#profile').offset().top-0},500);
	});
	$('#btn03').click(function(){
		$('html, body').animate({scrollTop: $('#mobile_1').offset().top-0},500);
	});
	$('#btn04').click(function(){
		$('html, body').animate({scrollTop: $('#project_1').offset().top-0},500);
	});
	$('#btn05').click(function(){
		$('html, body').animate({scrollTop: $('#project_2').offset().top-0},500);
	});
	$('#btn06').click(function(){
		$('html, body').animate({scrollTop: $('#project_3').offset().top-0},500);
	});
	$('#btn07').click(function(){
		$('html, body').animate({scrollTop: $('#project_4').offset().top-0},500);
	});
/* 	$('#btn08').click(function(){
		$('html, body').animate({scrollTop: $('#project_5').offset().top-0},500);
	}); */
	$('#btn08').click(function(){
		$('html, body').animate({scrollTop: $('#graphic').offset().top-0},500);
	});
/* 	$('#btn010').click(function(){
		$('html, body').animate({scrollTop: $('#diary').offset().top-0},500);
	}); */
	$('#btn9').click(function(){
		$('html, body').animate({scrollTop: $('#epilogue').offset().top-0},500);
	});
	$('#btn10').click(function(){
		$('html, body').animate({scrollTop: $('#thanks').offset().top-0},500);
	});

	
	var menu = $('#menuWrap > ul > li');
	var contents = $('#contents > div');
	var btn = $('#floatdiv ul li');
	menu.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		var section = contents.eq(i);
		var tt = section.offset().top;
		$('html, body').stop().animate({scrollTop: tt});
	});
	$(window).scroll(function(){
		var sct = $(window).scrollTop();
		contents.each(function(){
			var tg = $(this);
			var i = tg.index();
			if(tg.offset().top <= sct){
				menu.removeClass('on');
				menu.eq(i).addClass('on');
				btn.removeClass('active');
				btn.eq(i).addClass('active');
			};
		});
	});
	
	
	// 그래픽 갤러리 넘어가는 제이쿼리
	var current = 1;
	var thumbListSize = 4;
	var thumbnail = $('#graphicBox');
	var prev = thumbnail.find('>.left');
	var next = thumbnail.find('>.right');
	var graphicImg = thumbnail.find('>.graphicImg > ul');
	var graphicImgWidth = thumbnail.find('>.graphicImg').width();
	var thumb = graphicImg.find('>.thumb');
	var maxSize = thumb.size();
	var image = $('.graphicImgBox #graphicImage > p');
	listMove();
	function listMove(){
		var tl = graphicImgWidth * current * -1;
		graphicImg.stop().animate({left:tl},{duration:500,easing:'easeOutCubic'});
	};
	next.on('click',function(){
		if(current < maxSize / thumbListSize-1) {
			current++;
		}else{
			alert('페이지의 마지막입니다.');
		};
		listMove();
	});
	prev.on('click',function(){
		if(current > 0) {
			current--;
		}else{
			alert('페이지의 처음입니다.');
		};
		listMove();
	});
	thumb.on('click',function(){
		image.css('display','none');
		var i = $(this).index();
		image.eq(i).css('display','block');
	});
	thumb.hover(
		function(){
			var tg = $(this);
			tg.css('opacity','0.3');
		},
		function(){
			var tg = $(this);
			tg.css('opacity','1');			
		}
	);

	// 에필로그 갤러리 넘어가는 제이쿼리
	$('#caption').remove();
	$('.thumbs em').hide();
	
	$('.thumbs a').click(function(){
		$('#caption').remove();
		var path = $(this).attr('href');
		$('#largeImg > img').attr({src:path});
		var msg = $(this).next('em').text();
		
		$('#largeImg').append('<div id="caption"></div>');
		$('#largeImg #caption').text(msg);
		var posy = $('#largeImg #caption').height() + 25;
		
		$('#largeImg #caption').animate({top:'-='+posy+'px'},300);
		// top = top-posy   A-=B  A=A-B
		
		$('#largeImg > img').css('opacity','0').stop().animate({opacity:1},2000);
		return false;	//하이퍼링크 안일어나게
	});


	//원스크롤 조금만 휠해도 움직임
	var size = $('#contents>div').size();//몇개야?
	$('#contents>div').on('mousewheel',function(event,delta){ //델타에 -1 또는 1이들어옴(마우스지 위 아래 감지)
		if(delta>0 && $(this).index()>=1){
			var prev = $(this).prev().offset().top;
			$('html,body').stop().animate({'scrollTop':prev},1500,'easeOutExpo');
		}else if(delta<0 && $(this).index()<=(size-2)){
			var next = $(this).next().offset().top;
			$('html,body').stop().animate({'scrollTop':next},1500,'easeOutExpo');
		}
	});
	
	// 프로필 -스킬 %

	activate = 0;
		function setchartpercent(){
			var $content = $('.skills'),
			$charts = $content.find('.skill');
			$charts.find('.skill_p').eq(0).text(90);
			$charts.find('.skill_p').eq(1).text(80);
			$charts.find('.skill_p').eq(2).text(80);
			$charts.find('.skill_p').eq(3).text(95);
			$charts.find('.skill_p').eq(4).text(95);
			$charts.find('.skill_p').eq(5).text(85);
			$charts.find('.skill_p').eq(6).text(85);
			$charts.find('.skill_p').eq(7).text(85);
	};


	$(window).scroll(function(){
		var sct=$(window).scrollTop();
		var $content = $('.skills'); 
		var $charts = $content.find('.skill');	
		
		if(sct >= 950 && sct <= 1000){
			activatePercent();
		}else{
			zeroPercent();
		};
		
		function activatePercent(){
			
			if($content.hasClass('active') == false){
				$charts.each(function(i){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');
					var percentData = $percentNumber.text();
					$percentNumber.text(0);
					$({percent:0}).delay(150*i).animate({percent:percentData},{
						duration: 3000,
						progress: function(){
							var now = this.percent;
							
							$chartBar.css({width:now+'%'});
							$percentNumber.text(Math.floor(now));					
						} 
					});
				});
			};
			$content.removeClass('unactive');
			$content.addClass('active');	
		};
			
		function zeroPercent(){
			
			if($content.hasClass('unactive') == false){
				$charts.each(function(){
					var $chart = $(this);
					var $chartBar = $chart.find('.skill_g')
						.css({width:'0%'});
					var $percentNumber = $chart.find('.skill_p .num');
					
				
				});
			};
			$content.removeClass('active');	
			$content.addClass('unactive');	
		};
	});	
	
   
   
/* 마스크 */
initScene3();
	function initScene3(){
		var $container = $('#scene-3'), // 컨테이너
		$masks = $container.find('.mask'), // 마스크
		$lines = $masks.find('.line'), // 경계
		maskLength = $masks.length, // 마스크 총수
		maskData = []; //각 마스크 자르기 영역의 데이터를 저장할 수 있는 배열
		$masks.each(function(i){
			maskData[i] = {left: 0};
		});
		$container.on({
			mouseenter:function(){
				resizeMask($(this).index());
			},mouseleave:function(){
				resizeMask(-1);
			}
		},'.mask');
		resizeMask(-1);
		function resizeMask(active){
			var w = $container.width(),
			h = $container.height();
			$masks.each(function(i){
				var $this = $(this),
				l;
				if(active===-1){
					l = w/maskLength*i; //0,400,800,1200 (1600은 임의로정한것)
				}else if(active < i){//active = 0~3, i = 0~3 
					l = w*(1-0.1*(maskLength-i));			
				
// i = 2(3번째마스크) w(1600)*0.8	= 1280				
// i = 3(4번째마스크) w(1600)*0.9	= 1440		


				}else{
// i = 1(2번째마스크) w(1600)*0.1	= 160
// i = 0(1번째마스크) w(1600)*0	= 0
					l = w*0.1*i;		
				};
				$(maskData[i]).stop(true).animate({left:l},{duration:1000,easing:'easeOutQuart',progress:function(){
					var now = this.left;
					$this.css({clip:'rect(0px '+w+'px '+h+'px '+now+'px)'});
					$this.find($lines).css({left: now});
				}});
			});
		};
	};
	
	//타이핑 제이쿼리
	$('.profile_name').each(function(){
		var items = $(this).attr('title')+';'+$(this).text();
		$(this).empty().attr('title','').teletype({
			text: $.map(items.split(';'),$.trim),
			typeDelay: 70,
			backDelay: 10,
			cursor: '|',
			delay: 1000,
			preserve: false,
			prefix: '',
			loop: 0
		});
	});	
	
	$('.thanks_text').each(function(){
		var items = $(this).attr('title')+';'+$(this).text();
		$(this).empty().attr('title','').teletype({
			text: $.map(items.split(';'),$.trim),
			typeDelay: 70,
			backDelay: 10,
			cursor: '|',
			delay: 1000,
			preserve: false,
			prefix: '',
			loop: 0
		});
	});	
	
	
	/* work슬라이더 */
	$('.project_1_MainImg').hover(
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:'-163px'},5000);
		},
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	);	
	
	$('.project_2_MainImg').hover(
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:'-96px'},5000);
		},
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	);	
	
	$('.project_3_MainImg').hover(
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:'-1040px'},5000);
		},
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	);	
	
	$('.project_4_MainImg').hover(
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:'-245px'},5000);
		},
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	);	
	
	$('.project_5_MainImg').hover(
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:'-100px'},5000);
		},
		function(){
			var ah = $(this).find('a').innerHeight();
			var img = $(this).find('img');
			var imgh = $(this).find('img').innerHeight();
			img.stop().animate({top:0},5000);
		}
	);	
	
	//서브이미지 책
	$('.project_1_SubImg>li').eq(0).find('.textImage>div.on').css('display','block');
	$('.project_1_SubImg>li').eq(0).find('.textImage>div.off').css('display','none');
	$('.project_1_SubImg').each(function(){
		var tg = $(this);
		var subList = $(this).find(' > li');
		
		function firstImgOn(){
			var first = tg.find('li').eq(0);
			var fonImg = first.find('.textImage > .on');
			var foffImg = first.find('.textImage > .off');
			var fmenuImg = first.find('.subImage');
			var fimageWidth = fmenuImg.find('img').innerWidth();
			
			fonImg.css('display','block');
			foffImg.css('display','none');
			fmenuImg.animate({width:fimageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
		}
		
		function firstImgOff(){
			var first = tg.find('li').eq(0);
			var fonImg = first.find('.textImage > .on');
			var foffImg = first.find('.textImage > .off');
			var fmenuImg = first.find('.subImage');
			var fimageWidth = 0;
			
			fonImg.css('display','none');
			foffImg.css('display','block');
			fmenuImg.animate({width:fimageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
		}
		
		//firstImgOn();
		
		subList.eq(0).find('.subImage').css('width','370px');
		
		subList.hover(
		function(){
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImg = tg.find('.subImage');
			var imageWidth = menuImg.find('img').innerWidth();
			
			firstImgOff();
			
			onImg.css('display','block');
			offImg.css('display','none');
			menuImg.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
			
		},function(){
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImg = tg.find('.subImage');
			var imageWidth = 0;
			
			onImg.css('display','none');
			offImg.css('display','block');
			menuImg.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
			
			firstImgOn();
		});
	});
	
	var tab = $('.project_1_title_wrap > div');
	var content = $('.project_1_content_wrap > div');
	content.hide();
	content.eq(0).show();
	tab.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');	
		content.css('display','none');
		content.eq(i).css('display','block');
		//return false;
		
	});	

	$('.project_2_SubImg>li').eq(0).find('.textImage>div.on').css('display','block');
	$('.project_2_SubImg>li').eq(0).find('.textImage>div.off').css('display','none');
	
	
	$('.project_2_SubImg').each(function(){
		var tg = $(this);
		var subList = $(this).find(' > li');
		
		function firstImgOn(){
			var first = tg.find('li').eq(0);
			var fonImg = first.find('.textImage > .on');
			var foffImg = first.find('.textImage > .off');
			var fmenuImg = first.find('.subImage');
			var fimageWidth = fmenuImg.find('img').innerWidth();
			
			fonImg.css('display','block');
			foffImg.css('display','none');
			fmenuImg.animate({width:fimageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
		}
		
		function firstImgOff(){
			var first = tg.find('li').eq(0);
			var fonImg = first.find('.textImage > .on');
			var foffImg = first.find('.textImage > .off');
			var fmenuImg = first.find('.subImage');
			var fimageWidth = 0;
			
			fonImg.css('display','none');
			foffImg.css('display','block');
			fmenuImg.animate({width:fimageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
		}
		
		//firstImgOn();
		
		subList.eq(0).find('.subImage').css('width','290px');
		
		subList.hover(
		function(){
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImg = tg.find('.subImage');
			var imageWidth = menuImg.find('img').innerWidth();
			
			firstImgOff();
			
			onImg.css('display','block');
			offImg.css('display','none');
			menuImg.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
			
		},function(){
			var tg = $(this);
			var onImg = tg.find('.textImage > .on');
			var offImg = tg.find('.textImage > .off');
			var menuImg = tg.find('.subImage');
			var imageWidth = 0;
			
			onImg.css('display','none');
			offImg.css('display','block');
			menuImg.animate({width:imageWidth},{duration:600,queue:false,easing:'easeOutCubic'});
			
			firstImgOn();
		});
	});
    
    // 탭	
	var tab_0 = $('.mobile_1_title_wrap > div');
	var content_0 = $('.mobile_1_content_wrap > div');
	content_0.hide();
	content_0.eq(2).show();
	tab_0.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab_0.removeClass('active');
		tg.addClass('active');	
		content_0.css('display','none');
		content_0.eq(i).css('display','block');
	});

	var tab1 = $('.project_1_title_wrap > div');
	var content1 = $('.project_1_content_wrap > div');
	content1.hide();
	content1.eq(2).show();
	tab1.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab1.removeClass('active');
		tg.addClass('active');	
		content1.css('display','none');
		content1.eq(i).css('display','block');
		return false;	
	});	
	
	var tab2 = $('.project_2_title_wrap > div');
	var content2 = $('.project_2_content_wrap > div');
	content2.hide();
	content2.eq(2).show();
	tab2.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab2.removeClass('active');
		tg.addClass('active');	
		content2.css('display','none');
		content2.eq(i).css('display','block');
	});
	
	var tab3 = $('.project_3_title_wrap > div');
	var content3 = $('.project_3_content_wrap > div');
	content3.hide();
	content3.eq(2).show();
	tab3.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab3.removeClass('active');
		tg.addClass('active');	
		content3.css('display','none');
		content3.eq(i).css('display','block');		
	});	

	var tab4 = $('.project_4_title_wrap > div');
	var content4 = $('.project_4_content_wrap > div');
	content4.hide();
	content4.eq(2).show();
	tab4.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab4.removeClass('active');
		tg.addClass('active');	
		content4.css('display','none');
		content4.eq(i).css('display','block');		
	});	
	
	var tab5 = $('.project_5_title_wrap > div');
	var content5 = $('.project_5_content_wrap > div');
	content5.hide();
	content5.eq(2).show();
	tab5.click(function(e){
		e.preventDefault();
		var tg = $(this);
		var i = tg.index();
		tab5.removeClass('active');
		tg.addClass('active');	
		content5.css('display','none');
		content5.eq(i).css('display','block');		
	});	
	
// mobile 손가락 스윙효과

    function swing() {
		$('.click_1').animate({'top':'65px'},300).animate({'top':'55px'},300, swing);
        $('.click_1').animate({'rotate':'-30deg'},600).animate({'rotate':'10deg'},600,swing);
	}
	swing();
	
   function swing_1() {
		$('.click_2').animate({'top':'162px'},300).animate({'top':'152px'},300, swing_1);
        $('.click_2').animate({'rotate':'-30deg'},600).animate({'rotate':'10deg'},600,swing_1);
	}
	swing_1();



//project_1 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#project_1').offset();
		if(j2_sct>j2_hello.top-200){
			$('.project_1_crossbrowse_icon_wrap').delay(200).slideDown(700);
			$('.project_1_title_wrap').delay(200).slideDown(700);
			$('.project_1_etc_button').delay(200).slideDown(700);
			$('.project_1_content_wrap').delay(200).slideDown(700);
			$('.project_1_MainImg').delay(200).slideDown(700);
			$('.project_1_SubImgWrap').delay(200).slideDown(700);
			$('.project_1_SubImg').delay(200).slideDown(700);

		}else{
			$('.project_1_crossbrowse_icon_wrap').slideUp();
			$('.project_1_title_wrap').slideUp();
			$('.project_1_etc_button').slideUp();
			$('.project_1_content_wrap').slideUp();
			$('.project_1_MainImg').slideUp();
			$('.project_1_SubImgWrap').slideUp();
			$('.project_1_SubImg').slideUp();

		}		
	});	

//project_2 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#project_2').offset();
		if(j2_sct>j2_hello.top-200){
			$('.project_2_crossbrowse_icon_wrap').delay(200).slideDown(700);
			$('.project_2_title_wrap').delay(200).slideDown(700);
			$('.project_2_etc_button').delay(200).slideDown(700);
			$('.project_2_content_wrap').delay(200).slideDown(700);
			$('.project_2_MainImg').delay(200).slideDown(700);
			$('.project_2_SubImgWrap').delay(200).slideDown(700);
			$('.project_2_SubImg').delay(200).slideDown(700);

		}else{
			$('.project_2_crossbrowse_icon_wrap').slideUp();
			$('.project_2_title_wrap').slideUp();
			$('.project_2_etc_button').slideUp();
			$('.project_2_content_wrap').slideUp();
			$('.project_2_MainImg').slideUp();
			$('.project_2_SubImgWrap').slideUp();
			$('.project_2_SubImg').slideUp();

		}		
	});	

//project_3 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#project_3').offset();
		if(j2_sct>j2_hello.top-200){
			$('.project_3_crossbrowse_icon_wrap').delay(200).slideDown(700);
			$('.project_3_title_wrap').delay(200).slideDown(700);
			$('.project_3_etc_button').delay(200).slideDown(700);
			$('.project_3_content_wrap').delay(200).slideDown(700);
			$('.project_3_MainImg').delay(200).slideDown(700);


		}else{
			$('.project_3_crossbrowse_icon_wrap').slideUp();
			$('.project_3_title_wrap').slideUp();
			$('.project_3_etc_button').slideUp();
			$('.project_3_content_wrap').slideUp();
			$('.project_3_MainImg').slideUp();


		}		
	});	
	
//project_4 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#project_4').offset();
		if(j2_sct>j2_hello.top-200){
			$('.project_4_crossbrowse_icon_wrap').delay(200).slideDown(700);
			$('.project_4_title_wrap').delay(200).slideDown(700);
			$('.project_4_etc_button').delay(200).slideDown(700);
			$('.project_4_content_wrap').delay(200).slideDown(700);
			$('.project_4_MainImg').delay(200).slideDown(700);


		}else{
			$('.project_4_crossbrowse_icon_wrap').slideUp();
			$('.project_4_title_wrap').slideUp();
			$('.project_4_etc_button').slideUp();
			$('.project_4_content_wrap').slideUp();
			$('.project_4_MainImg').slideUp();


		}		
	});	
	
//project_5 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#project_5').offset();
		if(j2_sct>j2_hello.top-200){
			$('.project_5_crossbrowse_icon_wrap').delay(200).slideDown(700);
			$('.project_5_title_wrap').delay(200).slideDown(700);
			$('.project_5_etc_button').delay(200).slideDown(700);
			$('.project_5_content_wrap').delay(200).slideDown(700);
			$('.project_5_MainImg').delay(200).slideDown(700);


		}else{
			$('.project_5_crossbrowse_icon_wrap').slideUp();
			$('.project_5_title_wrap').slideUp();
			$('.project_5_etc_button').slideUp();
			$('.project_5_content_wrap').slideUp();
			$('.project_5_MainImg').slideUp();


		}		
	});	

//graphic 효과
	$(window).scroll(function(){
		var j2_sct=$(window).scrollTop();
		var j2_hello=$('#graphic').offset();
		if(j2_sct>j2_hello.top-200){
			$('.graphic01').delay(200).slideDown(700);
			$('.graphic02').delay(200).slideDown(700);
			$('.graphicImgBox').delay(200).slideDown(700);


		}else{
			$('.graphic01').slideUp();
			$('.graphic02').slideUp();
			$('.graphicImgBox').slideUp();


		}		
	});	

// 브라우저 호버
	$('.project_1_crossbrowse_icon_wrap').each(function(){
		
		var tg = $(this);
		tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3);
		tg.find('.crossbrowse_icon li.on').stop().fadeTo( 300 , 1);	
		
		tg.find('.crossbrowse_icon li').mouseover(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			$(this).stop().fadeTo( 300 , 1);	
		});
		tg.find('.crossbrowse_icon li').mouseleave(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			tg.find('.ex').stop().fadeTo( 300 , 1).addClass('on');	
		});
	});

	$('.project_2_crossbrowse_icon_wrap').each(function(){
		
		var tg = $(this);
		tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3);
		tg.find('.crossbrowse_icon li.on').stop().fadeTo( 300 , 1);	
		
		tg.find('.crossbrowse_icon li').mouseover(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			$(this).stop().fadeTo( 300 , 1);	
		});
		tg.find('.crossbrowse_icon li').mouseleave(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			tg.find('.ex').stop().fadeTo( 300 , 1).addClass('on');	
		});
	});

	$('.project_3_crossbrowse_icon_wrap').each(function(){
		
		var tg = $(this);
		tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3);
		tg.find('.crossbrowse_icon li.on').stop().fadeTo( 300 , 1);	
		
		tg.find('.crossbrowse_icon li').mouseover(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			$(this).stop().fadeTo( 300 , 1);	
		});
		tg.find('.crossbrowse_icon li').mouseleave(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			tg.find('.ex').stop().fadeTo( 300 , 1).addClass('on');	
		});
	});

	$('.project_4_crossbrowse_icon_wrap').each(function(){
		
		var tg = $(this);
		tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3);
		tg.find('.crossbrowse_icon li.on').stop().fadeTo( 300 , 1);	
		
		tg.find('.crossbrowse_icon li').mouseover(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			$(this).stop().fadeTo( 300 , 1);	
		});
		tg.find('.crossbrowse_icon li').mouseleave(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			tg.find('.ex').stop().fadeTo( 300 , 1).addClass('on');	
		});
	});

	$('.project_5_crossbrowse_icon_wrap').each(function(){
		
		var tg = $(this);
		tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3);
		tg.find('.crossbrowse_icon li.on').stop().fadeTo( 300 , 1);	
		
		tg.find('.crossbrowse_icon li').mouseover(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			$(this).stop().fadeTo( 300 , 1);	
		});
		tg.find('.crossbrowse_icon li').mouseleave(function(){			
			tg.find('.crossbrowse_icon li').stop().fadeTo( 300 , 0.3).removeClass('on');
			tg.find('.ex').stop().fadeTo( 300 , 1).addClass('on');	
		});
	});

	
	/* 퀵메뉴 */
	bb = true;
	
	$('.quick_open').click(function(){
		if(bb){
			$(this).removeClass('quick_open');
			$(this).addClass('quick_toggle');
			$(this).stop(true,true).animate({'margin-left':'1020px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-left':'1020px'},500,function(){bb=false;});
		}else{
			$(this).addClass('quick_open');
			$(this).stop(true,true).animate({'margin-left':'0px'},500);
			$('.quickmenu').stop(true,true).animate({'margin-left':'0px'},500,function(){bb=true;});
		};
	});		
		
});












































