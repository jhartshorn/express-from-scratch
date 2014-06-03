var fns = require('../app.js');

/* GET home page. */
exports.index = function(req, res){
  res.render('index', { title: 'Node.js + Express' });
};


/* GET helloworld page. */
exports.helloworld = function(req, res){
	  res.render('helloworld');
};

/* GET helloworld page. */
exports.jade = function(req, res){
	  res.render('jade', { title: 'Express' });
};

exports.time = function(req, res){
	var date = new Date();
//	res.writeHead(200, {"Content-Type": "text/plain"});
//	res.end(date.getHours()	+ ':' + date.getMinutes() );
	res.render('time', { time: date.getHours() + ':' + date.getMinutes()});

};

