// 3a Gör en button som gör ett annat element osynligt, med hjälp av CSS-klasser. Gör en annan button som gör samma element synligt igen.
//
// 3b Gör en tredje button som "togglar" elementet. Alltså varannan gång gör elementet synligt och varannan gång gör det osynligt. Men använd en if-sats i stället för classList.toggle.
const hideButton: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#hideButton')!
const showButton: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#showButton')!
const toggleButton: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#toggleButton')!
const shy: HTMLParagraphElement = document.querySelector<HTMLParagraphElement>('.shyElement')!

function visibility(): void {
	hideButton.addEventListener('click', () => {
		shy.classList.add('hide')
	})
	showButton.addEventListener('click', () => {
		shy.classList.remove('hide')
	})
	toggleButton.addEventListener('click', () => {
		if( shy.classList.contains('hide') ) {
			shy.classList.remove('hide')
		} else {
			shy.classList.add('hide')
		}
	})
}

export { visibility }
