document.querySelector('.filter-accordion').addEventListener('click', (e) => {
	const filterTitle = e.target.closest('.filter-accordion-title')
	
	if (filterTitle) {
		const accordion = filterTitle.nextElementSibling

		const active = filterTitle.closest('.filter-accordion-title--active')
		if (active) {
			filterTitle.classList.remove('filter-accordion-title--active')
			accordion.classList.remove('acor-body--active')
		} else {
			filterTitle.classList.add('filter-accordion-title--active')
			accordion.classList.add('acor-body--active')

		}
	}
})