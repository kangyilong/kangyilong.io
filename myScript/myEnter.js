$(function(){
	$('.pl-txt').focusin(function(){
		$(this).attr('placeholder','').css('border','2px solid #ca0b03');
	}).focusout(function(){
		$(this).css('border','2px solid #b9babe');
		if($(this).val()!=''){
			if($(this).val().search(/^\w{4,12}$/)==0){
				$('.zh-show').html('用户名可用').css('color','blue');
			}else{
				$('.zh-show').html('用户名不可用').css('color','red');
			}
		}
		else{
			$('.zh-show').html('用户名不能为空');
			$(this).css('border','1px solid red');
			$('.pl-txt').attr('placeholder','');
		} 	
	})
	$('.pl-pw').focusin(function(){
		$(this).attr('placeholder','').css('border','2px solid #ca0b03');
		if($('.pl-txt').val()==''){
			$('.zh-show').html('用户名不能为空');
			$(this).css('border','1px solid red');
			$('.pl-txt').attr('placeholder','');
		}
	}).focusout(function(){
		if($(this).val()!=''){
			if($(this).val().search(/^\w{4,12}$/)==0){
				$('.message').html('密码可用').css('color','blue');
			}else{
				$('.message').html('密码不可用').css('color','red');
				$('.pl-holder').attr('placeholder','');
			}
		}
		else{
			$('.message').html('密码不能为空');
			$(this).css('border','1px solid red');
			$('.pl-holder').attr('placeholder','');
		} 
	})
	$('.a-btn').click(function(e){
		e=e||window.event;
		if($('.pl-pw').val()=='' && $('.pl-txt').val()==''){
			$('.zh-show').html('用户名不能为空');
			$('.message').html('密码不能为空');
			$('.pl-pw').css('border','1px solid red');
			$('.pl-txt').css('border','1px solid red');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.pl-pw').val()==''){
			$('.message').html('密码不能为空');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.message').html()=='密码不可用' || $('.zh-show').html()=='用户名不可用'){
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.message').html()=='密码可用' && $('.zh-show').html()=='用户名可用'){
			window.location.herf=$('.a-btn').attr('href');
		}
	})
})