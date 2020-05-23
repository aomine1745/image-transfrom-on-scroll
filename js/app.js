const bg = document.querySelector('#bg')
window.addEventListener('scroll', () => {
	const value = window.scrollY
	bg.style.backgroundSize = 100 + value * 2 + 'px'
})