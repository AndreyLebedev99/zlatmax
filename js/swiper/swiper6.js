new Swiper('.recommendation-swiper', {
	pagination: {
		el: ".knives-pagination",
		clickable: true
	},

	slidesPerGroup: 1,

	slidesPerView: 4,

	autoplay: {
		delay: 5000,
	},
	speed: 800,

	spaceBetween: 30,
})