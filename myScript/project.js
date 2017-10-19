//产品与解决方案
$(function(){
	var pd=0,i=0,time;
	$('.zl-pc-nav').mousemove(function(){
		pd=1;
	})
	function foo(){
		i++;
		if(pd==0){
			$('.zl-pic img').stop();
		}
		else if(i%4==0){
			$('.zl-pic img').css({
				left:'-53px',
				top:'-123px'
			})
		}
		if(i%4==1){
			$('.zl-pic img').css({
				left:'-47px',
				top:'-117px'
			})
		}
		pd=0;
	}
	$('.zl-pc-nav').mouseenter(function(){
		pd=1;
		time=setInterval(foo,160);
	}).mouseleave(function(){
		clearInterval(time);
	})
})
//技术支持
$(function(){
	$('.nav-input-focus').focus(function(){
		$(this).val('');
	})
})

//菜单栏显示
$(function(){
	var num;
	$('.header-ul01 li').mouseenter(function(){
		num=$(this).index();
		$('.zl-pc-nav').eq($(this).index()).css({
			'display':'block',
			'height':'0',
		}).animate({
			'height':'100%',
		},300).siblings().not('header').not('section').not('footer').animate({
			'height':'0'
		},200,function(){
			$(this).css('display','none');
		});
	}).mouseleave(function(){
		$('.zl-pc-nav').eq($(this).index()).delay(300).animate({
			'height':'0'
		},200,function(){
			$(this).css('display','none');
		})
	});
	$('.zl-pc-nav').mouseenter(function(){
		$('.header-ul01 li a').eq(num).addClass('chan-col');
		$(this).eq(0).finish();
		$(this).css({
			'display':'block',
			'height':'100%'
		});
	}).mouseleave(function(){
		$('.header-ul01 li a').eq(num).removeClass('chan-col');
		$(this).animate({
			'height':'0'
		},200,function(){
			$(this).css('display','none');
		});
	})

	$('.header-sp1').click(function(){
		$('.box-menu').animate({
			'right':'0'
		},300);
		$('html').css('overflow-y','hidden');
	})
	$('.close').click(function(){
		$('.box-menu').animate({
			'right':'-100%',
		},300);
		$('html').css('overflow-y','auto');
	})
	$('.menu-list-ul li').mouseenter(function(){
		$(this).css('background-color','#666').children().css('color','#fff');
	}).mouseleave(function(){
		$(this).css('background-color','#fff').children().css('color','#666');
	})

//主体-1

$(function(){
	$('.moddlel').mouseenter(function(){
		$(this).children().eq(0).animate({
			width:'100%',
		},300);
		}).mouseleave(function(){
			$(this).children().eq(0).animate({
				width:'0%',
			},200);
		})
	})
	$(window).scroll(function(){
		if($('body').scrollTop()>0){
			if($('body').scrollTop()<=0){
				$('.index-quick-links').css({
					'position':'fixed',
					'bottom':'0px',
				})
			}
			else{
				$('.index-quick-links').css({
					'position':'relative',
				})
			}
		}
		else{
			if($('body,html').scrollTop()<=0){
				$('.index-quick-links').css({
					'position':'fixed',
					'bottom':'0px',
				})
			}
			else{
				$('.index-quick-links').css({
					'position':'relative',
				})
			}
		}
		
	})
})
//主体-2
$(function(){
	$('.change').mouseenter(function(){
		$(this).next().fadeIn(200);
		$(this).children().eq(0).animate({
			'margin-top':'200px',
			'opacity':'1'
		},500)
	}).mouseleave(function(){
		$(this).next().fadeOut(200);
		$(this).children().eq(0).animate({
			'margin-top':'310px',
			'opacity':'0'
		},500)
	})
	$('.mod-a').mouseenter(function(){
		$(this).stop();
	})
})
//主体五
$(function(){
	$('.eve-fix li').mouseenter(function(){
		$(this).addClass('current').siblings().removeClass('current');
		$(this).children().eq(0).children().eq(0).children().css('font-size','24px')
		$(this).siblings().children().eq(0).children().eq(0).children().animate({
			'font-size':'14px'
		},300);

		$(this).children().eq(0).children().not('link').eq(1).css('display','none').nextAll().animate({
			'opacity':'1',
			'margin-top':'20px',
		},300);
		$(this).siblings().children().children().eq(1).css('display','block');
		$(this).siblings().children().children().eq(0).children().css('font-size','14px');
		$(this).siblings().children().children().eq(7).css('display','block');
		$(this).siblings().children().children().eq(6).children().css('font-size','14px');
		$(this).siblings().children().children().eq(13).css('display','block');
		$(this).siblings().children().children().eq(12).children().css('font-size','14px');
		$(this).siblings().children().children().eq(1).nextAll().animate({
			'opacity':'0',
			'margin-top':'100px',
		},300);
		$(this).siblings().children().children().eq(7).nextAll().animate({
			'opacity':'0',
			'margin-top':'100px',
		},300);
		$(this).siblings().children().children().eq(13).nextAll().animate({
			'opacity':'0',
			'margin-top':'100px',
		},300);
	})
	$('.eve-fix li').mouseleave(function(){
		$(this).stop();
	})
})
$(function(){
	$(window).scroll(function(){
		if($('body').innerWidth()<900){
			$('.eve-fix li').mouseenter(function(){
				$(this).children().eq(0).children().eq(0).children().css('font-size','16px');
			})
		}
	})
	 $('dt').click(function(){
		if($(this).children().hasClass('icon-jia1')){
			$(this).children().eq(0).addClass('icon-iconmianxingshujujian').removeClass('icon-jia1');
			$(this).next().slideDown(300);
		}
		else{
			$(this).children().eq(0).removeClass('icon-iconmianxingshujujian').addClass('icon-jia1');
			$(this).next().slideUp(200);
		}
		
		
	})
})