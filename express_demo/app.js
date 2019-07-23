const express = require('express')
const app = express()

//设置跨域访问
app.all('*', function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
   res.header("X-Powered-By",' 3.2.1');
   res.header("Content-Type", "application/json;charset=utf-8");
   next();
});


var questions = [
	{
		name:'张三',
		age:12
	},
	{
		name:'柠檬',
		age:13
	}
]

app.get('/123',function(req,res){
	res.status(200);
	res.json(questions);
})

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('app listening on port 3000!'))