import './style.css';
function addMessage(characterNumber){
	let textContainer = document.querySelector(".character-" + characterNumber + " .text-container")
	let newTextMessage = document.createElement("div");
	newTextMessage.classList.add("message");
	newTextMessage.innerHTML = `<div class="speech-bubble">Je suis un bot</div>
					<div class="arrow"></div>`

	textContainer.appendChild(newTextMessage)

	textContainer.scrollTop = textContainer.scrollHeight;
}

document.querySelector(".add-message-1").addEventListener("click", ()=> addMessage(1))
document.querySelector(".add-message-2").addEventListener("click", ()=> addMessage(2))