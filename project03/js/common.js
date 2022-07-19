jQuery(document).ready(function(){

	/* 로그인버튼 */
	$('.login_wrap>a').on('click',function(){
		$('#login_f').animate({top: '20px'},500);
		return false;
	});
	$('.login_wrap .login_close_btn, input[alt=login]').on('click',function(){
		$('#login_f').animate({top: '-500px'},500);
		return false;
	});
	$('#user_id, #user_pw').on('focus',function(){
		$(this).prev().css('left','-55555px');
	});
	$('#user_id, #user_pw').on('blur',function(){
		if($(this).val()==''){
		$(this).prev().css('left','5px');}
   });
	
	
	/* top 이벤트배너 */
/* 	$('.close_btn').click(function(){
		$('#top_event').slideUp();
	}); -> 내가한거 */
	/* $('#top_event').find('.close_btn').on('click',function(){
		$('#top_event').slideUp();
	}); */

	/* top 이벤트배너 */


	bb = true;
	$('.close_btn').on('click',function(){
		if(bb){
			$('#top_event, .event').stop().animate({'height':'0px'},2000);
			$(this).addClass('open');
			$(this).stop().animate({'margin-top':'-10px'},100)
			bb=false;
		}else{
			$(this).removeClass('open');
			$(this).stop().animate({'margin-top':'10px'},100);
			$('.close_btn.open').stop().animate({'height':'42px'},2000, function(){bb=true;});
		}
	});   	
	
	
	
	


	
	/* zoom 버튼 */
	var base = 100; //확대비율 초기값
	var mybody = $('body');
	$('#zoom a').on('click',function(){
		var zNum = $('#zoom a').index(this); // zNum = 0 (+), zNum = 1 (100) , zNum = 2 (-)
		if(zNum==0){
			base+=10; //A=A+B, A+=B
		}else if(zNum==1){
			base=100;
		}else{
			base-=10;
		}
		mybody.css('overflow-x','auto')
			.css('transform-origin','50% 0')
			.css('transform','scale('+base/100+')')
			.css('zoom',base+'%');
		return false;
	});
	
	/* 인쇄버튼 */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});
	
	/* 검색 창 안내 가이드 */
    $('#keyword').on('focus',function(){
       $('#keyword').css('background-position','0px -500px');
    }).on('blur',function(){
       if($(this).val()==''){
          $('#keyword').css('background-position','0px 0px');
       }
    });
	
	/* 전체메뉴 햄버거 버튼*/
	var bb = true;
	$('#total_btn a').on('click',function(){
		if(bb==true){
			$('#total_menu').slideDown();
			bb=false
		}else{
			$('#total_menu').slideUp();
			bb=true
		}
		return false;
	});
	/* 전체 메뉴 닫기 버튼 */	
	$('#total_close').on('click',function(){
		$('#total_menu').slideUp();
		return false;
	});
	
	/* 날짜표기 */
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	
	$('#date_wrap .year').text(y);
	$('#date_wrap .month').text(m+1);
	$('#date_wrap .date').text(d);	
	
	/* 관련사이트 이동 */
	$('form[name=rel_f]').on('submit',function(){
		var url=$('select',this).val();
		window.open(url);
		return false;
	});
	/* 퀵메뉴 */
	var defaultTop = parseInt($('#quick_menu').css('top'));
	/* alert(dafaultTop); */
	$(window).on('scroll',function(){
		var scv = $(window).scrollTop();
		if(scv<1000){scv=1000};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
	});
	$('#quick_menu').css({top:'1000px'},1000);
});








