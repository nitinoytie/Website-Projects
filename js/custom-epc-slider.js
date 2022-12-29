$(document).ready(function () {		
		//Industrial Gallery
		$('.epc-gallery').slick({
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
		$('.dassault-nagpur').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev1"),
		  nextArrow: $(".next1"),
		});
		var $status1 = $('.pagingInfo1');
		var $slickElement1 = $('.dassault-nagpur');

		$slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status1.text(i + '/' + slick.slideCount);
		});
		
		
		$('.datwyler-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2"),
		  nextArrow: $(".next2"),
		});
		var $status2 = $('.pagingInfo2');
		var $slickElement2 = $('.datwyler-shirwal');

		$slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2.text(i + '/' + slick.slideCount);
		});
		
		
		$('.embassy-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev3"),
		  nextArrow: $(".next3"),
		});
		var $status3 = $('.pagingInfo3');
		var $slickElement3 = $('.embassy-chakan');

		$slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status3.text(i + '/' + slick.slideCount);
		});
		
		
		$('.embassy-farrukhnagar').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4"),
		  nextArrow: $(".next4"),
		});
		var $status4 = $('.pagingInfo4');
		var $slickElement4 = $('.embassy-farrukhnagar');

		$slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4.text(i + '/' + slick.slideCount);
		});
		
		$('.johnson-matthey-bawal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4a"),
		  nextArrow: $(".next4a"),
		});
		var $status4a = $('.pagingInfo4a');
		var $slickElement4a = $('.johnson-matthey-bawal');

		$slickElement4a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4a.text(i + '/' + slick.slideCount);
		});
		
		$('.kimberly-clark-sanaswadi').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4b"),
		  nextArrow: $(".next4b"),
		});
		var $status4b = $('.pagingInfo4b');
		var $slickElement4b = $('.kimberly-clark-sanaswadi');

		$slickElement4b.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4b.text(i + '/' + slick.slideCount);
		});
		
		$('.midea-supa').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5"),
		  nextArrow: $(".next5"),
		});
		var $status5 = $('.pagingInfo5');
		var $slickElement5 = $('.midea-supa');

		$slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5.text(i + '/' + slick.slideCount);
		});
		
		$('.sca-ranjangaon').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev6"),
		  nextArrow: $(".next6"),
		});
		var $status6 = $('.pagingInfo6');
		var $slickElement6 = $('.sca-ranjangaon');

		$slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status6.text(i + '/' + slick.slideCount);
		});
		
		$('.kimberly-clark-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev7"),
		  nextArrow: $(".next7"),
		});
		var $status7 = $('.pagingInfo7');
		var $slickElement7 = $('.kimberly-clark-sricity');

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
		
		$("#btn-dassault-nagpur").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#dassault-nagpur').addClass('opacity');
			$('#dassault-nagpur').show();
		});
		$("#btn-datwyler-shirwal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#datwyler-shirwal').addClass('opacity');
			$('#datwyler-shirwal').show();
		});
		$("#btn-embassy-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#embassy-chakan').addClass('opacity');
			$('#embassy-chakan').show();
		});
		$("#btn-embassy-farrukhnagar").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#embassy-farrukhnagar').addClass('opacity');
			$('#embassy-farrukhnagar').show();
		});
		$("#btn-johnson-matthey-bawal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#johnson-matthey-bawal').addClass('opacity');
			$('#johnson-matthey-bawal').show();
		});
		$("#btn-kimberly-clark-sanaswadi").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kimberly-clark-sanaswadi').addClass('opacity');
			$('#kimberly-clark-sanaswadi').show();
		});
		$("#btn-midea-supa").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#midea-supa').addClass('opacity');
			$('#midea-supa').show();
		});
		$("#btn-sca-ranjangaon").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#sca-ranjangaon').addClass('opacity');
			$('#sca-ranjangaon').show();
		});
		$("#btn-kimberly-clark-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kimberly-clark-sricity').addClass('opacity');
			$('#kimberly-clark-sricity').show();
		});


	});