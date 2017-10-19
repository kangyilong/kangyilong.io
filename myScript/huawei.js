//导航栏实现效果
$(function(){
	/*通过window的scroll方法实现获取滚动条的距离*/
	$(window).scroll(function(){
		if($('body,html').scrollTop()>0){
		//其他浏览器
			if($('body,html').innerWidth()>1150){
			//导航列表实现
				if($('body,html').scrollTop()>=100){
					$('.header-box01').css('display','none');
					$('.box').css('top','56px');
				}
				else{
					$('.header-box01').css('display','block');
					$('.box').css('top','81px');
				}
				if($('body,html').scrollTop()>=100){
					$('.header-box01').css('display','none');
					$('.box').css('top','56px');
				}
				else{
					$('.header-box01').css('display','block');	
				}	
			}
			else{
				$('.header-box01').css('display','none');
				if($('body,html').scrollTop()>=100){
					$('header').css('display','none');
				}
				else{
					$('header').css('display','block');
				}	
			}
		//上升按钮判断
			if($('body,html').scrollTop()>=500){
				$('.box-sidebar span').css('display','block');
			}else{
				$('.box-sidebar span').css('display','none');
			}

		}else{
		//谷歌浏览器
			if($('body').innerWidth()>1140){
			//导航列表实现
				if($('body').scrollTop()>=100){
					$('.header-box01').css('display','none');
					$('.box').css('top','56px');
				}
				else{
					$('.header-box01').css('display','block');
					$('.box').css('top','81px');
				}
				if($('body').scrollTop()>=100){
					$('.header-box01').css('display','none');
					$('.box').css('top','56px');
				}
				else{
					$('.header-box01').css('display','block');	
				}	
			}
			else{
				$('.header-box01').css('display','none');
				if($('body').scrollTop()>=200){
					$('header').css('display','none');
				}
				else{
					$('header').css('display','block');
				}	
			}
		//上升按钮判断
			if($('body').scrollTop()>=500){
				$('.box-sidebar span').css('display','block');
			}else{
				$('.box-sidebar span').css('display','none');
			}
			
		 }
	})
})
$(function(){
//返回顶部
	$('.box-sidebar span').click(function(){
		$('body,html').animate({
			scrollTop:'0'
		},600);
	})
})
	
		
//实现触碰显示效果

$(function(){
	function showNav(num){
		$('.nav-ul li a').eq(num).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		}).closest('li').siblings('li').not('.not').children().css({
			'color': '#323232',
			'border-bottom': 'none',
		})
	}
	function hideNva(){
		$('.nav-ul li a').not('.not').css({
			'color': '#323232',
			'border-bottom': 'none',
		})
	}

/*
	实现移出暂停1秒后消失
 */


/*
	我想...
 */
