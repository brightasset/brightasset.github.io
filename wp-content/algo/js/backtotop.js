// iflame内が更新されたらTOPに戻す

$(function(){
	var obj = $('#iframe');

	obj.on('load',function(){
		$(window).scrollTop(0);
	});
});
