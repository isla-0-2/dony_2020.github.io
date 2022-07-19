jQuery(document).ready(function(){
		
	var $messages = $('.messages-content'),
		d, h, m,
		i = 0;

		
		//chat  close 
		$('.close_chat').click(
			function(){
				$('.chat').css('display','none');
			}
		);
		
		
		
	 $(window).load(function() {
	  $messages.mCustomScrollbar();
	  setTimeout(function() {
		fakeMessage2();
		fakeMessage();		
	  }, 100);
	});

	function updateScrollbar() {
	  $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	  });
	}
	 
	function setDate(){
	  d = new Date()
	  if (m != d.getMinutes()) {
		m = d.getMinutes();
		$('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
	  }
	}

	function insertMessage() {
	  msg = $('.message-input').val();
	  if ($.trim(msg) == '') {
		return false;
	  }
	  $('<div class="message message-personal">' + msg +'</div>').appendTo($('.mCSB_container')).addClass('new');
	  setDate();
	  $('.message-input').val(null);
	  updateScrollbar();

	  setTimeout(function() {
		fakeMessage();
	  }, 1000 + (Math.random() * 20) * 100);	  
	  
		
	  
	}

	$('.message-submit').click(function() {
	  insertMessage();
	});

	$(window).on('keydown', function(e) {
	  if (e.which == 13) {
		insertMessage();
		return false;
	  }
	})

	var Fake = [
	  '안녕하세요. 등산 좋아님.^^',
	  '이번 목표는 한라산 정복입니다',
	  '아~ 네. 거기 알아요.',
	  '그럼 7시 30분에 봬요~^^ 늦지 않게 부탁드릴게요.',
	  ':)',
	  ':)',
	  ':)',
	  ':)',
	  ':)',

	]	
/* 	var Fake2 = [
	  '안녕하세요.. 홍치즈..입니다...^^',
	] */

	function fakeMessage() {
	  if ($('.message-input').val() != '') {
		return false;
	  }
	  $('<div class="message loading new"><figure class="avatar"><img src="img/person2.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	  updateScrollbar();

	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="img/person2.jpg" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100);

	}
			
	function fakeMessage2() {
	  if ($('.message-input').val() != '') {
		return false;
	  }
	  
	 /*  $('<div class="message loading new"><figure class="avatar"><img src="img/person1.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
	  updateScrollbar(); */

/* 	  setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><figure class="avatar"><img src="img/person1.jpg" /></figure>' + Fake2[0] + '</div>').appendTo($('.mCSB_container')).addClass('new');
		setDate();
		updateScrollbar();
		i++;
	  }, 1000 + (Math.random() * 20) * 100); */

	}
		
	
		
});
