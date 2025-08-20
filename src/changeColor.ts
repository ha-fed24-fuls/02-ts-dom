/*
+ plocka ut elementet
+ lägg till event listener
+ använd classList för att byta CSS-klass
*/

const button: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#chameleon')!
let isChanged: boolean = false  // state

function changeColor() {
	button.addEventListener('click', () => {
		if( isChanged ) {
			button.classList.remove('alternate')
		} else {
			button.classList.add('alternate')
		}
		isChanged = !isChanged
	})
}

export { changeColor }
