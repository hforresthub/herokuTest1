const xhttp = new XMLHttpRequest()

const urlTest = 'http://localhost:5000/xmlreader?apikey=abcde'
// const urlTest = 'http://api-test-bannerlord.herokuapp.com/xmlreader?apikey=abcdef'

console.log('test test')

const loadAPI = () => {
	xhttp.open('GET', urlTest, false)
	xhttp.send()

	const dataObj = JSON.parse(xhttp.responseText)

	console.log(dataObj.NPCCharacters.NPCCharacter[0])

	const containerEl = document.querySelector('.container')

	dataObj.NPCCharacters.NPCCharacter.forEach((element) => {
		// console.log(element)
		const newEl = document.createElement('div')
		newEl.classList.add('troop')
		newEl.innerHTML = `<h3>Troop name: ${element.ATTR.id}</h3>
			<p>Troop type: ${element.ATTR.default_group} </p>`
		if (element.Equipments[0].EquipmentRoster[0].equipment) {

			element.Equipments[0].EquipmentRoster[0].equipment.forEach((item) => {
				const newItemEl = document.createElement('div')
				newItemEl.innerHTML = `<div class='item'>Item name: ${item.ATTR.id}</div>`
				newEl.appendChild(newItemEl)
			})
			containerEl.appendChild(newEl)
		}
	})

}

loadAPI()
