
//菜单栏
$(function(){
	var onOff=true;
	$('.item-menu').click(function(){
		if(onOff){
			$('.menu-ul').css({
				'display':'block',
				'height':'0'
			}).animate({
				'height':'700px'
			},500);
			onOff=false;
		}else{
			$('.menu-ul').slideUp(300);
			onOff=true;
		}
	})
})
//菜单列表
$(function(){
//手机
	$('.show-pho').click(function(){
		$('.myPhone').slideDown(300);
	})
	$('.return-menu').click(function(){
		$('.phone').slideUp(200);
		$('.menu-ul').slideDown(200);
	})
	$('.close-menu01').click(function(){
		$('.phone').slideUp(200);
	})

//电脑
	$('.show-cup').click(function(){
		$('.computer').slideDown(300);
	})
//设备
	$('.show-equ').click(function(){
		$('.equip').slideDown(300);
	})
//智能
	$('.show-hom').click(function(){
		$('.homes').slideDown(300);
	})
//更多
	$('.show-more').click(function(){
		$('.more').slideDown(300);
	})
//软件
	$('.show-soft').click(function(){
		$('.soft').slideDown(300);
	})
})



//手机选项栏
$(function(){
	var arr=['img/phoneHandImg/p10.png','img/phoneHandImg/p10-blue.png','img/phoneHandImg/p10-black.png','img/phoneHandImg/p10-rosegold.png','img/phoneHandImg/p10-white.png','img/phoneHandImg/p10-green.png'];
	$('.product-item li').click(function(){
		$('.product img').eq(0).attr('src',arr[$(this).index()]);
	})
var num=0 ,im=0;
	$('.prev i').eq(0).click(function(){
		im--;
		if(im<0){
			im=3;
		}
		$('.sec03-item li').eq(im).css('display','block').siblings().css('display','none');
	})
	$('.next i').eq(0).click(function(){
		im++;
		if(im>3){
			im=0;
		}
		$('.sec03-item li').eq(im).css('display','block').siblings().css('display','none');
	})
})
//叶底选项栏
$(function(){
	$('.page strong').click(function(){
		$(this).addClass('strong').siblings('strong').removeClass('strong');
		$(this).next().slideToggle(400).siblings('ul').slideUp(300);
	})
})