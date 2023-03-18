const blockInformation = document.querySelector('.block-information-list');

blockInformation.addEventListener('click', function (e) {
	const listItem = e.target.closest('.block-information-item')
	const blocks = document.querySelectorAll('.block-information-body')

	if (listItem) {
		const active = blockInformation.querySelector('.block-information-item--active')
		if (active) {
			active.classList.remove('block-information-item--active')
			listItem.classList.add('block-information-item--active')
		}
	}

	blocks.forEach(block => {
		showBlock(listItem, block, e.target.dataset.information)
	})
})

function showBlock(item,block, dataBlock) {
	block.classList.add('none')
	if(item.dataset.information === dataBlock && block.dataset.block === dataBlock) {
		block.classList.remove('none')
	}
}
