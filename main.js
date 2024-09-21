import './style.css';

import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_KEY, 
    dangerouslyAllowBrowser: true 
});	


let assistant1, assistant2;
let thread1, thread2;


await initializeAssistant1();
await initializeAssistant2();


async function initializeAssistant1(){
    
	assistant1 = await retrieveAssistantById(import.meta.env.VITE_ASSISTANT_ID_1);
	thread1 = await openai.beta.threads.create(); 
}


async function initializeAssistant2(){
    
	assistant2 = await retrieveAssistantById(import.meta.env.VITE_ASSISTANT_ID_2);
	thread2 = await openai.beta.threads.create();
}
  
console.log("Assistants initialisés"); 


startConversationWithCharacter1("Demande moi qui je suis.");


async function retrieveAssistantById(assistantId) {
	const assistant = await openai.beta.assistants.retrieve(assistantId); 
	return assistant; 
}  


async function startConversationWithCharacter1(message){
	
	let userMessage = await openai.beta.threads.messages.create(thread1.id, {
		role: "user", 
		content: message 
	});

	let speechBubble; 
	let responseToCharacter2 = ""; 

	
	let runStream = openai.beta.threads.runs.stream(thread1.id, {
		assistant_id: assistant1.id 
	})
	.on('textCreated', () => {
		
		speechBubble = createSpeechBubble(1); 
	})
	.on('textDelta', (textDelta) => {
		
		let formattedText = formatTextWithLineBreaks(textDelta.value); 
		speechBubble.querySelector(".speech-bubble").innerHTML += formattedText; 
		responseToCharacter2 += formattedText; 
	})
	.on('end', () => {
		
		setTimeout(() => {
			startConversationWithCharacter2(responseToCharacter2); 
		}, 3000); 
	});
}


async function startConversationWithCharacter2(message){
	
	let userMessage = await openai.beta.threads.messages.create(thread2.id, {
		role: "user", 
		content: message 
	});

	let speechBubble; 
	let responseToCharacter1 = ""; 

	
	let runStream = openai.beta.threads.runs.stream(thread2.id, {
		assistant_id: assistant2.id 
	})
	.on('textCreated', () => {
		
		speechBubble = createSpeechBubble(2); 
	})
	.on('textDelta', (textDelta) => {
		
		let formattedText = formatTextWithLineBreaks(textDelta.value); 
		speechBubble.querySelector(".speech-bubble").innerHTML += formattedText; 
		responseToCharacter1 += formattedText; 
	})
	.on('end', () => {
		
		setTimeout(() => {
			startConversationWithCharacter1(responseToCharacter1); 
		}, 3000); 
	});
}


function createSpeechBubble(characterNumber){
	let textContainer = document.querySelector(".character-" + characterNumber + " .text-container"); 
	let newTextMessage = document.createElement("div"); 
	newTextMessage.classList.add("message"); 
	newTextMessage.innerHTML = `
		<div class="speech-bubble"> </div> <!-- Contient le texte -->
		<div class="arrow"></div> <!-- Ajoute une flèche pour indiquer le dialogue -->`; 

	textContainer.appendChild(newTextMessage); 
	textContainer.scrollTop = textContainer.scrollHeight; 
	return newTextMessage; 
}

function formatTextWithLineBreaks(text) {
	return text.replace(/\n/g, "<br>"); 
}