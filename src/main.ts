import './style.css'

// tag, class, id
const button: HTMLButtonElement = document.querySelector('button')!
const result: HTMLParagraphElement = document.querySelector('#result')!
// console.log(button, result)
const message: string = 'Get coding!'

type EventHandler  = () => void;
const callback: EventHandler = () => {
	result.innerText = message
}
button.addEventListener('click', callback)