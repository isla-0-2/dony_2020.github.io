jQuery(document).ready(function(){

	/* �α��ι�ư */
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
	
	
	/* top �̺�Ʈ��� */
/* 	$('.close_btn').click(function(){
		$('#top_event').slideUp();
	}); -> �����Ѱ� */
	/* $('#top_event').find('.close_btn').on('click',function(){
		$('#top_event').slideUp();
	}); */

	/* top �̺�Ʈ��� */


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
	
	
	
	


	
	/* zoom ��ư */
	var base = 100; //Ȯ����� �ʱⰪ
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
	
	/* �μ��ư */
	$('.print_btn').on('click',function(){
		window.print();
		return false;
	});
	
	/* �˻� â �ȳ� ���̵� */
    $('#keyword').on('focus',function(){
       $('#keyword').css('background-position','0px -500px');
    }).on('blur',function(){
       if($(this).val()==''){
          $('#keyword').css('background-position','0px 0px');
       }
    });
	
	/* ��ü�޴� �ܹ��� ��ư*/
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
	/* ��ü �޴� �ݱ� ��ư */	
	$('#total_close').on('click',function(){
		$('#total_menu').slideUp();
		return false;
	});
	
	/* ��¥ǥ�� */
	var t = new Date();
	var y = t.getFullYear();
	var m = t.getMonth();
	var d = t.getDate();
	
	$('#date_wrap .year').text(y);
	$('#date_wrap .month').text(m+1);
	$('#date_wrap .date').text(d);	
	
	/* ���û���Ʈ �̵� */
	$('form[name=rel_f]').on('submit',function(){
		var url=$('select',this).val();
		window.open(url);
		return false;
	});
	/* ���޴� */
	var defaultTop = parseInt($('#quick_menu').css('top'));
	/* alert(dafaultTop); */
	$(window).on('scroll',function(){
		var scv = $(window).scrollTop();
		if(scv<1000){scv=1000};
		$('#quick_menu').stop().animate({top:scv+defaultTop+'px'},1000);
	});
	$('#quick_menu').css({top:'1000px'},1000);
});








