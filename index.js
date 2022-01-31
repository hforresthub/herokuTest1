const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const say = require('say')
const xml2js = require('xml2js')
const fs = require('fs')
const parser = new xml2js.Parser({ attrkey: "ATTR"})
const cors = require('cors')

showTimes = () => {
	let result = ''
	const times = process.env.TIMES || 5
	for (i = 0; i < times; i++) {
		result += i + ' '
	}
	return result
}

const xmlReading = () => {
	let xmlString = fs.readFileSync('spnpccharacters.xml', 'utf8')

	let jsResult = "default"

	parser.parseString(xmlString, function(error, result) {
		if (error === null) {
			console.log(result)
			jsResult = result
		}
		else {
			console.log(error)
		}
	})
	return jsResult
}

express()
	.use(cors())
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('pages/index'))
	.get('/cool', (req, res) => {
		res.send(cool())
		// console.log(cool())
	})
	.get('/textspeech', (req, res) => {
		// res.send(say.speak('testing'))
		// console.log(cool())
	})
	.get('/xmlreader', (req, res) => {
		res.send(xmlReading())
	})
	.get('/times', (req, res) => res.send(showTimes()))
	.listen(PORT, () => console.log(`Listening on ${PORT}`))
