const counterWrapper = document.querySelector('.counter-wrapper');

counterWrapper.addEventListener('click', function (e) {
	let counter = counterWrapper.querySelector('[data-counter]');
	
	if (e.target.dataset.action === 'minus') {
		if (+counter.innerText > 1) {
			counter.innerText = --counter.innerText
		}
	}
	if (e.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText
	}
})