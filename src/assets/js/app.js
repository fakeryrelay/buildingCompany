(function() {
	let slider = document.querySelector('.range')
	let sliderActiveDOMElement = document.querySelector('.range__active')
	let output = document.querySelector('.calc-num')
	output.innerHTML = '5 000 000' // Display the default slider value

	// Update the current slider value (each time you drag the slider handle)
	slider.oninput = function() {
	let sliderValue = this.value
	let percentage = (sliderValue * (100 / (this.max - this.min))).toFixed(2)

	console.log(percentage)
	if (percentage < 50) {
		let bigger = parseFloat(percentage) + 1
		sliderActiveDOMElement.style.width = bigger + '%'
		console.log(bigger + '%')
	} else {
		sliderActiveDOMElement.style.width = percentage + '%'
	}
	// sliderActiveDOMElement.style.width = percentage + '%'
	output.innerHTML = (5000000 + (100000 * sliderValue)).toLocaleString('ru-RU')
}
}())
