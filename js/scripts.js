function menuopen(){
	if($('body').hasClass('menu-open')){
        $('body').addClass('menu-ani');
        setTimeout(function() {
            $('body').removeClass('menu-ani');
            $('body').removeClass('menu-open');
        }, 300);
	}
	else{
		$('body').addClass('menu-open');
	}
};
function menuclose(){
	if($('body').hasClass('menu-open')){
		$('body').removeClass('menu-open');
	}
};

$(document).ready(function($) {

	var md = window.md;

	$('.nav-trigger').click(function () {
		menuopen();
		return false;
	});

	$('#bg-wrapper').click(function () {
		menuopen();
	});


	if(!md.is(md.mobile())){

	} else {

        $('.footer-menu .footer-menu-trigger').click(function () {
            $(this).parent().toggleClass('footer-menu-open');
            $(this).parent().find('.footer-menu-list').stop().slideToggle(300);
            return false;
        });


	}
	
	$('.n-link-0').click(function () {	
		menuclose();
		var elem = $('#Metaverse')[0];		
		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#Metaverse").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-1').click(function () {	
		menuclose();
		var elem = $('#swap')[0];		
		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#swap").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-2').click(function () {	
		menuclose();
		var elem = $('#partner')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#partner").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-3').click(function () {		
		menuclose();
		var elem = $('#RoverHouse')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#RoverHouse").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-4').click(function () {	
		menuclose();
		var elem = $('#RoverGib')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#RoverGib").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-5').click(function () {		
		menuclose();
		var elem = $('#RoverFunds')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#RoverFunds").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-6').click(function () {	
		menuclose();
		var elem = $('#RoverDao')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#RoverDao").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	
	$('.n-link-7').click(function () {	
		menuclose();
		var elem = $('#NFT')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#NFT").offset().top - 56
			}, 800 );
		}
		return false;		
	});	

	$('.n-link-8').click(function () {	
		menuclose();
		var elem = $('#RoverChains')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#RoverChains").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	$('.n-link-9').click(function () {	
		menuclose();
		var elem = $('#Token')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#Token").offset().top - 56
			}, 800 );
		}
		return false;		
	});	

	// airdrop	
	$('.n-link-Airdrop').click(function () {	
		menuclose();
		var elem = $('#RoverAirdrop')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#LM").offset().top - 56
			}, 800 );
		}
		return false;		
	});	

	$('.n-link-10').click(function () {	
		menuclose();
		var elem = $('#LM')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#LM").offset().top - 56
			}, 800 );
		}
		return false;		
	});	

	$('.n-link-11').click(function () {	
		menuclose();
		var elem = $('#LGE')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#LGE").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	
	$('.n-link-12').click(function () {	
		menuclose();
		var elem = $('#Team')[0];		
		if(!md.is(md.mobile())){
			elem.scrollIntoView({
				behavior: "smooth",
				block: "center",
				inline: "nearest"
			});
		} else {
			$('html,body').animate({
				scrollTop: $("#Team").offset().top - 56
			}, 800 );
		}
		return false;		
	});	
	
	if(!md.is(md.mobile())){
		$('#content-1').waypoint(function(direction) {
			$("#content-1").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-1').waypoint(function(direction) {
			$("#content-1").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	
	if(!md.is(md.mobile())){
		$('#content-3').waypoint(function(direction) {
			$("#content-3").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-3').waypoint(function(direction) {
			$("#content-3").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-4').waypoint(function(direction) {
			$("#content-4").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-4').waypoint(function(direction) {
			$("#content-4").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-5').waypoint(function(direction) {
			$("#content-5").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-5').waypoint(function(direction) {
			$("#content-5").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-team').waypoint(function(direction) {
			$("#content-team").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-team').waypoint(function(direction) {
			$("#content-team").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	if(!md.is(md.mobile())){
		$('#content-banner-icons').waypoint(function(direction) {
			$("#content-banner-icons").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	} else {
		$('#content-banner-icons').waypoint(function(direction) {
			$("#content-banner-icons").addClass('animate', direction=='down');
		},{		
			offset:'40%'
		});
	}
	
	$('#text-toggle').click(function () {
		$(this).parent().toggleClass('text-open');
		return false;
	});	
	
    var options = [
        {
        selector: '#banner-wrapper .container',
        vh: 100
        }
    ];

    var vhFix = new VHChromeFix(options);
	

});


$(document).ready(function($) {
	$(".Textfadehome").css("color", "#ffc000");


});