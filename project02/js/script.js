$(function(){
	
	/* 팝업 */
	/* popup.hide(); */
	$('.popup').click(function(){
		$('.pop').fadeIn();
	});
	$('.pop button').click(function(){
		$('.pop').fadeOut();
	});	
	
	
	/*메인 슬라이드 */
	var panel_width = $('#slide_banner>img').width();
	$('.control_button').each(function(index){
		$(this).attr('data-index',index);
	}).click(function(){
		var index = $(this).attr('data-index');
		moveSlider(index);
		return false;
	});
	var setIntervalId;
	function timer(){
		setIntervalId=setInterval(function(){
			randomNumber++;
			if(randomNumber==$('.control_button').size()){randomNumber=0;}
			/* moveSlider(randomNumber); */
			$('.control_button').eq(randomNumber).trigger('click');
		},4000);
	};
	timer();
	$('.slide_banner_wrap').hover(
		function(){
			clearInterval(setIntervalId);
		},
		function(){
			timer();
		}
	);
	function moveSlider(index){//var index
		var willMoveLeft = -(index%5*1420);
		$('#slide_banner').animate({left:willMoveLeft},500);
		$('.control_button[data-index='+index+']').addClass('active');
		$('.control_button[data-index!='+index+']').removeClass('active');

		randomNumber = index;
	};
	var randomNumber = Math.round(Math.random()*5);
	moveSlider(randomNumber);
	$('.left').click(function(){
		randomNumber--;//-1
		if(randomNumber<0){
			randomNumber=$('.control_button').size()-1;
		}
		$('.control_button').eq(randomNumber).trigger('click');
	});
	$('.right').click(function(){
		randomNumber++;//6
		if(randomNumber==$('.control_button').size()){
			randomNumber=0;
		}
		$('.control_button').eq(randomNumber).trigger('click');
	});	

	
	
	/* 메인 탭 */
	$('.main_tab').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('ul.tabs a');
		var panelDivs = topDiv.find('div.tab_content');
		var lastAnchor;
		var lastPanel;
		anchors.show();
		lastAnchor = anchors.filter('.on');
		lastPanel = $(lastAnchor.attr('href'));
		/* lastPanel = lastAnchor.attr('href'); */
		/* lastPanel = #panel2-2 */
		panelDivs.hide();
		lastPanel.show();
		anchors.click(function(e){
			e.preventDefault();
			var currentAnchor = $(this);
			var currentPanel = $(currentAnchor.attr('href'));
			
			if(currentAnchor.get(0)===lastAnchor.get(0)){
				return;
			};
			

			lastPanel.stop(false, false).slideUp(200,function(){
				lastAnchor.removeClass('on');	
				currentAnchor.addClass('on');
				currentPanel.stop(true, true).slideDown(200);
				lastAnchor = currentAnchor;
				lastPanel = currentPanel;
			});	
		});
	});


	/* contents6 미니슬라이드배너 */
	var interval = 1000;
	$('.contents6').each(function(){
		var timer
		var container = $(this);
		function switchImg(){
			var anchors = container.find('a');
			var first = anchors.eq(0);
			var second = anchors.eq(1);
			first.fadeOut().appendTo(container);
			second.fadeIn();
		};
		function startTimer(){
			timer = setInterval(switchImg,interval);
		};
		function stopTimer(){
			clearInterval(timer);
		};
		container.find('a').hover(stopTimer,startTimer);
		startTimer();
	});
	
	$('.content1_1').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content1_2').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content1_3').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	
	
	$('.content2_1').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content2_2').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content2_3').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content3_1').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content3_2').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.content3_3').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.tab_content>a').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.cescoReviewImg4').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.cescoReviewImg5').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.cescoQnAImg4').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});
	$('.cescoQnAImg5').each(function(){
		var a = $(this);
		var img = a.find('img');
		var src_off = img.attr('src');
		/* var src_off = images/menu01_off.png */
		var src_on = src_off.replace('_off','_on');
		/* var src_off = images/menu01_on.png */
		a.hover(
			function(){
				img.attr('src',src_on);
			},
			function(){
				img.attr('src',src_off);
			}
		);
	});


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
	
	$('.content1_1').each(function(){
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
	
	$('.content1_2').each(function(){
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
	
	$('.content1_3').each(function(){
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
	
	$('.visitorButton1').each(function(){
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
	
	$('.visitorButton2').each(function(){
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
	
	$('.visitorButton3').each(function(){
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
	
	$('.content2_1').each(function(){
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
	
	$('.content2_2').each(function(){
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
	
	$('.content2_3').each(function(){
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
	
	$('.content3_1').each(function(){
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
	
	$('.content3_2').each(function(){
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
	
	$('.content3_3').each(function(){
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
	
	$('.tab_content').each(function(){
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
	
	$('.whyCesco').each(function(){
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
	
	$('.cesco_service_find_img_1').each(function(){
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
	
	$('.cescoTvCf').each(function(){
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
	
	$('.cescoReviewImg4').each(function(){
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
	
	$('.cescoReviewImg5').each(function(){
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
	
	$('.cescoQnAImg4').each(function(){
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
	
	$('.cescoQnAImg5').each(function(){
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
	
	$('.slide_image').each(function(){
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
	
/* 	미니슬라이드배너 */
	$('.contents5').each(function(){
		var box = $(this);
		box.hover(
			function(){
				box.find('img').stop().animate({'margin-top':'-325px'},500);
			},
			function(){
				box.find('img').stop().animate({'margin-top':'0px'},500);
			}
		 );	
	});
	
});





























