//导航菜单栏实现效果

//显示菜单栏
$(function(){
	$('.navigation li').eq(0).children().eq(0).children().eq(0).addClass('change-nav-a');
	$('.navigation li').mouseenter(function(){
		$('.box-span01 a').css('z-index','1');
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
		$('.box-span01 a').css('z-index','10');
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

/*主体效果*/
$(function(){

//轮播图
	$('.HuaWei-mate li').click(function(){
		if($(this).children().is('.hua-mate-col')===false){
			$('.box-span01').css('display','none').delay(800).fadeIn(200);
		}
		$('.slides li').eq($(this).index()).show(300).siblings().hide(300);
		$(this).children().addClass('hua-mate-col');
		$(this).siblings().children().removeClass('hua-mate-col');
	})
//商品图
	$('.p10-img').mouseenter(function(){
		$(this).children().eq(1).animate({
			opacity:'0',
		},800).siblings().animate({
			opacity:'1',
		},1200)
	})
	$('.p10-img').mouseleave(function(){
		$(this).children().eq(0).animate({
			opacity:'0',
		},800).siblings().animate({
			opacity:'1',
		},1200)
	})

//侧边栏
	$('.sec-sp-box02 span').not('.big-span').mouseenter(function(){
		$(this).css('color','#c52525');
	})
	$('.sec-sp-box02 span').not('.big-span').mouseleave(function(){
		$(this).css('color','#666');
	})
})

//响应式调整
$(function(){
	$('.HuaWei-mate li').click(function(){
		$(this).addClass('li-chan-col').siblings().removeClass('li-chan-col');
		if($(this).is('.li-chan-col')===false){
			$('.box-span01').css('display','none').delay(800).fadeIn(200);
		}
		$('.slides li').eq($(this).index()).show(300).siblings().hide(300);
	
	})

	
	
})