$('.nav-ul li').eq(0).mouseenter(function(){
		showNav(0);
		$('.box-li01 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li01').delay(300).show(20).animate({
				'height':'268px',
			},200,function(){
				$('.box-li01 ul').eq(0).css('display','block').animate({
					'height':'268px',
				},300);
			})
	}).mouseleave(function(){
		if($('.box-li01').css('display')=='none'){
			$('.box-li01').finish().css('height','0').css('display','none');
			$('.box-li01 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li01').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li01 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})
/*
	个人及家用产品
 */
	$('.nav-ul li').eq(1).mouseenter(function(){
		showNav(1);
		$('.box-li02 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li02').delay(300).show(20).animate({
				'height':'325px',
			},200,function(){
				$('.box-li02 ul').eq(0).css('display','block').animate({
					'height':'325px',
				},300);
			})
	}).mouseleave(function(){
		if($('.box-li02').css('display')=='none'){
			$('.box-li02').finish().css('height','0').css('display','none');
			$('.box-li02 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li02').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li02 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})
/*
	商用解决方案
 */
	$('.nav-ul li').eq(2).mouseenter(function(){
		showNav(2);
		$('.box-li03 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li03').delay(300).show(20).animate({
				'height':'394px',
			},200,function(){
				$('.box-li03 ul').eq(0).css('display','block').animate({
					'height':'394px',
				},300);
			})
	}).mouseleave(function(){
		if($('.box-li03').css('display')=='none'){
			$('.box-li03').finish().css('height','0').css('display','none');
			$('.box-li03 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li03').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li03 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})
/*
	行业话题
 */
	$('.nav-ul li').eq(3).mouseenter(function(){
		showNav(3);
		$('.box-li04 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li04').delay(300).show(20).animate({
				'height':'352px',
			},200,function(){
				$('.box-li04 ul').eq(0).css('display','block').animate({
					'height':'352px',
				},300);
			})
	}).mouseleave(function(){
		if($('.box-li04').css('display')=='none'){
			$('.box-li04').finish().css('height','0').css('display','none');
			$('.box-li04 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li04').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li04 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})
/*
	技术支持
 */
	$('.nav-ul li').eq(4).mouseenter(function(){
		showNav(4);
		$('.box-li05 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li05').delay(300).show(20).animate({
				'height':'342px',
			},200,function(){
				$('.box-li05 ul').eq(0).css('display','block').animate({
					'height':'342px',
				},300);
			})
	}).mouseleave(function(){
		if($('.box-li05').css('display')=='none'){
			$('.box-li05').finish().css('height','0').css('display','none');
			$('.box-li05 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li05').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li05 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})
/*
	合作伙伴
 */
	$('.nav-ul li').eq(5).mouseenter(function(){
		showNav(5);
		$('.box-li06 ul').has().siblings('div').children().eq().css('display','none');
		$('.box-li06').delay(300).show(20).animate({
				'height':'242px',
			},200,function(){
				$('.box-li06 ul').eq(0).css('display','block').animate({
					'height':'242px',
				},300);
			})
	}).mouseleave(function(){

		if($('.box-li06').css('display')=='none'){
			$('.box-li06').finish().css('height','0').css('display','none');
			$('.box-li06 ul').eq(0).finish().css('height','0').css('display','none');
		}
		$('.box-li06').delay(1000).slideUp(60,function(){
			$(this).css('height','0').css('display','none');
			$('.box-li06 ul').eq(0).css('height','0').css('display','none');
			hideNva();
		});
	})

//实现选中子菜单的效果
	

//我想
	$('.box-li01 ul').eq(0).mouseenter(function(){
		$('.box-li01').finish().css('display','block').css('height','268px');
		$('.box-li01 ul').eq(0).finish().css('display','block').css('height','268px');
		$('.nav-ul li a').eq(0).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})	
	}).mouseleave(function(){
		$('.box-li01').delay(1000).css('height','0').css('display','none');
		$('.box-li01 ul').eq(0).delay(1000).css('height','0').css('display','none');
		$('.nav-ul li a').eq(0).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
	})

//个人及家用产品
	$('.box-li02 ul').eq(0).mouseenter(function(){
		$('.box-li02').finish().css('display','block').css('height','325px');
		$('.box-li02 ul').eq(0).finish().css('display','block').css('height','325px');
		$('.nav-ul li a').eq(1).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})	
	}).mouseleave(function(){
		$('.nav-ul li a').eq(1).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
		$('.box-li02').delay(1000).css('height','0').css('display','none');
		$('.box-li02 ul').eq(0).delay(1000).css('height','0').css('display','none');
	})

//商用解决方案
	$('.box-li03 ul').eq(0).mouseenter(function(){
		$('.box-li03').finish().css('display','block').css('height','394px');
		$('.box-li03 ul').eq(0).finish().css('display','block').css('height','394px');
		$('.nav-ul li a').eq(2).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})
	}).mouseleave(function(){
		$('.nav-ul li a').eq(2).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
		$('.box-li03').delay(1000).css('height','0').css('display','none');
		$('.box-li03 ul').eq(0).delay(1000).css('height','0').css('display','none');
	})

//行业话题
	$('.box-li04 ul').eq(0).mouseenter(function(){
		$('.box-li04').finish().css('display','block').css('height','352px');
		$('.box-li04 ul').eq(0).finish().css('display','block').css('height','352px');
		$('.nav-ul li a').eq(3).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})	
	}).mouseleave(function(){
		$('.nav-ul li a').eq(3).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
		$('.box-li04').delay(1000).css('height','0').css('display','none');
		$('.box-li04 ul').eq(0).delay(1000).css('height','0').css('display','none');
	})

//技术支持
	$('.box-li05 ul').eq(0).mouseenter(function(){
		$('.box-li05').finish().css('display','block').css('height','342px');
		$('.box-li05 ul').eq(0).finish().css('display','block').css('height','342px');
		$('.nav-ul li a').eq(4).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})
	}).mouseleave(function(){
		$('.nav-ul li a').eq(4).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
		$('.box-li05').delay(1000).css('height','0').css('display','none');
		$('.box-li05 ul').eq(0).delay(1000).css('height','0').css('display','none');
	})

