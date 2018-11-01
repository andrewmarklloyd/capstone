const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
const operations = require('./operations')
const addTwoNumbers = operations.addTwoNumbers;

app.get('/', function(req, res){
	if (req.query.left && req.query.right && req.query.op) {

		const operation = req.query.op;
		if (!operation) {
			return res.json({sum: null, error: 'Pass add or sub as op argument'})
		}

		const leftInt = parseInt(req.query.left)
		const rightInt = parseInt(req.query.right)
		if (!Number.isInteger(leftInt) || !Number.isInteger(rightInt)) {
			return res.json({sum: null, error: 'Pass left and right integers as argument'})
		}

		var result = null;
		var error = null;
		if (operation == 'add') {
			result = addTwoNumbers(leftInt, rightInt)
		} else if (operation == 'sub') {
			result = subTwoNumbers(leftInt, rightInt)
		} else {
			error = "Pass add or sub as op argument";
		}
		res.json({
			result: result,
			error: error
		})
	} else {
		res.json({sum: null, error: 'Pass in arguments!'})
	}
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)
