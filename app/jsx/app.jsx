$(document).ready(function() {

	// $('.chosen').chosen();
	//
	// $('.date-picker').datetimepicker({
	// 	format: 'DD/MM/YYYY'
	// });
	//
	// $('.row.match-height > div').matchHeight({
	// 	byRow: true,
	// 	property: 'height',
	// 	target: null,
	// 	remove: false
	// });
	//
	// $('.owl-carousel').owlCarousel({
	// 	loop: true,
	// 	margin: 10,
	// 	nav: false,
	// 	autoplay: true,
	// 	autoplayTimeout: 5000,
	// 	responsive:{
	// 		0:{
	// 			items:2
	// 		},
	// 		600:{
	// 			items:4
	// 		},
	// 		1000:{
	// 			items:5
	// 		}
	// 	}
	// });

	$('.header-menu .btn').on('click', function(e) {
		$(this).parent().find('.menu').toggleClass('open');
	});

});

//testing es6 and jsx example
let sampleText = 'Testing ES6 & JSX support';
let arrowFunc = (e) => {
  return e;
};

ReactDOM.render(
  <div>
    <p><i className="fa fa-check"></i>{arrowFunc(sampleText)}</p>
  </div>,
  document.getElementById('example')
);
