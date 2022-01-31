const xhttp = new XMLHttpRequest()

console.log('test test')

const loadAPI = () => {
	xhttp.open('GET', 'http://api-test-bannerlord.herokuapp.com/xmlreader', false)
	xhttp.send()
	
	const str = JSON.parse(xhttp.responseText)
	
	
	document.getElementsByClassName('container').innerHTML = "test"

}

loadAPI()
