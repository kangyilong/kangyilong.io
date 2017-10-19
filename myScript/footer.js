//显示菜单栏
$(function(){
	$('.navigation li').eq(0).children().eq(0).children().eq(0).addClass('change-nav-a');
	$('.navigation li').mouseenter(function(){
		$('.menu').css('z-index','99').css('display','block');
		$('.menu').children().eq($(this).index()).css({
			'display':'block',
			'height':'0%',
		}).animate({
			height:'100%',
		},400);
		$(this).children().eq(0).children().eq(0).addClass('change-nav-a');
		if($(this).index()>0){
			$('.navigation li').eq(0).children().eq(0).children().eq(0).removeClass('change-nav-a');
		}
	})
	$('.navigation li').mouseleave(function(){
		$('.menu').css('display','none');
		$('.menu').css('z-index','9');
		$('.menu').children().eq($(this).index()).animate({
			'height':'0%'
		},200,function(){
			$(this).css('display','none');
		});
		$(this).children().eq(0).children().eq(0).removeClass('change-nav-a');
		$('.navigation li').eq(0).children().eq(0).children().eq(0).addClass('change-nav-a');
	})
});
//固定菜单显示
$(function(){
	$('.menu').children().mouseenter(function(){
		$('.menu').css('z-index','99').css('display','block');
		$(this).stop();
		$('.navigation li').eq($(this).index()).children().eq(0).children().eq(0).addClass('change-nav-a');
		if($(this).index()>0){
			$('.navigation li').eq(0).children().eq(0).children().eq(0).removeClass('change-nav-a');
		}
	})
	$('.menu').children().mouseleave(function(){
		$('.menu').css('display','none');
		$('.navigation li').eq($(this).index()).children().eq(0).children().eq(0).removeClass('change-nav-a');
		$(this).animate({
			'height':'0%'
		},200,function(){
			$(this).css('display','none');
			$('.menu').css('z-index','9');
		});
		$('.navigation li').eq(0).children().eq(0).children().eq(0).addClass('change-nav-a');
	})
});