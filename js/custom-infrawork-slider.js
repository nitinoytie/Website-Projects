$(document).ready(function () {		
		//Industrial Gallery
		$('.infrawork-gallery').slick({
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
		$('.asian-mysuru').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev1"),
		  nextArrow: $(".next1"),
		});
		var $status1 = $('.pagingInfo1');
		var $slickElement1 = $('.asian-mysuru');

		$slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status1.text(i + '/' + slick.slideCount);
		});
		
		
		$('.bosch-verna').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2"),
		  nextArrow: $(".next2"),
		});
		var $status2 = $('.pagingInfo2');
		var $slickElement2 = $('.bosch-verna');

		$slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2.text(i + '/' + slick.slideCount);
		});
		
		
		$('.bridgestone-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev3"),
		  nextArrow: $(".next3"),
		});
		var $status3 = $('.pagingInfo3');
		var $slickElement3 = $('.bridgestone-chakan');

		$slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status3.text(i + '/' + slick.slideCount);
		});
		
		$('.corjeum-goa').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4"),
		  nextArrow: $(".next4"),
		});
		var $status4 = $('.pagingInfo4');
		var $slickElement4 = $('.corjeum-goa');

		$slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4.text(i + '/' + slick.slideCount);
		});
		
		
		$('.datwyler-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5"),
		  nextArrow: $(".next5"),
		});
		var $status5 = $('.pagingInfo5');
		var $slickElement5 = $('.datwyler-shirwal');

		$slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5.text(i + '/' + slick.slideCount);
		});
		
		$('.embassy-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5a"),
		  nextArrow: $(".next5a"),
		});
		var $status5a = $('.pagingInfo5a');
		var $slickElement5a = $('.embassy-chakan');

		$slickElement5a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5a.text(i + '/' + slick.slideCount);
		});
		
		
		$('.embassy-farrukhnagar').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev6"),
		  nextArrow: $(".next6"),
		});
		var $status6 = $('.pagingInfo6');
		var $slickElement6 = $('.embassy-farrukhnagar');

		$slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status6.text(i + '/' + slick.slideCount);
		});
		
		
		$('.godrej-khalapur').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev7"),
		  nextArrow: $(".next7"),
		});
		var $status7 = $('.pagingInfo7');
		var $slickElement7 = $('.godrej-khalapur');

		$slickElement7.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status7.text(i + '/' + slick.slideCount);
		});
		
		
		$('.mrf-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev8"),
		  nextArrow: $(".next8"),
		});
		var $status8 = $('.pagingInfo8');
		var $slickElement8 = $('.mrf-dahej');

		$slickElement8.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status8.text(i + '/' + slick.slideCount);
		});
		
		
		$('.mula-pune').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev9"),
		  nextArrow: $(".next9"),
		});
		var $status9 = $('.pagingInfo9');
		var $slickElement9 = $('.mula-pune');

		$slickElement9.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status9.text(i + '/' + slick.slideCount);
		});
		
		
		$('.nh-pune').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev10"),
		  nextArrow: $(".next10"),
		});
		var $status10 = $('.pagingInfo10');
		var $slickElement10 = $('.nh-pune');

		$slickElement10.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status10.text(i + '/' + slick.slideCount);
		});
		
		
		$('.thermax-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev11"),
		  nextArrow: $(".next11"),
		});
		var $status11 = $('.pagingInfo11');
		var $slickElement11 = $('.thermax-shirwal');

		$slickElement11.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status11.text(i + '/' + slick.slideCount);
		});
		
		
		$('.wanfeng-rewari').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev12"),
		  nextArrow: $(".next12"),
		});
		var $status12 = $('.pagingInfo12');
		var $slickElement12 = $('.wanfeng-rewari');

		$slickElement12.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status12.text(i + '/' + slick.slideCount);
		});
		
		
		$('.watson-verna').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev13"),
		  nextArrow: $(".next13"),
		});
		var $status13 = $('.pagingInfo13');
		var $slickElement13 = $('.watson-verna');

		$slickElement13.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status13.text(i + '/' + slick.slideCount);
		});

		
		
		//Slider Script
		/*--active Script--*/
		$('.btn-projects').click(function() { 
			$('.btn-projects.active').removeClass("active"); 
			$(this).addClass("active"); 
		});
		
		$("#btn-asian-mysuru").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#asian-mysuru').addClass('opacity');
			$('#asian-mysuru').show();
		});
		$("#btn-bosch-verna").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#bosch-verna').addClass('opacity');
			$('#bosch-verna').show();
		});
		$("#btn-bridgestone-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#bridgestone-chakan').addClass('opacity');
			$('#bridgestone-chakan').show();
		});
		$("#btn-corjeum-goa").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#corjeum-goa').addClass('opacity');
			$('#corjeum-goa').show();
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
		$("#btn-godrej-khalapur").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#godrej-khalapur').addClass('opacity');
			$('#godrej-khalapur').show();
		});
		$("#btn-mrf-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mrf-dahej').addClass('opacity');
			$('#mrf-dahej').show();
		});
		$("#btn-mula-pune").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mula-pune').addClass('opacity');
			$('#mula-pune').show();
		});
		$("#btn-nh-pune").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#nh-pune').addClass('opacity');
			$('#nh-pune').show();
		});
		$("#btn-thermax-shirwal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#thermax-shirwal').addClass('opacity');
			$('#thermax-shirwal').show();
		});
		$("#btn-wanfeng-rewari").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#wanfeng-rewari').addClass('opacity');
			$('#wanfeng-rewari').show();
		});
		$("#btn-watson-verna").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#watson-verna').addClass('opacity');
			$('#watson-verna').show();
		});


	});