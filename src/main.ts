import './style.css'

// tag, class, id
const button: HTMLButtonElement = document.querySelector('button')!
const result: HTMLParagraphElement = document.querySelector('#result')!

let clickCount: number = 0

type EventHandler  = () => void;
const callback: EventHandler = () => {
	clickCount++
	result.innerText = `Du har klickat ${clickCount} gånger!`
}
button.addEventListener('click', callback)

