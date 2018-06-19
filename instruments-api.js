require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const bodyParser = require('body-parser')
const { getInstrument, addInstrument } = require('./dal')
const NodeHTTPError = require('node-http-error')
const { propOr, isEmpty } = require('ramda')
const checkRequiredFields = require('./lib/check-required-fields')
const createMissingFieldMsg = require('./lib/create-missing-field-msg')
const cleanObj = require('./lib/clean-obj.js')

app.use(bodyParser.json())

app.get('/', function(req, res, next) {
	res.send('Welcome to the Instruments api.')
})

app.get('/instruments/:instrumentID', function(req, res, next) {
	const instrumentID = req.params.instrumentID
	getInstrument(instrumentID, function(err, data) {
		if (err) {
			next(new NodeHTTPError(err.status, err.message, err))
			return
		}
		res.status(200).send(data)
	})
})

app.post('/instruments', function(req, res, next) {
	const newInstrument = propOr({}, 'body', req)

	//	console.log('instrument', newInstrument)

	if (isEmpty(newInstrument)) {
		next(new NodeHTTPError(400, 'missing instrument in body.'))
	}

	const requiredFields = [
		'name',
		'category',
		'group',
		'retailPrice',
		'manufacturer'
	]

	const missingFields = checkRequiredFields(requiredFields, newInstrument)

	if (!isEmpty(missingFields)) {
		next(new NodeHTTPError(400, `${createMissingFieldMsg(missingFields)}`))
	}

	const cleanedInstrument = cleanObj(requiredFields, newInstrument)

	addInstrument(cleanedInstrument, function(err, data) {
		if (err) {
			next(
				new NodeHTTPError(err.status, err.message, { max: 'is the coolest' })
			)
		}
		res.status(201).send(data)
	})
})

app.use(function(err, req, res, next) {
	console.log(
		'ERROR! ',
		'METHOD: ',
		req.method,
		' PATH',
		req.path,
		' error:',
		JSON.stringify(err)
	)
	res.status(err.status || 500)
	res.send(err)
})

app.listen(port, () => console.log('API is up', port))
