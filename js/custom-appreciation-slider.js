$(document).ready(function () {		
		//Industrial Gallery
		$('.gallery-appreciation').slick({
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
		$('.11cidc-awards').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev1"),
		  nextArrow: $(".next1"),
		});
		var $status1 = $('.pagingInfo1');
		var $slickElement1 = $('.11cidc-awards');

		$slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status1.text(i + '/' + slick.slideCount);
		});
		
		
		$('.dral-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev2"),
		  nextArrow: $(".next2"),
		});
		var $status2 = $('.pagingInfo2');
		var $slickElement2 = $('.dral-mh');

		$slickElement2.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status2.text(i + '/' + slick.slideCount);
		});
		
		
		$('.10cidc-awards').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev3"),
		  nextArrow: $(".next3"),
		});
		var $status3 = $('.pagingInfo3');
		var $slickElement3 = $('.10cidc-awards');

		$slickElement3.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status3.text(i + '/' + slick.slideCount);
		});
		
		$('.alstom-ap').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev4"),
		  nextArrow: $(".next4"),
		});
		var $status4 = $('.pagingInfo4');
		var $slickElement4 = $('.alstom-ap');

		$slickElement4.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status4.text(i + '/' + slick.slideCount);
		});
		
		$('.berger-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev5"),
		  nextArrow: $(".next5"),
		});
		var $status5 = $('.pagingInfo5');
		var $slickElement5 = $('.berger-mh');

		$slickElement5.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status5.text(i + '/' + slick.slideCount);
		});
		
		$('.carlsberg-ka').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev6"),
		  nextArrow: $(".next6"),
		});
		var $status6 = $('.pagingInfo6');
		var $slickElement6 = $('.carlsberg-ka');

		$slickElement6.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status6.text(i + '/' + slick.slideCount);
		});
		
		$('.ceat-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev7"),
		  nextArrow: $(".next7"),
		});
		var $status7 = $('.pagingInfo7');
		var $slickElement7 = $('.ceat-mh');

		$slickElement7.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status7.text(i + '/' + slick.slideCount);
		});
		
		$('.colgate-ap').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev8"),
		  nextArrow: $(".next8"),
		});
		var $status8 = $('.pagingInfo8');
		var $slickElement8 = $('.colgate-ap');

		$slickElement8.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status8.text(i + '/' + slick.slideCount);
		});
		
		$('.colgate-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev9"),
		  nextArrow: $(".next9"),
		});
		var $status9 = $('.pagingInfo9');
		var $slickElement9 = $('.colgate-gj');

		$slickElement9.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status9.text(i + '/' + slick.slideCount);
		});
		
		$('.datwyler-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev10"),
		  nextArrow: $(".next10"),
		});
		var $status10 = $('.pagingInfo10');
		var $slickElement10 = $('.datwyler-mh');

		$slickElement10.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status10.text(i + '/' + slick.slideCount);
		});
		
		$('.embassy-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev11"),
		  nextArrow: $(".next11"),
		});
		var $status11 = $('.pagingInfo11');
		var $slickElement11 = $('.embassy-mh');

		$slickElement11.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status11.text(i + '/' + slick.slideCount);
		});
		
		$('.godrej-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev12"),
		  nextArrow: $(".next12"),
		});
		var $status12 = $('.pagingInfo12');
		var $slickElement12 = $('.godrej-gj');

		$slickElement12.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status12.text(i + '/' + slick.slideCount);
		});
		
		$('.hirschvogel-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev13"),
		  nextArrow: $(".next13"),
		});
		var $status13 = $('.pagingInfo13');
		var $slickElement13 = $('.hirschvogel-mh');

		$slickElement13.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status13.text(i + '/' + slick.slideCount);
		});
		
		$('.iff-ap').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev14"),
		  nextArrow: $(".next14"),
		});
		var $status14 = $('.pagingInfo14');
		var $slickElement14 = $('.iff-ap');

		$slickElement14.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status14.text(i + '/' + slick.slideCount);
		});
		
		$('.jubilant-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev15"),
		  nextArrow: $(".next15"),
		});
		var $status15 = $('.pagingInfo15');
		var $slickElement15 = $('.jubilant-gj');

		$slickElement15.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status15.text(i + '/' + slick.slideCount);
		});
		
		$('.ksb-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev16"),
		  nextArrow: $(".next16"),
		});
		var $status16 = $('.pagingInfo16');
		var $slickElement16 = $('.ksb-mh');

		$slickElement16.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status16.text(i + '/' + slick.slideCount);
		});
		
		$('.kspg-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev17"),
		  nextArrow: $(".next17"),
		});
		var $status17 = $('.pagingInfo17');
		var $slickElement17 = $('.kspg-mh');

		$slickElement17.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status17.text(i + '/' + slick.slideCount);
		});
		
		$('.mane-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev18"),
		  nextArrow: $(".next18"),
		});
		var $status18 = $('.pagingInfo18');
		var $slickElement18 = $('.mane-gj');

		$slickElement18.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status18.text(i + '/' + slick.slideCount);
		});
		
		$('.novozymes-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev19"),
		  nextArrow: $(".next19"),
		});
		var $status19 = $('.pagingInfo19');
		var $slickElement19 = $('.novozymes-mh');

		$slickElement19.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status19.text(i + '/' + slick.slideCount);
		});
		
		$('.iso2018').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev20"),
		  nextArrow: $(".next20"),
		});
		var $status20 = $('.pagingInfo20');
		var $slickElement20 = $('.iso2018');

		$slickElement20.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status20.text(i + '/' + slick.slideCount);
		});
		
		$('.iso2015').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev21"),
		  nextArrow: $(".next21"),
		});
		var $status21 = $('.pagingInfo21');
		var $slickElement21 = $('.iso2015');

		$slickElement21.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status21.text(i + '/' + slick.slideCount);
		});
		
		$('.parle-ka').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev22"),
		  nextArrow: $(".next22"),
		});
		var $status22 = $('.pagingInfo22');
		var $slickElement22 = $('.parle-ka');

		$slickElement22.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status22.text(i + '/' + slick.slideCount);
		});
		
		$('.pepsico-ap').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev23"),
		  nextArrow: $(".next23"),
		});
		var $status23 = $('.pagingInfo23');
		var $slickElement23 = $('.pepsico-ap');

		$slickElement23.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status23.text(i + '/' + slick.slideCount);
		});
		
		$('.asian-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev24"),
		  nextArrow: $(".next24"),
		});
		var $status24 = $('.pagingInfo24');
		var $slickElement24 = $('.asian-gj');

		$slickElement24.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status24.text(i + '/' + slick.slideCount);
		});
		
		$('.sca-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev25"),
		  nextArrow: $(".next25"),
		});
		var $status25 = $('.pagingInfo25');
		var $slickElement25 = $('.sca-mh');

		$slickElement25.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status25.text(i + '/' + slick.slideCount);
		});
		
		$('.siemens-mh').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev26"),
		  nextArrow: $(".next26"),
		});
		var $status26 = $('.pagingInfo26');
		var $slickElement26 = $('.siemens-mh');

		$slickElement26.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status26.text(i + '/' + slick.slideCount);
		});
		
		$('.sswl-gj').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev27"),
		  nextArrow: $(".next27"),
		});
		var $status27 = $('.pagingInfo27');
		var $slickElement27 = $('.sswl-gj');

		$slickElement27.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status27.text(i + '/' + slick.slideCount);
		});
		
		$('.thermax-ap').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev28"),
		  nextArrow: $(".next28"),
		});
		var $status28 = $('.pagingInfo28');
		var $slickElement28 = $('.thermax-ap');

		$slickElement28.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status28.text(i + '/' + slick.slideCount);
		});
		
		$('.perstorp2021').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev29"),
		  nextArrow: $(".next29"),
		});
		var $status29 = $('.pagingInfo29');
		var $slickElement29 = $('.perstorp2021');

		$slickElement29.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status29.text(i + '/' + slick.slideCount);
		});
		
		$('.rotary-blood2021').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev30"),
		  nextArrow: $(".next30"),
		});
		var $status30 = $('.pagingInfo30');
		var $slickElement30 = $('.rotary-blood2021');

		$slickElement30.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status30.text(i + '/' + slick.slideCount);
		});
		
		$('.mane-india2020').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: $(".prev31"),
		  nextArrow: $(".next31"),
		});
		var $status31 = $('.pagingInfo31');
		var $slickElement31 = $('.mane-india2020');

		$slickElement31.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		  var i = (currentSlide ? currentSlide : 0) + 1;
		  $status31.text(i + '/' + slick.slideCount);
		});
		
		
		
		
		
		
		
		//Slider Script/////////////////////////////////////////////////////////////
		/*--active Script--*/
		$('.btn-projects').click(function() { 
			$('.btn-projects.active').removeClass("active"); 
			$(this).addClass("active"); 
		});
		
		$("#btn-11cidc-awards").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#11cidc-awards').addClass('opacity');
			$('#11cidc-awards').show();
		});
		$("#btn-dral-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#dral-mh').addClass('opacity');
			$('#dral-mh').show();
		});
		$("#btn-10cidc-awards").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#10cidc-awards').addClass('opacity');
			$('#10cidc-awards').show();
		});
		$("#btn-alstom-ap").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#alstom-ap').addClass('opacity');
			$('#alstom-ap').show();
		});
		$("#btn-berger-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#berger-mh').addClass('opacity');
			$('#berger-mh').show();
		});
		$("#btn-carlsberg-ka").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#carlsberg-ka').addClass('opacity');
			$('#carlsberg-ka').show();
		});
		$("#btn-ceat-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ceat-mh').addClass('opacity');
			$('#ceat-mh').show();
		});
		$("#btn-colgate-ap").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#colgate-ap').addClass('opacity');
			$('#colgate-ap').show();
		});
		$("#btn-colgate-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#colgate-gj').addClass('opacity');
			$('#colgate-gj').show();
		});
		$("#btn-datwyler-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#datwyler-mh').addClass('opacity');
			$('#datwyler-mh').show();
		});
		$("#btn-embassy-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#embassy-mh').addClass('opacity');
			$('#embassy-mh').show();
		});
		$("#btn-godrej-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#godrej-gj').addClass('opacity');
			$('#godrej-gj').show();
		});
		$("#btn-hirschvogel-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#hirschvogel-mh').addClass('opacity');
			$('#hirschvogel-mh').show();
		});
		$("#btn-iff-ap").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iff-ap').addClass('opacity');
			$('#iff-ap').show();
		});
		$("#btn-jubilant-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#jubilant-gj').addClass('opacity');
			$('#jubilant-gj').show();
		});
		$("#btn-ksb-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#ksb-mh').addClass('opacity');
			$('#ksb-mh').show();
		});
		$("#btn-kspg-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#kspg-mh').addClass('opacity');
			$('#kspg-mh').show();
		});
		$("#btn-mane-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mane-gj').addClass('opacity');
			$('#mane-gj').show();
		});
		$("#btn-novozymes-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#novozymes-mh').addClass('opacity');
			$('#novozymes-mh').show();
		});
		$("#btn-iso2018").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iso2018').addClass('opacity');
			$('#iso2018').show();
		});
		$("#btn-iso2015").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#iso2015').addClass('opacity');
			$('#iso2015').show();
		});
		$("#btn-parle-ka").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#parle-ka').addClass('opacity');
			$('#parle-ka').show();
		});
		$("#btn-pepsico-ap").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#pepsico-ap').addClass('opacity');
			$('#pepsico-ap').show();
		});
		$("#btn-asian-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#asian-gj').addClass('opacity');
			$('#asian-gj').show();
		});
		$("#btn-sca-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#sca-mh').addClass('opacity');
			$('#sca-mh').show();
		});
		$("#btn-siemens-mh").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#siemens-mh').addClass('opacity');
			$('#siemens-mh').show();
		});
		$("#btn-sswl-gj").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#sswl-gj').addClass('opacity');
			$('#sswl-gj').show();
		});
		$("#btn-thermax-ap").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#thermax-ap').addClass('opacity');
			$('#thermax-ap').show();
		});
		
		$("#btn-perstorp2021").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#perstorp2021').addClass('opacity');
			$('#perstorp2021').show();
		});
		$("#btn-rotary-blood2021").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#rotary-blood2021').addClass('opacity');
			$('#rotary-blood2021').show();
		});
		$("#btn-mane-india2020").click(function(e){
			$(".projects-desc-bg .slider-box").hide();
			$('#mane-india2020').addClass('opacity');
			$('#mane-india2020').show();
		});

	});