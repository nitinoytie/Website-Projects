$(document).ready(function () {		
		//Industrial Gallery
		$('.industrial-gallery').slick({
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
		$('.aarti-jhagadia').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev00"),
		  nextArrow: $(".next00"),
		});
		var $status00 = $('.pagingInfo00');
		var $slickElement00 = $('.aarti-jhagadia');

		$slickElement00.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status00.text(i + '/' + slick.slideCount);
		});
		
		
		$('.industrial-alstom-sricty').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev1"),
		  nextArrow: $(".next1"),
		});
		var $status1 = $('.pagingInfo1');
		var $slickElement1 = $('.industrial-alstom-sricty');

		$slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status1.text(i + '/' + slick.slideCount);
		});
		
		
		$('.industrial-automotive-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2"),
		  nextArrow: $(".next2"),
		});
		var $status2 = $('.pagingInfo2');
		var $slickElement2 = $('.industrial-automotive-chakan');

		$slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2.text(i + '/' + slick.slideCount);
		});
		
		$('.baerlocher-indore').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2a"),
		  nextArrow: $(".next2a"),
		});
		var $status2a = $('.pagingInfo2a');
		var $slickElement2a = $('.baerlocher-indore');

		$slickElement2a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2a.text(i + '/' + slick.slideCount);
		});
		
		
		$('.balkrishna-waluj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev3"),
		  nextArrow: $(".next3"),
		});
		var $status3 = $('.pagingInfo3');
		var $slickElement3 = $('.balkrishna-waluj');

		$slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status3.text(i + '/' + slick.slideCount);
		});
		
		$('.bergerpaints-jejuri').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4"),
		  nextArrow: $(".next4"),
		});
		var $status4 = $('.pagingInfo4');
		var $slickElement4 = $('.bergerpaints-jejuri');

		$slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4.text(i + '/' + slick.slideCount);
		});
		
		$('.bharat-hyderabad').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5"),
		  nextArrow: $(".next5"),
		});
		var $status5 = $('.pagingInfo5');
		var $slickElement5 = $('.bharat-hyderabad');

		$slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5.text(i + '/' + slick.slideCount);
		});
		
		$('.britannia-ranjangaon').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5a"),
		  nextArrow: $(".next5a"),
		});
		var $status5a = $('.pagingInfo5a');
		var $slickElement5a = $('.britannia-ranjangaon');

		$slickElement5a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5a.text(i + '/' + slick.slideCount);
		});
		
		$('.bridgestone-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev6"),
		  nextArrow: $(".next6"),
		});
		var $status6 = $('.pagingInfo6');
		var $slickElement6 = $('.bridgestone-chakan');

		$slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status6.text(i + '/' + slick.slideCount);
		});
		
		$('.carlsberg-mysuru').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev7"),
		  nextArrow: $(".next7"),
		});
		var $status7 = $('.pagingInfo7');
		var $slickElement7 = $('.carlsberg-mysuru');

		$slickElement7.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status7.text(i + '/' + slick.slideCount);
		});
		
		$('.ceat-ambernath').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev8"),
		  nextArrow: $(".next8"),
		});
		var $status8 = $('.pagingInfo8');
		var $slickElement8 = $('.ceat-ambernath');

		$slickElement8.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status8.text(i + '/' + slick.slideCount);
		});
		
		$('.colgate-sanand').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev9"),
		  nextArrow: $(".next9"),
		});
		var $status9 = $('.pagingInfo9');
		var $slickElement9 = $('.colgate-sanand');

		$slickElement9.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status9.text(i + '/' + slick.slideCount);
		});
		
		$('.colgate1-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev10"),
		  nextArrow: $(".next10"),
		});
		var $status10 = $('.pagingInfo10');
		var $slickElement10 = $('.colgate1-sricity');

		$slickElement10.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status10.text(i + '/' + slick.slideCount);
		});
		
		$('.colgate2-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev11"),
		  nextArrow: $(".next11"),
		});
		var $status11 = $('.pagingInfo11');
		var $slickElement11 = $('.colgate2-sricity');

		$slickElement11.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status11.text(i + '/' + slick.slideCount);
		});
		
		$('.corning-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev12"),
		  nextArrow: $(".next12"),
		});
		var $status12 = $('.pagingInfo12');
		var $slickElement12 = $('.corning-chakan');

		$slickElement12.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status12.text(i + '/' + slick.slideCount);
		});
		
		$('.cummins-pune').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev13"),
		  nextArrow: $(".next13"),
		});
		var $status13 = $('.pagingInfo13');
		var $slickElement13 = $('.cummins-pune');

		$slickElement13.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status13.text(i + '/' + slick.slideCount);
		});
		
		$('.cpf-chittoor').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev14"),
		  nextArrow: $(".next14"),
		});
		var $status14 = $('.pagingInfo14');
		var $slickElement14 = $('.cpf-chittoor');

		$slickElement14.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status14.text(i + '/' + slick.slideCount);
		});
		
		$('.cpf-rajahmundry').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev15"),
		  nextArrow: $(".next15"),
		});
		var $status15 = $('.pagingInfo15');
		var $slickElement15 = $('.cpf-rajahmundry');

		$slickElement15.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status15.text(i + '/' + slick.slideCount);
		});
		
		$('.eaton-ranjangaon').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev16"),
		  nextArrow: $(".next16"),
		});
		var $status16 = $('.pagingInfo16');
		var $slickElement16 = $('.eaton-ranjangaon');

		$slickElement16.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status16.text(i + '/' + slick.slideCount);
		});
		
		$('.endurance-pantanagar').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev17"),
		  nextArrow: $(".next17"),
		});
		var $status17 = $('.pagingInfo17');
		var $slickElement17 = $('.endurance-pantanagar');

		$slickElement17.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status17.text(i + '/' + slick.slideCount);
		});
		
		$('.emcure-pune').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev18"),
		  nextArrow: $(".next18"),
		});
		var $status18 = $('.pagingInfo18');
		var $slickElement18 = $('.emcure-pune');

		$slickElement18.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status18.text(i + '/' + slick.slideCount);
		});
		
		$('.suzlon-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev19"),
		  nextArrow: $(".next19"),
		});
		var $status19 = $('.pagingInfo19');
		var $slickElement19 = $('.suzlon-chakan');

		$slickElement19.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status19.text(i + '/' + slick.slideCount);
		});
		
		$('.fenance-pune').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev20"),
		  nextArrow: $(".next20"),
		});
		var $status20 = $('.pagingInfo20');
		var $slickElement20 = $('.fenance-pune');

		$slickElement20.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status20.text(i + '/' + slick.slideCount);
		});
		
		$('.ferring-ambernath').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev21"),
		  nextArrow: $(".next21"),
		});
		var $status21 = $('.pagingInfo21');
		var $slickElement21 = $('.ferring-ambernath');

		$slickElement21.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status21.text(i + '/' + slick.slideCount);
		});
		
		$('.general-nashik').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev22"),
		  nextArrow: $(".next22"),
		});
		var $status22 = $('.pagingInfo22');
		var $slickElement22 = $('.general-nashik');

		$slickElement22.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status22.text(i + '/' + slick.slideCount);
		});
		
		$('.global-nashik').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev23"),
		  nextArrow: $(".next23"),
		});
		var $status23 = $('.pagingInfo23');
		var $slickElement23 = $('.global-nashik');

		$slickElement23.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status23.text(i + '/' + slick.slideCount);
		});
		
		$('.godrej-ambernath').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev24"),
		  nextArrow: $(".next24"),
		});
		var $status24 = $('.pagingInfo24');
		var $slickElement24 = $('.godrej-ambernath');

		$slickElement24.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status24.text(i + '/' + slick.slideCount);
		});
		
		$('.godrej-valia').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev25"),
		  nextArrow: $(".next25"),
		});
		var $status25 = $('.pagingInfo25');
		var $slickElement25 = $('.godrej-valia');

		$slickElement25.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status25.text(i + '/' + slick.slideCount);
		});
		
		$('.alkalies-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev26"),
		  nextArrow: $(".next26"),
		});
		var $status26 = $('.pagingInfo26');
		var $slickElement26 = $('.alkalies-dahej');

		$slickElement26.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status26.text(i + '/' + slick.slideCount);
		});
		
		$('.hcipl-sanaswadi').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev27"),
		  nextArrow: $(".next27"),
		});
		var $status27 = $('.pagingInfo27');
		var $slickElement27 = $('.hcipl-sanaswadi');

		$slickElement27.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status27.text(i + '/' + slick.slideCount);
		});
		
		$('.hal-nashik').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev28"),
		  nextArrow: $(".next28"),
		});
		var $status28 = $('.pagingInfo28');
		var $slickElement28 = $('.hal-nashik');

		$slickElement28.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status28.text(i + '/' + slick.slideCount);
		});
		
		$('.holtec-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev29"),
		  nextArrow: $(".next29"),
		});
		var $status29 = $('.pagingInfo29');
		var $slickElement29 = $('.holtec-dahej');

		$slickElement29.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status29.text(i + '/' + slick.slideCount);
		});
		
		$('.iff-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev30"),
		  nextArrow: $(".next30"),
		});
		var $status30 = $('.pagingInfo30');
		var $slickElement30 = $('.iff-sricity');

		$slickElement30.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status30.text(i + '/' + slick.slideCount);
		});
		
		$('.indoSpace-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev31"),
		  nextArrow: $(".next31"),
		});
		var $status31 = $('.pagingInfo31');
		var $slickElement31 = $('.indoSpace-chakan');

		$slickElement31.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status31.text(i + '/' + slick.slideCount);
		});
		
		$('.itc1-ambernath').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev32"),
		  nextArrow: $(".next32"),
		});
		var $status32 = $('.pagingInfo32');
		var $slickElement32 = $('.itc1-ambernath');

		$slickElement32.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status32.text(i + '/' + slick.slideCount);
		});
		
		$('.itc2-ambernath').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev33"),
		  nextArrow: $(".next33"),
		});
		var $status33 = $('.pagingInfo33');
		var $slickElement33 = $('.itc2-ambernath');

		$slickElement33.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status33.text(i + '/' + slick.slideCount);
		});
		
		$('.itc1-bangalore').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev34"),
		  nextArrow: $(".next34"),
		});
		var $status34 = $('.pagingInfo34');
		var $slickElement34 = $('.itc1-bangalore');

		$slickElement34.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status34.text(i + '/' + slick.slideCount);
		});
		
		$('.itc2-bangalore').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev35"),
		  nextArrow: $(".next35"),
		});
		var $status35 = $('.pagingInfo35');
		var $slickElement35 = $('.itc2-bangalore');

		$slickElement35.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status35.text(i + '/' + slick.slideCount);
		});
		
		$('.itc-mysuru').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev36"),
		  nextArrow: $(".next36"),
		});
		var $status36 = $('.pagingInfo36');
		var $slickElement36 = $('.itc-mysuru');

		$slickElement36.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status36.text(i + '/' + slick.slideCount);
		});
		
		$('.itc-hyderabad').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev37"),
		  nextArrow: $(".next37"),
		});
		var $status37 = $('.pagingInfo37');
		var $slickElement37 = $('.itc-hyderabad');

		$slickElement37.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status37.text(i + '/' + slick.slideCount);
		});
		
		$('.ingersoll-ahmedabad').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev38"),
		  nextArrow: $(".next38"),
		});
		var $status38 = $('.pagingInfo38');
		var $slickElement38 = $('.ingersoll-ahmedabad');

		$slickElement38.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status38.text(i + '/' + slick.slideCount);
		});
		
		$('.jindal-bellary').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev39"),
		  nextArrow: $(".next39"),
		});
		var $status39 = $('.pagingInfo39');
		var $slickElement39 = $('.jindal-bellary');

		$slickElement39.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status39.text(i + '/' + slick.slideCount);
		});
		
		$('.johnson-bawal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev40"),
		  nextArrow: $(".next40"),
		});
		var $status40 = $('.pagingInfo40');
		var $slickElement40 = $('.johnson-bawal');

		$slickElement40.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status40.text(i + '/' + slick.slideCount);
		});
		
		$('.jubilant-bharuch').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev41"),
		  nextArrow: $(".next41"),
		});
		var $status41 = $('.pagingInfo41');
		var $slickElement41 = $('.jubilant-bharuch');

		$slickElement41.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status41.text(i + '/' + slick.slideCount);
		});
		
		$('.kilburn-thane').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev42"),
		  nextArrow: $(".next42"),
		});
		var $status42 = $('.pagingInfo42');
		var $slickElement42 = $('.kilburn-thane');

		$slickElement42.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status42.text(i + '/' + slick.slideCount);
		});
		
		$('.kirloskar-solapur').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev43"),
		  nextArrow: $(".next43"),
		});
		var $status43 = $('.pagingInfo43');
		var $slickElement43 = $('.kirloskar-solapur');

		$slickElement43.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status43.text(i + '/' + slick.slideCount);
		});
		
		$('.ksb-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev44"),
		  nextArrow: $(".next44"),
		});
		var $status44 = $('.pagingInfo44');
		var $slickElement44 = $('.ksb-shirwal');

		$slickElement44.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status44.text(i + '/' + slick.slideCount);
		});
		
		$('.ksb2-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev45"),
		  nextArrow: $(".next45"),
		});
		var $status45 = $('.pagingInfo45');
		var $slickElement45 = $('.ksb2-shirwal');

		$slickElement45.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status45.text(i + '/' + slick.slideCount);
		});
		
		$('.kspg-supa').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev46"),
		  nextArrow: $(".next46"),
		});
		var $status46 = $('.pagingInfo46');
		var $slickElement46 = $('.kspg-supa');

		$slickElement46.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status46.text(i + '/' + slick.slideCount);
		});
		
		$('.mahindra-pirangut').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev47"),
		  nextArrow: $(".next47"),
		});
		var $status47 = $('.pagingInfo47');
		var $slickElement47 = $('.mahindra-pirangut');

		$slickElement47.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status47.text(i + '/' + slick.slideCount);
		});
		
		$('.mane-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev48"),
		  nextArrow: $(".next48"),
		});
		var $status48 = $('.pagingInfo48');
		var $slickElement48 = $('.mane-dahej');

		$slickElement48.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status48.text(i + '/' + slick.slideCount);
		});
		
		$('.mangalore-refinery').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev49"),
		  nextArrow: $(".next49"),
		});
		var $status49 = $('.pagingInfo49');
		var $slickElement49 = $('.mangalore-refinery');

		$slickElement49.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status49.text(i + '/' + slick.slideCount);
		});
		
		$('.mars-hyderabad').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev50"),
		  nextArrow: $(".next50"),
		});
		var $status50 = $('.pagingInfo50');
		var $slickElement50 = $('.mars-hyderabad');

		$slickElement50.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status50.text(i + '/' + slick.slideCount);
		});
		
		$('.minda-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev51"),
		  nextArrow: $(".next51"),
		});
		var $status51 = $('.pagingInfo51');
		var $slickElement51 = $('.minda-chakan');

		$slickElement51.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status51.text(i + '/' + slick.slideCount);
		});
		
		$('.minda-pantanagar').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev52"),
		  nextArrow: $(".next52"),
		});
		var $status52 = $('.pagingInfo52');
		var $slickElement52 = $('.minda-pantanagar');

		$slickElement52.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status52.text(i + '/' + slick.slideCount);
		});
		
		$('.mrf-ponda').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev53"),
		  nextArrow: $(".next53"),
		});
		var $status53 = $('.pagingInfo53');
		var $slickElement53 = $('.mrf-ponda');

		$slickElement53.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status53.text(i + '/' + slick.slideCount);
		});
		
		$('.mukund-lonand').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev54"),
		  nextArrow: $(".next54"),
		});
		var $status54 = $('.pagingInfo54');
		var $slickElement54 = $('.mukund-lonand');

		$slickElement54.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status54.text(i + '/' + slick.slideCount);
		});
		
		$('.neosym-sanaswadi').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev55"),
		  nextArrow: $(".next55"),
		});
		var $status55 = $('.pagingInfo55');
		var $slickElement55 = $('.neosym-sanaswadi');

		$slickElement55.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status55.text(i + '/' + slick.slideCount);
		});
		
		$('.novozymes-patalganga').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev56"),
		  nextArrow: $(".next56"),
		});
		var $status56 = $('.pagingInfo56');
		var $slickElement56 = $('.novozymes-patalganga');

		$slickElement56.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status56.text(i + '/' + slick.slideCount);
		});
		
		$('.novozymes-patalganga2').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev56a"),
		  nextArrow: $(".next56a"),
		});
		var $status56a = $('.pagingInfo56a');
		var $slickElement56a = $('.novozymes-patalganga2');

		$slickElement56a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status56a.text(i + '/' + slick.slideCount);
		});
		
		$('.parle-mysuru').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev57"),
		  nextArrow: $(".next57"),
		});
		var $status57 = $('.pagingInfo57');
		var $slickElement57 = $('.parle-mysuru');

		$slickElement57.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status57.text(i + '/' + slick.slideCount);
		});
		
		$('.pepsico-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev58"),
		  nextArrow: $(".next58"),
		});
		var $status58 = $('.pagingInfo58');
		var $slickElement58 = $('.pepsico-sricity');

		$slickElement58.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status58.text(i + '/' + slick.slideCount);
		});
		
		$('.ppg-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev59"),
		  nextArrow: $(".next59"),
		});
		var $status59 = $('.pagingInfo59');
		var $slickElement59 = $('.ppg-dahej');

		$slickElement59.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status59.text(i + '/' + slick.slideCount);
		});
		
		$('.privilege-lonand').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev60"),
		  nextArrow: $(".next60"),
		});
		var $status60 = $('.pagingInfo60');
		var $slickElement60 = $('.privilege-lonand');

		$slickElement60.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status60.text(i + '/' + slick.slideCount);
		});
		
		$('.putzmeister-goa').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev61"),
		  nextArrow: $(".next61"),
		});
		var $status61 = $('.pagingInfo61');
		var $slickElement61 = $('.putzmeister-goa');

		$slickElement61.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status61.text(i + '/' + slick.slideCount);
		});
		
		$('.sany-chakan').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev62"),
		  nextArrow: $(".next62"),
		});
		var $status62 = $('.pagingInfo62');
		var $slickElement62 = $('.sany-chakan');

		$slickElement62.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status62.text(i + '/' + slick.slideCount);
		});
		
		$('.sapigen-odisha').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev62a"),
		  nextArrow: $(".next62a"),
		});
		var $status62a = $('.pagingInfo62a');
		var $slickElement62a = $('.sapigen-odisha');

		$slickElement62a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status62a.text(i + '/' + slick.slideCount);
		});
		
		$('.perstorp-bharuch').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev62b"),
		  nextArrow: $(".next62b"),
		});
		var $status62b = $('.pagingInfo62b');
		var $slickElement62b = $('.perstorp-bharuch');

		$slickElement62b.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status62b.text(i + '/' + slick.slideCount);
		});
		
		$('.prince-pipes-sangareddy').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev62c"),
		  nextArrow: $(".next62c"),
		});
		var $status62c = $('.pagingInfo62c');
		var $slickElement62c = $('.prince-pipes-sangareddy');

		$slickElement62c.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status62c.text(i + '/' + slick.slideCount);
		});
		
		$('.siemens-verna').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev63"),
		  nextArrow: $(".next63"),
		});
		var $status63 = $('.pagingInfo63');
		var $slickElement63 = $('.siemens-verna');

		$slickElement63.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status63.text(i + '/' + slick.slideCount);
		});
		
		$('.siemens-aurangabad').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev64"),
		  nextArrow: $(".next64"),
		});
		var $status64 = $('.pagingInfo64');
		var $slickElement64 = $('.siemens-aurangabad');

		$slickElement64.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status64.text(i + '/' + slick.slideCount);
		});
		
		$('.soktas-kolhapur').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev65"),
		  nextArrow: $(".next65"),
		});
		var $status65 = $('.pagingInfo65');
		var $slickElement65 = $('.soktas-kolhapur');

		$slickElement65.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status65.text(i + '/' + slick.slideCount);
		});
		
		$('.steel-mehsana').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev66"),
		  nextArrow: $(".next66"),
		});
		var $status66 = $('.pagingInfo66');
		var $slickElement66 = $('.steel-mehsana');

		$slickElement66.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status66.text(i + '/' + slick.slideCount);
		});
		
		$('.suzlon-dhule').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev67"),
		  nextArrow: $(".next67"),
		});
		var $status67 = $('.pagingInfo67');
		var $slickElement67 = $('.suzlon-dhule');

		$slickElement67.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status67.text(i + '/' + slick.slideCount);
		});
		
		$('.tata-ranjangaon').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev68"),
		  nextArrow: $(".next68"),
		});
		var $status68 = $('.pagingInfo68');
		var $slickElement68 = $('.tata-ranjangaon');

		$slickElement68.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status68.text(i + '/' + slick.slideCount);
		});
		
		$('.thermax-shirwal').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev69"),
		  nextArrow: $(".next69"),
		});
		var $status69 = $('.pagingInfo69');
		var $slickElement69 = $('.thermax-shirwal');

		$slickElement69.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status69.text(i + '/' + slick.slideCount);
		});
		
		$('.thermax-sricity').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev70"),
		  nextArrow: $(".next70"),
		});
		var $status70 = $('.pagingInfo70');
		var $slickElement70 = $('.thermax-sricity');

		$slickElement70.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status70.text(i + '/' + slick.slideCount);
		});
		
		$('.unichem-pithampur').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev71"),
		  nextArrow: $(".next71"),
		});
		var $status71 = $('.pagingInfo71');
		var $slickElement71 = $('.unichem-pithampur');

		$slickElement71.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status71.text(i + '/' + slick.slideCount);
		});
		
		$('.united-dahej').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev72"),
		  nextArrow: $(".next72"),
		});
		var $status72 = $('.pagingInfo72');
		var $slickElement72 = $('.united-dahej');

		$slickElement72.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status72.text(i + '/' + slick.slideCount);
		});
		
		$('.united-kadodara').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev72a"),
		  nextArrow: $(".next72a"),
		});
		var $status72a = $('.pagingInfo72a');
		var $slickElement72a = $('.united-kadodara');

		$slickElement72a.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status72a.text(i + '/' + slick.slideCount);
		});
		
		$('.wave-takve').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev73"),
		  nextArrow: $(".next73"),
		});
		var $status73 = $('.pagingInfo73');
		var $slickElement73 = $('.wave-takve');

		$slickElement73.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status73.text(i + '/' + slick.slideCount);
		});
		
		$('.zamil-ranjangaon').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev74"),
		  nextArrow: $(".next74"),
		});
		var $status74 = $('.pagingInfo74');
		var $slickElement74 = $('.zamil-ranjangaon');

		$slickElement74.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status74.text(i + '/' + slick.slideCount);
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		//Slider Script/////////////////////////////////////////////////////////////
		/*--active Script--*/
		$('.btn-projects').click(function() { 
			$('.btn-projects.active').removeClass("active"); 
			$(this).addClass("active"); 
		});
		
		$("#btn-aarti-jhagadia").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#aarti-jhagadia').addClass('opacity');
			$('#aarti-jhagadia').show();
		});
		$("#btn-alstom-sricty").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#alstom-sricty').addClass('opacity');
			$('#alstom-sricty').show();
		});
		$("#btn-automotive-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#automotive-chakan').addClass('opacity');
			$('#automotive-chakan').show();
		});
		$("#btn-baerlocher-indore").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#baerlocher-indore').addClass('opacity');
			$('#baerlocher-indore').show();
		});
		$("#btn-balkrishna-waluj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#balkrishna-waluj').addClass('opacity');
			$('#balkrishna-waluj').show();
		});
		$("#btn-bergerpaints-jejuri").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#bergerpaints-jejuri').addClass('opacity');
			$('#bergerpaints-jejuri').show();
		});
		
		$("#btn-bharat-hyderabad").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#bharat-hyderabad').addClass('opacity');
			$('#bharat-hyderabad').show();
		});
		$("#btn-britannia-ranjangaon").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#britannia-ranjangaon').addClass('opacity');
			$('#britannia-ranjangaon').show();
		});
		$("#btn-bridgestone-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#bridgestone-chakan').addClass('opacity');
			$('#bridgestone-chakan').show();
		});
		$("#btn-carlsberg-mysuru").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#carlsberg-mysuru').addClass('opacity');
			$('#carlsberg-mysuru').show();
		});
		$("#btn-ceat-ambernath").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ceat-ambernath').addClass('opacity');
			$('#ceat-ambernath').show();
		});
		$("#btn-colgate-sanand").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#colgate-sanand').addClass('opacity');
			$('#colgate-sanand').show();
		});
		$("#btn-colgate1-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#colgate1-sricity').addClass('opacity');
			$('#colgate1-sricity').show();
		});
		$("#btn-colgate2-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#colgate2-sricity').addClass('opacity');
			$('#colgate2-sricity').show();
		});
		$("#btn-corning-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#corning-chakan').addClass('opacity');
			$('#corning-chakan').show();
		});
		$("#btn-cummins-pune").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#cummins-pune').addClass('opacity');
			$('#cummins-pune').show();
		});
		$("#btn-cpf-chittoor").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#cpf-chittoor').addClass('opacity');
			$('#cpf-chittoor').show();
		});
		$("#btn-cpf-rajahmundry").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#cpf-rajahmundry').addClass('opacity');
			$('#cpf-rajahmundry').show();
		});
		$("#btn-eaton-ranjangaon").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#eaton-ranjangaon').addClass('opacity');
			$('#eaton-ranjangaon').show();
		});
		$("#btn-endurance-pantanagar").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#endurance-pantanagar').addClass('opacity');
			$('#endurance-pantanagar').show();
		});
		$("#btn-emcure-pune").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#emcure-pune').addClass('opacity');
			$('#emcure-pune').show();
		});
		$("#btn-suzlon-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#suzlon-chakan').addClass('opacity');
			$('#suzlon-chakan').show();
		});
		$("#btn-fenance-pune").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#fenance-pune').addClass('opacity');
			$('#fenance-pune').show();
		});
		$("#btn-ferring-ambernath").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ferring-ambernath').addClass('opacity');
			$('#ferring-ambernath').show();
		});
		$("#btn-general-nashik").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#general-nashik').addClass('opacity');
			$('#general-nashik').show();
		});
		$("#btn-global-nashik").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#global-nashik').addClass('opacity');
			$('#global-nashik').show();
		});
		$("#btn-godrej-ambernath").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#godrej-ambernath').addClass('opacity');
			$('#godrej-ambernath').show();
		});
		$("#btn-godrej-valia").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#godrej-valia').addClass('opacity');
			$('#godrej-valia').show();
		});
		$("#btn-alkalies-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#alkalies-dahej').addClass('opacity');
			$('#alkalies-dahej').show();
		});
		$("#btn-hcipl-sanaswadi").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#hcipl-sanaswadi').addClass('opacity');
			$('#hcipl-sanaswadi').show();
		});
		$("#btn-hal-nashik").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#hal-nashik').addClass('opacity');
			$('#hal-nashik').show();
		});
		$("#btn-holtec-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#holtec-dahej').addClass('opacity');
			$('#holtec-dahej').show();
		});
		$("#btn-iff-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iff-sricity').addClass('opacity');
			$('#iff-sricity').show();
		});
		$("#btn-indoSpace-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#indoSpace-chakan').addClass('opacity');
			$('#indoSpace-chakan').show();
		});
		$("#btn-itc1-ambernath").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc1-ambernath').addClass('opacity');
			$('#itc1-ambernath').show();
		});
		$("#btn-itc2-ambernath").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc2-ambernath').addClass('opacity');
			$('#itc2-ambernath').show();
		});
		$("#btn-itc1-bangalore").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc1-bangalore').addClass('opacity');
			$('#itc1-bangalore').show();
		});
		$("#btn-itc2-bangalore").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc2-bangalore').addClass('opacity');
			$('#itc2-bangalore').show();
		});
		$("#btn-itc-mysuru").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc-mysuru').addClass('opacity');
			$('#itc-mysuru').show();
		});
		$("#btn-itc-hyderabad").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#itc-hyderabad').addClass('opacity');
			$('#itc-hyderabad').show();
		});
		$("#btn-ingersoll-ahmedabad").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ingersoll-ahmedabad').addClass('opacity');
			$('#ingersoll-ahmedabad').show();
		});
		$("#btn-jindal-bellary").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#jindal-bellary').addClass('opacity');
			$('#jindal-bellary').show();
		});
		$("#btn-johnson-bawal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#johnson-bawal').addClass('opacity');
			$('#johnson-bawal').show();
		});
		$("#btn-jubilant-bharuch").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#jubilant-bharuch').addClass('opacity');
			$('#jubilant-bharuch').show();
		});
		$("#btn-kilburn-thane").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kilburn-thane').addClass('opacity');
			$('#kilburn-thane').show();
		});
		$("#btn-kirloskar-solapur").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kirloskar-solapur').addClass('opacity');
			$('#kirloskar-solapur').show();
		});
		$("#btn-ksb-shirwal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ksb-shirwal').addClass('opacity');
			$('#ksb-shirwal').show();
		});
		$("#btn-ksb2-shirwal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ksb2-shirwal').addClass('opacity');
			$('#ksb2-shirwal').show();
		});
		$("#btn-kspg-supa").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kspg-supa').addClass('opacity');
			$('#kspg-supa').show();
		});
		$("#btn-mahindra-pirangut").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mahindra-pirangut').addClass('opacity');
			$('#mahindra-pirangut').show();
		});
		$("#btn-mane-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mane-dahej').addClass('opacity');
			$('#mane-dahej').show();
		});
		$("#btn-mangalore-refinery").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mangalore-refinery').addClass('opacity');
			$('#mangalore-refinery').show();
		});
		$("#btn-mars-hyderabad").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mars-hyderabad').addClass('opacity');
			$('#mars-hyderabad').show();
		});
		$("#btn-minda-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#minda-chakan').addClass('opacity');
			$('#minda-chakan').show();
		});
		$("#btn-minda-pantanagar").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#minda-pantanagar').addClass('opacity');
			$('#minda-pantanagar').show();
		});
		
		$("#btn-mrf-ponda").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mrf-ponda').addClass('opacity');
			$('#mrf-ponda').show();
		});
		$("#btn-mukund-lonand").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mukund-lonand').addClass('opacity');
			$('#mukund-lonand').show();
		});
		$("#btn-neosym-sanaswadi").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#neosym-sanaswadi').addClass('opacity');
			$('#neosym-sanaswadi').show();
		});
		$("#btn-novozymes-patalganga").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#novozymes-patalganga').addClass('opacity');
			$('#novozymes-patalganga').show();
		});
		$("#btn-novozymes-patalganga2").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#novozymes-patalganga2').addClass('opacity');
			$('#novozymes-patalganga2').show();
		});
		$("#btn-parle-mysuru").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#parle-mysuru').addClass('opacity');
			$('#parle-mysuru').show();
		});
		$("#btn-pepsico-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#pepsico-sricity').addClass('opacity');
			$('#pepsico-sricity').show();
		});
		$("#btn-ppg-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ppg-dahej').addClass('opacity');
			$('#ppg-dahej').show();
		});
		$("#btn-privilege-lonand").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#privilege-lonand').addClass('opacity');
			$('#privilege-lonand').show();
		});
		$("#btn-putzmeister-goa").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#putzmeister-goa').addClass('opacity');
			$('#putzmeister-goa').show();
		});
		$("#btn-sany-chakan").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#sany-chakan').addClass('opacity');
			$('#sany-chakan').show();
		});
		$("#btn-sapigen-odisha").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#sapigen-odisha').addClass('opacity');
			$('#sapigen-odisha').show();
		});
		$("#btn-perstorp-bharuch").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#perstorp-bharuch').addClass('opacity');
			$('#perstorp-bharuch').show();
		});
		$("#btn-prince-pipes-sangareddy").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#prince-pipes-sangareddy').addClass('opacity');
			$('#prince-pipes-sangareddy').show();
		});
		$("#btn-siemens-verna").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#siemens-verna').addClass('opacity');
			$('#siemens-verna').show();
		});
		$("#btn-siemens-aurangabad").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#siemens-aurangabad').addClass('opacity');
			$('#siemens-aurangabad').show();
		});
		$("#btn-soktas-kolhapur").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#soktas-kolhapur').addClass('opacity');
			$('#soktas-kolhapur').show();
		});
		$("#btn-steel-mehsana").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#steel-mehsana').addClass('opacity');
			$('#steel-mehsana').show();
		});
		$("#btn-suzlon-dhule").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#suzlon-dhule').addClass('opacity');
			$('#suzlon-dhule').show();
		});
		$("#btn-tata-ranjangaon").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#tata-ranjangaon').addClass('opacity');
			$('#tata-ranjangaon').show();
		});
		$("#btn-thermax-shirwal").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#thermax-shirwal').addClass('opacity');
			$('#thermax-shirwal').show();
		});
		$("#btn-thermax-sricity").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#thermax-sricity').addClass('opacity');
			$('#thermax-sricity').show();
		});
		$("#btn-unichem-pithampur").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#unichem-pithampur').addClass('opacity');
			$('#unichem-pithampur').show();
		});
		$("#btn-united-dahej").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#united-dahej').addClass('opacity');
			$('#united-dahej').show();
		});
		$("#btn-united-kadodara").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#united-kadodara').addClass('opacity');
			$('#united-kadodara').show();
		});
		$("#btn-wave-takve").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#wave-takve').addClass('opacity');
			$('#wave-takve').show();
		});
		$("#btn-zamil-ranjangaon").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#zamil-ranjangaon').addClass('opacity');
			$('#zamil-ranjangaon').show();
		});
		/*$("#btn-").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#').addClass('opacity');
			$('#').show();
		});*/

	});