# HTML Processing hint
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>   
	<link rel="stylesheet" href="/css/style.css">
	<script src="/js/global.js"></script>

## How to use
	Processing.start(); // spinner starts
	$.get(url)
		.done(function (data) {
			// do some other stuff
			Processing.stop(); // spinner stops
		})
		.fail(function (failure) {
			// do some error handling
			Processing.stop();  // spinner stops
		});