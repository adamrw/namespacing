//these will be attatched to the global namespaece

var name = 'Dick';
var getUsers=function(){
	return ['Chris', 'Joe', 'Max'];

};

// use a namespace pattern to protect global leaking

var App={
	name: 'Chris',
	getUsers: function(){
		return ['Chris', 'Joe', 'Max'];
	}
};
console.log(App.name);
console.log(App.getUsers());

// possible real world example
$(document).on('ready', function(){
	App.init();
	App.setupEvents();
	App.render($('.container'));
});

// revealing module pattern: 
//These variables are considered private because there is no way to access tghem outside of the AppBuilder function...
var AppBuilder=function(){
	var name='Chris';
	var getUsers=function() {
		return ['James', 'Colin'];
	};
	// reveal some values to whever calls this function by exposing specific parta
	return {
		users: getUsers,
		name: name
	};
};
var App=AppBuilder();

// iife: immediately invoked function expression
// create and execute a function on the spot
(function(){
	console.log('I am invoked');
})();

// iife with parameters
(function(msg) {
	console.log(msg);
})('Hello World');


// ForLoop issue with race conditions
for (var i = 0; i<5; i++) {
	setTimeout(function(){
		console.log(i);
	}, 1000 * i);
};
console.log(i);




