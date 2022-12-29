 //Navigation Script 
 $(window).scroll(function() {
  var sticky = $('.navbar'),
    scroll = $(window).scrollTop();

  if (scroll >= 140) sticky.addClass('nav-fixed ');
  else sticky.removeClass('nav-fixed ');
});


// Menu Dropdown
	/*$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
*/
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );


//Cant take input as Alphabets
function valid(e) {
    var a = e.which ? e.which : e.keyCode;
    return 37 != a && 39 != a && 8 != a && 46 != a && 9 != a && 32 != a && (48 > a || a > 57) ? !1 : !0
}

function validAlphabet(e) {
    var a = e.which ? e.which : e.keyCode;
    return 45 != a && (48 > a || a > 57 || 9 == a) ? !0 : !1
}

$(document).ready(function() {
    $("#contact-form").bootstrapValidator({
        trigger: "blur",
        message: "The name cannot be empty",
        excluded: ":disabled",
        fields: {
            name: {
                container: ".errorName",
                message: "The name is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The name is required and cannot be empty"
                    }
                }
            },
			
            email: {
                container: ".errorEmail",
                message: "The email id is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The email id is required and cannot be empty"
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Not a valid email id"
                    }
                }
            },
			phone: {
                container: ".errorPhone",
                message: "The phone number is required",
                validators: {
                    notEmpty: {
                        message: "The phone number is required"
                    },
                    /*regexp: {
                        regexp: /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/,
                        message: "Not a valid mobile number"
                    }*/
                }
            },
			
			organisation: {
                container: ".errorOrganisation",
                message: "The organisation is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The organisation is required and cannot be empty"
                    }
                }
            },

			

        }
    });
	
	$("#contact-form01").bootstrapValidator({
        trigger: "blur",
        message: "The name cannot be empty",
        excluded: ":disabled",
        fields: {
            name01: {
                container: ".errorName01",
                message: "The name is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The name is required and cannot be empty"
                    }
                }
            },
			
            email01: {
                container: ".errorEmail01",
                message: "The email id is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The email id is required and cannot be empty"
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Not a valid email id"
                    }
                }
            },
			phone01: {
                container: ".errorPhone01",
                message: "The phone number is required",
                validators: {
                    notEmpty: {
                        message: "The phone number is required"
                    },
                    /*regexp: {
                        regexp: /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/,
                        message: "Not a valid mobile number"
                    }*/
                }
            },
			
			organisation01: {
                container: ".errorOrganisation01",
                message: "The organisation is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The organisation is required and cannot be empty"
                    }
                }
            },

			

        }
    });
	
	
	$("#career-form").bootstrapValidator({
        trigger: "blur",
        message: "The name cannot be empty",
        excluded: ":disabled",
        fields: {
            name: {
                container: ".errorName",
                message: "The name is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The name is required and cannot be empty"
                    }
                }
            },
			
            email: {
                container: ".errorEmail",
                message: "The email id is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The email id is required and cannot be empty"
                    },
                    regexp: {
                        regexp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Not a valid email id"
                    }
                }
            },
			
			phoneNumber: {
                container: ".errorPhoneNumber",
                message: "The number is required and cannot be empty",
                validators: {
                    notEmpty: {
                        message: "The number is required and cannot be empty"
                    },
                    /*regexp: {
                        regexp: /^(\+?\d{1,4}[\s-])?(?!0+\s+,?$)\d{10}\s*,?$/,
                        message: "Not a valid mobile number"
                    }*/
                }
            },
					

        }
    });

});


/* --------------Logo Slider------------ */
$('.slider-logo').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: $(".prev"),
  nextArrow: $(".next "),
  responsive: [
	{
	  breakpoint: 1401,
	  settings: {
		slidesToShow: 5,
		slidesToScroll: 5,
	  }
	},
	{
	  breakpoint: 1101,
	  settings: {
		slidesToShow: 4,
		slidesToScroll: 4,
	  }
	},
	{
	  breakpoint:991,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
	  }
	},
	{
	  breakpoint: 481,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
	  }
	}

  ]
});


$('.slider-partner').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  prevArrow: $(".prevP"),
  nextArrow: $(".nextP"),
  responsive: [
	{
	  breakpoint: 1401,
	  settings: {
		slidesToShow: 5,
		slidesToScroll: 5,
	  }
	},
	{
	  breakpoint: 1101,
	  settings: {
		slidesToShow: 4,
		slidesToScroll: 4,
	  }
	},
	{
	  breakpoint:991,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 3,
	  }
	},
	{
	  breakpoint: 481,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 2,
	  }
	}

  ]
});

$(window).on('scroll', function() {
  var $elem = $('#clienteleElement');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {
    setTimeout(function(){
		$('#clienteleElement .slider-logo').removeClass('no-move');
	},4500);
  }
});
$(window).on('scroll', function() {
  var $elem = $('#partnerElement');
  var $window = $(window);

  var docViewTop = $window.scrollTop();
  var docViewBottom = docViewTop + $window.height();
  var elemTop = $elem.offset().top;
  var elemBottom = elemTop + $elem.height();
  if (elemBottom < docViewBottom) {
    setTimeout(function(){
		$('#partnerElement .slider-partner').removeClass('no-move02');
	},4500);
  }
});
/* --------------/Logo Slider------------ */



//More Details Description
$(document).ready(function(e){
	$(".slider-box .btn-more-details").click(function(e){
		$(".slider-box.opacity .gallery-desc-content").toggleClass("addDesc");
	});
		$(".slider-box .btn-projects, .slider-box .btn-desc-close").click(function(e){
		$(".slider-box .gallery-desc-content").removeClass("addDesc");
	});
});

//Wow Animation Script
new WOW().init();
