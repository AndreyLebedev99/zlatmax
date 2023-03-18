new Swiper('.new-swiper', {
	pagination: {
		el: ".new-swiper-pagination",
		clickable: true
	},

	slidesPerGroup: 1,

	slidesPerView: 3,

	autoplay: {
		delay: 5000,
	},
	speed: 800,

	spaceBetween: 30,
})