$(function(){
	/* alert('a'); */

	$('.faq_contents_wrap').each(function(){
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
	
	
	
	
	
	$('.faq_board_contents').each(function(){
		var dl = $(this);
		var allDt = dl.find('dt');
		var allDd = dl.find('dd');
		allDd.hide();
		allDd.eq(0).hide();
		allDt.css('cursor','pointer');
		allDt.eq(0).css('cursor','default');
		
		allDt.click(function(){
			var dt = $(this);
			var dd = dt.next();
			allDd.hide();
			dd.show();
			allDt.css('cursor','pointer');
			dt.eq(0).css('cursor','default');
		});
	});
	
	
	
});





























