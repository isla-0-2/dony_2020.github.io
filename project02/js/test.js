$(function(){

	$('.tab_contents').each(function(){
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
	
});
