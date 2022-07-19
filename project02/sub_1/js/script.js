$(function(){
	/* alert('a'); */
	$('.main_tab').each(function(){
		var topDiv = $(this);
		var anchors = topDiv.find('.tabs li a');
		var panelDivs = topDiv.find('.tab_content');
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
	

	
	
});
