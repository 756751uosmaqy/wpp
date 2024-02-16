var Myui = {
    
	'Other': {
		'Top': function(high){
			$(window).scroll(function(){
				if($(window).scrollTop()>10){
					$("#header-top").removeClass("color");
				}else if($(window).scrollTop()<110){
					$("#header-top").addClass("color");
				}
			});
		},
		'Topbg': function(high){				
			$(".myui-topbg").css({"height":high});
			$("#header-top").addClass("color");
// 			if(myui.topfixed==1){
// 				Myui.Other.Top();
// 			}
		}	
	}
};

$(function(){	
	$('.digg_link').click(function(){
		var mvdc = $(this);
		$.post(mv_base.ajaxurl,{action: "mv_action_dc", vid: $(this).attr('data-id'), noce: $(this).attr('data-noce'), type: $(this).attr('data-type')},function(result){
			if(result.status == '1'){
				$('.mv_'+result.type).html(result.num);
				layer.msg(result.msg);
			}
			else{
				layer.msg(result.msg);
			}

		});
	});
	$('.mv_baocuo').click(function(){
		var html = $(this).parent().find(".content").html();
		$.post(mv_base.ajaxurl,{action: "mv_action_baocuo", vid: $(this).attr('data-id'), noce: $(this).attr('data-noce'), content: html},function(result){
			if(result.status == '1'){
				layer.msg(result.msg);
			}
			else{
				layer.msg(result.msg);
			}

		});
	});
});

