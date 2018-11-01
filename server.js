const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json());
const operations = require('./operations')
const addTwoNumbers = operations.addTwoNumbers;


app.get('/', function(req, res){
	if (req.query.left && req.query.right) {

		const leftInt = parseInt(req.query.left)
		const rightInt = parseInt(req.query.right)
		if (!Number.isInteger(leftInt) || !Number.isInteger(rightInt)) {
			return res.json({sum: null, error: 'Pass left and right as integers'})
		}
		
		const sum = addTwoNumbers(leftInt, rightInt)
		res.json({
			sum: sum,
			error: null
		})
	} else {
		res.json({sum: null, error: 'Pass left and right as integers'})
	}
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('server started ' + port)
