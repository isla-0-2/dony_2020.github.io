$(function(){

	/* ���κ��־��� */
	window.mySwipe=$('#mySwipe').Swipe({
		auto:3000,
		continuous: true,
		callback:function(index,element){
			$('.touch_bullet .active').attr('src',$('.touch_bullet .active').attr('src').replace('on.png','off.png')).removeClass('active'); /* ��Ƽ�긦 ������ */
			$('.touch_bullet img').eq(index).attr('src',$('.touch_bullet img').eq(index).attr('src').replace('off.png','on.png')).addClass('active'); /* ��Ƽ�긦 ������ */
			/* �ι�° �Ķ���� = img/visual_bullet_on.png */
		}
	}).data('Swipe');
    
	/* ���־� ����, ���� ��ư */
	$('.touch_left_btn a').on('click',function(){
		mySwipe.prev();
		return false;
	});
	$('.touch_right_btn a').on('click',function(){
		mySwipe.next();
		return false;
	}); 

	/* �Ѹ� ��ư ��� */
	$('#roll_banner_wrap dd').not(':first').hide();
	var onBtn = $('#roll_banner_wrap dt a:first');
	$('#roll_banner_wrap dt a').on('click',function(){
		$('#roll_banner_wrap dd:visible').hide();
		$('img', onBtn).attr('src',$('img',onBtn).attr('src').replace('over.png','out.png'));
		var num = $('#roll_banner_wrap dt a').index(this);
		$('#roll_banner_wrap dd').eq(num).show();
		$('img',this).attr('src',$('img',this).attr('src').replace('out.png','over.png'));
		onBtn = $(this);
		btnNum = num; 
		return false;
	});
	var btnNum = 0;
	function autoPlay(){
		btnNum++;
		if(btnNum>=7) {btnNum = 0}
		$('#roll_banner_wrap dt a').eq(btnNum).trigger('click');
		auto1 = setTimeout(autoPlay,3000);
	};
	autoPlay();
	$('.playBtn').on('click',function(){
		clearTimeout(auto1); /* -> Ŭ���� ������ ������ ���� ������ */
		auto1 = setTimeout(autoPlay,3000);
		$('img',this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
		$('.stopBtn img').attr('src',$('.stopBtn img').attr('src').replace('on.gif','off.gif'));
		return false;
	});
	$('.stopBtn').on('click',function(){
	  clearTimeout(auto1);
	  $('img',this).attr('src',$('img',this).attr('src').replace('off.gif','on.gif'));
	  $('.playBtn img').attr('src',$('.playBtn img').attr('src').replace('on.gif','off.gif'));
	  return false;
	});
	
	/* �Ǹ޴� */
	var onTab = $('#tabmenu dt a:first');
	$('#tabmenu dt a').on('mouseover focus',function(){
	  $('#tabmenu dd:visible').hide();
	  $('img', onTab).attr('src',$('img', onTab).attr('src').replace('over.jpg','out.jpg'));
	  var i = $('#tabmenu dt a').index(this);
	  $(this).parent().next().show();
	  $('img', this).attr('src',$('img',this).attr('src').replace('out.jpg','over.jpg'));
	  onTab = $(this);
	  return false;
	});
	
	
	/* ����� �׳� �̰� ���ϴ� */	
	
/* 	$('.used_banner_1>img').hide();	
	$('.used_banner_1>img').fadeIn(3000);
	
	$('.used_banner_text_1').hide();
	$('.used_banner_text_1').fadeIn(4000);
	
	$('.used_banner_text_2').hide();
	$('.used_banner_text_2').fadeIn(5000); */
		
	$(window).scroll( function(){
		$('.used_banner_1>img').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object/2 ){
				$(this).animate({'opacity':'1'},2000);
			}
		}); 
	});
	
	$(window).scroll( function(){
		$('.used_banner_text_1').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object/2 ){
				$(this).animate({'opacity':'1'},2000);
			}
		}); 
	});
	
	$(window).scroll( function(){
		$('.used_banner_text_2').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			
			if( bottom_of_window > bottom_of_object/2 ){
				$(this).animate({'opacity':'1'},2000);
			}
		}); 
	});
	
	var mySlider = $('#best_bg ul').bxSlider({
		mode:'horizontal', // ����������� �̵�
		speed:100, //�̵��ӵ�
		pager:false, //������ ǥ�� ���� ����
		moveSlides: 1, // �� ���� �̵�
		slideWidth: 275, // �Ѱ� �����̵� ��
		minSlides:5, // �ּ� ���� �����̵� ����
		maxSlides:5, // �ִ� ���� �����̵� ����
		slideMargin: 50, // �����̵� ���� ����
		auto:true, // �ڵ� �����̵� ����
		autoHover:true, //���콺 ������ �ڵ� ����z
		controls: false // ���� ���� ��ư�� ����(�Ʒ� �Լ��� ���� �ڵ��� ����)
	});
	$('.prev_btn').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next_btn').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});
	
	$('.sub_list>div').each(function(){
		var box = $(this);
		var boxImg = box.find('.sub_img')
		box.hover(
			function(){
				boxImg.stop().animate({'margin-left':'-384px'},250);
			},
			function(){
				boxImg.stop().animate({'margin-left':'0px'},250);
			}
		);		
	});	
		
	
	/* �˾����� */
	if($.cookie('pdw')!='no'){$('#pop_wrap').show()};
	$('#pop_wrap').css('cursur','move').draggable();
	$('#pop_wrap area:eq(0)').on('click',function(){
		$('#pop_wrap').fadeOut();
		return false;
	});
	$('#pop_wrap area:eq(1)').on('click',function(){
		$.cookie('pdw','no',{expires:1});
		$('#pop_wrap').fadeOut();
		return false;
	});
	
	/* �̺�Ʈ�����̵��� */
	var visual = $('#brandVisual > ul > li');
	var button = $('#buttonList > li');
	var current = 0;
	var setIntervalId;
	button.on({
		click:function(){
		var tg = $(this);
		var i = tg.index();
		if(current == tg.index()){return;}
		//alert(i);
		button.removeClass('on');
		tg.addClass('on');
		move(i);
		return false;
		}
	});
	function timer(){
			setIntervalId = setInterval(function(){
				var n = current + 1;
				if(n==visual.size()){n=0};
				button.eq(n).trigger('click');
		},2000);
	};
	timer();
	function move(i){
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		currentEl.css({left:0}).stop().animate({'left':'-100%'});
		nextEl.css({left:'100%'}).stop().animate({left:0});
		current = i;
	};
	$('#event_wrap').on({
		mouseover:function(){
			clearInterval(setIntervalId);
		},
		mouseout:function(){
			timer();
		}
	});	
});









