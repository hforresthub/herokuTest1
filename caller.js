const http = require('http')

const port = 5000

http.get('http://api-test-bannerlord.herokuapp.com/xmlreader', res => {
	console.log(res.statusCode)

	let str = ''

	res.on('data', (chunk) => {
		str += chunk
	})

	res.on('end', () => {
		console.log(JSON.parse(str))

		document.getElementsByClassName('container').innerHTML = str
	})
})

// const options = {
// 	host: 'api-test-bannerlord.herokuapp.com',
// 	port: port,
// 	path: '/xmlreader'
// 	// method: 'GET'
// }

// const req = http.request(options, res => {
// 	console.log(`status code: ${res.statusCode}, message: ${res.statusMessage}`)

// 	res.on('data', d => {
// 		process.stdout.write(d)
// 	})
// })

// req.on('error', error => {
// 	console.error(error)
// })

// req.end()

// const options2 = {
// 	hostname: 'localhost',
// 	port: port,
// 	path: '/'
// }

// const getReq = http.get(options, res => {
// 	console.log(`get status code: ${res.statusCode}`)

// 	res.on('data', d => {
// 		process.stdout.write(d)
// 	})
// })

// getReq.on('error', error => {
// 	console.error(error)
// })