//合作伙伴
	$('.box-li06 ul').eq(0).mouseenter(function(){
		$('.box-li06').finish().css('display','block').css('height','242px');
		$('.box-li06 ul').eq(0).finish().css('display','block').css('height','242px');
		$('.nav-ul li a').eq(5).css({
			'color': '#e22835',
			'border-bottom': '2px solid #cb3034',
		})
	}).mouseleave(function(){
		$('.nav-ul li a').eq(5).css({
			'color': '#323232',
			'border-bottom': 'none',
		})
		$('.box-li06').delay(1000).css('height','0').css('display','none');
		$('.box-li06 ul').eq(0).delay(1000).css('height','0').css('display','none');
	})
})


/*
	主体部分，轮播图
 */
/*
	自动播放
 */
$(function(){
	clearInterval(time);
	var time=setInterval(cMo,4000);
	function cMo(){
		$('.box-bigImg').fadeToggle(800);
		$('.box-bigImg02').fadeToggle(800);
	}
	$('.sec01').mouseenter(function(){
		clearInterval(time);
	})
	$('.sec01').mouseleave(function(){
		time=setInterval(cMo,4000);
	})
	$('.ul-li').click(function(){
		$(this).closest('div').fadeOut().siblings().not('.clibox').fadeIn();
	})
})
/*
	左右播放
 */
$(function(){
	$('.box-left').click(function(){
		change();
	})
	$('.box-right').click(function(){
		change();
	})
	function change(){
		if($('.box-img-ul li').eq(0).is('.ul-li')){
			$('.box-bigImg').fadeToggle(600);
			$('.box-bigImg02').fadeToggle(600);
		}
	}
})

/*
	图片动态效果
 */
$(function(){
	function iMove(num){
	//自身动
		ys.animate({
			'left':'-10px',
		},600);
	//图动
		ys.prev().children('img').animate({
			'left':'-10px',
		},600);
	//里面内容动
		ys.children().eq(0).animate({
			'top':num+'px',
		},600);
	//p标签的文字显示
		ys.children().eq(0).children().eq(1).animate({
			'opacity':'1',
		},1000);
	}
	function tMove(num){
		ys.animate({
			'left':'10px',
		},600);
		ys.prev().children('img').animate({
			'left':'10px',
		},600);
		ys.children().eq(0).animate({
			'top':num+'px',
		},600);
		ys.children().eq(0).children().eq(1).animate({
			'opacity':'0',
		},400);;
	}
	var ys=null;

//图片移动
	$('.hw1_img01-01').mouseenter(function(){
		ys=$(this);
		iMove(520);
		
	});
	$('.hw1_img01-01').mouseleave(function(){
		ys=$(this);
		tMove(545);
	})
	$('.hw1_img01-02').mouseenter(function(){
		ys=$(this);
		iMove(165);
	});
	$('.hw1_img01-02').mouseleave(function(){
		ys=$(this);
		tMove(200);
	})
	$('.hw1_img01-03').mouseenter(function(){
		ys=$(this);
		iMove(200);
	});
	$('.hw1_img01-03').mouseleave(function(){
		ys=$(this);
		tMove(225);
	})
	$('.hw1_img01-04').mouseenter(function(){
		ys=$(this);
		iMove(190);
	});
	$('.hw1_img01-04').mouseleave(function(){
		ys=$(this);
		tMove(215);
	})
	$('.hw1_img01-05').mouseenter(function(){
		ys=$(this);
		iMove(180);
	});
	$('.hw1_img01-05').mouseleave(function(){
		ys=$(this);
		tMove(205);
	})
})


/*菜单栏显示效果*/
$(function(){
	$('.li-p').hover(function(){
		$(this).toggleClass('changCol');
	}).click(function(){
			$(this).addClass('ckCol').next().slideToggle(400).parent('li').siblings().children('p').removeClass('ckCol');
			$(this).parent('li').siblings().children('ul').slideUp(400);
	}).next().children('li').hover(function(){
		$(this).toggleClass('changCol');
		$(this).children('a').toggleClass('changCol');
		$(this).parent('ul').prev().toggleClass('ckCol').toggleClass('changCol');
	})
})

/*从主页面切换*/
$(function(){
	$('.menu').click(function(){
		$('.menu-nav').animate({
			right:'0',
		},500,function(){ 	
			$('html').css('overflow','hidden');
		});
	})
	$('.menu-nav-li01').click(function(){
		$('.menu-nav').animate({
			right:'-100%',
		},500);
		$('html').css('overflow-y','auto');
	})
})

/*手机版页面底部*/
$(function(){
	$('.col-sm-1 p').click(function(){
		$(this).next().slideToggle(600);
	})
})