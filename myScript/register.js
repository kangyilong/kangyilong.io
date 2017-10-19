$(function(){
	$('.pl-holder').focus(function(){
		$(this).css('border','1px solid red');
	}).blur(function(){
		$(this).css('border','1px solid #d3d3d3');
	})
//用户名验证
	$('.pl-name').blur(function(){
		if($(this).val()!=''){
			if($(this).val().search(/^\w{4,12}$/)==0){
				$('.N-message').html('用户名可用').css('color','blue');
			}
			else{
				$('.N-message').html('请输入4-12位的数字、字母、下划线').css('color','red');
			}
		}
		else{
			$('.N-message').html('请输入用户名').css('color','red');
			$(this).css('border','1px solid red');
		}
	})
//邮箱验证
	$('.e-ml').blur(function(){
		if($(this).val()!=''){
			if($(this).val().search(/^\w{3,10}@\w{2,3}(\.\w{2,3})?\.\w{2,3}$/)==0){
				$('.e-message').html('邮箱格式正确').css('color','blue');
			}
			else{
				$('.e-message').html('邮箱格式不正确').css('color','red');
			}
		}
		else{
			$('.e-message').html('请输入邮箱').css('color','red');
			$(this).css('border','1px solid red');
		}
	})
//密码验证
	$('.js-password').blur(function(){
		if($(this).val()!=''){
			if($(this).val().search(/^\w{4,12}$/)==0){
				$('.pw-message').html('密码可用').css('color','blue');
			}else{
				$('.pw-message').html('请输入4-12位的数字、字母、下划线').css({
					'color':'red',
				});
			}
		}
		else{
			$('.pw-message').html('请输入密码').css('color','red');
			$(this).css('border','1px solid red');
		}
	})
	var onOff=true;
	$('.js-pw-show').click(function(){
		if(onOff){
			$('.img-show').css('display','none');
			$('.img-hide').css('display','block');
			onOff=false;
		}
		else{
			$('.img-show').css('display','block');
			$('.img-hide').css('display','none');
			onOff=true;
		}
		if($('.img-show').css('display')=='none'){
			$('.js-password').prop('type','text');
		}
		else{
			$('.js-password').prop('type','password');
		}
	})
//确认密码
	$('.pl-true').blur(function(){
		if($(this).val()!=''){
			if($(this).val()==$('.js-password').val()){
				$('.F-message').html('密码正确').css('color','blue');
			}
			else{
				$('.F-message').html('密码不正确').css('color','red');
			}
		}
		else{
			$('.F-message').html('请进行密码验证').css('color','red');
			$(this).css('border','1px solid red');
		}
	})
//验证码
	//换图
	var OFF=true,num,at=1;
	$('.c-f').click(function(){
		if(OFF){
			$('.ver-img01').css('display','none').next().css('display','inline-block');
			OFF=false;
		}
		else{
			$('.ver-img03').css('display','none');
			$('.ver-img01').css('display','inline-block');
			OFF=true;
		}
	})
	$('.pl-verify').blur(function(e){
		var e=e||window.event;
		if($('.ver-img01').css('display')=='inline-block'){
			num='RTGH';
			if($(this).val()==num){
				at=0;
			}
			else{
				at=1;
			}
		}
		if($('.ver-img03').css('display')=='inline-block'){
			num='994K';
			if($(this).val()==num){
				at=0;
			}else{
				at=1;
			}
		}
	})

//提交
	$('.sub').click(function(e){
		var e=e||window.event;
		if($('.pl-name').val()==''){
			$('.N-message').html('请输入用户名').css('color','red');
			$(this).css('border','1px solid red');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.e-ml').val()==''){
			$('.e-message').html('请输入邮箱').css('color','red');
			$(this).css('border','1px solid red');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.js-password').val()==''){
			$('.pw-message').html('请输入密码').css('color','red');
			$(this).css('border','1px solid red');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.pl-true').val()==''){
			$('.F-message').html('请进行密码验证').css('color','red');
			$(this).css('border','1px solid red');
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if(at==1){
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}

		if($('.ch01').is(':checked')==false){
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.ch02').is(':checked')==false){
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}

		//console.log($('input[type="checkbox"]').is(':checked'))
		if($('.e-message').html()!='邮箱格式正确' || $('.N-message').html()!='用户名可用'
		 || $('.F-message').html()!='密码正确' || $('.pw-message').html()!='密码可用'){
			if ( e && e.preventDefault ){
     				 e.preventDefault();
     		} 
	     	else{
	        	e.returnValue = false;  
	     	}
		}
		if($('.e-message').html()=='邮箱格式正确' && $('.N-message').html()=='用户名可用'
		 && $('.F-message').html()=='密码正确' && $('.pw-message').html()=='密码可用'){
			window.location.herf=$('.sub').attr('href');
		}
	})
})

