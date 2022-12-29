$(document).ready(function () {		
		//Industrial Gallery
		$('.institutional-gallery').slick({
		  dots: false,
		  infinite: false,
		  speed: 300,
		  slidesToShow: 4,
		  slidesToScroll: 4,
		  prevArrow: $(".prev0"),
		  nextArrow: $(".next0"),
		  responsive: [
			{
			  breakpoint: 1100,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
			  }
			},
			{
			  breakpoint:767,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			  }
			}

		  ]
		});
			
		
		
		
		
		
		//Industrial Slider
		$('.college-verna').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev1"),
		  nextArrow: $(".next1"),
		});
		var $status1 = $('.pagingInfo1');
		var $slickElement1 = $('.college-verna');

		$slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status1.text(i + '/' + slick.slideCount);
		});
		
				
		$('.iim1-indore').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2"),
		  nextArrow: $(".next2"),
		});
		var $status2 = $('.pagingInfo2');
		var $slickElement2 = $('.iim1-indore');

		$slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2.text(i + '/' + slick.slideCount);
		});
		
		
		$('.iim5-indore').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev3"),
		  nextArrow: $(".next3"),
		});
		var $status3 = $('.pagingInfo3');
		var $slickElement3 = $('.iim5-indore');

		$slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status3.text(i + '/' + slick.slideCount);
		});
		
		
		$('.kendriya-khadakwasla').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4"),
		  nextArrow: $(".next4"),
		});
		var $status4 = $('.pagingInfo4');
		var $slickElement4 = $('.kendriya-khadakwasla');

		$slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4.text(i + '/' + slick.slideCount);
		});
		
		
		$('.symbiosis-engineering').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5"),
		  nextArrow: $(".next5"),
		});
		var $status5 = $('.pagingInfo5');
		var $slickElement5 = $('.symbiosis-engineering');

		$slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5.text(i + '/' + slick.slideCount);
		});
		
		
		$('.symbiosis-hostel').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev6"),
		  nextArrow: $(".next6"),
		});
		var $status6 = $('.pagingInfo6');
		var $slickElement6 = $('.symbiosis-hostel');

		$slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status6.text(i + '/' + slick.slideCount);
		});
		
		
		$('.vtp-bhopal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev7"),
		  nextArrow: $(".next7"),
		});
		var $status7 = $('.pagingInfo7');
		var $slickElement7 = $('.vtp-bhopal');

		$slickElement7.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status7.text(i + '/' + slick.slideCount);
		});
		
		
		//Slider Script
		/*--active Script--*/
		$('.btn-projects').click(function() { 
			$('.btn-projects.active').removeClass("active"); 
			$(this).addClass("active"); 
		});
		
		$("#btn-college-verna").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#college-verna').addClass('opacity');
			$('#college-verna').show();
		});
		$("#btn-iim1-indore").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iim1-indore').addClass('opacity');
			$('#iim1-indore').show();
		});
		$("#btn-iim5-indore").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iim5-indore').addClass('opacity');
			$('#iim5-indore').show();
		});
		$("#btn-kendriya-khadakwasla").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kendriya-khadakwasla').addClass('opacity');
			$('#kendriya-khadakwasla').show();
		});
		$("#btn-symbiosis-engineering").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#symbiosis-engineering').addClass('opacity');
			$('#symbiosis-engineering').show();
		});
		$("#btn-symbiosis-hostel").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#symbiosis-hostel').addClass('opacity');
			$('#symbiosis-hostel').show();
		});
		$("#btn-vtp-bhopal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#vtp-bhopal').addClass('opacity');
			$('#vtp-bhopal').show();
		});


	});