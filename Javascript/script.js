

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('chat-hidden');
}

function handleSend() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    
    if (input.value.trim() !== "") {
        
        const userDiv = document.createElement('p');
        userDiv.className = "user-msg";
        userDiv.textContent = input.value;
        content.appendChild(userDiv);

        const userText = input.value.toLowerCase();
        input.value = "";

        
        setTimeout(() => {
            const botDiv = document.createElement('p');
            botDiv.className = "bot-msg";
            
           if(userText.includes("hello") || userText.includes("hi") || userText.includes("howzit")) {
                botDiv.textContent = "Howzit! I'm ready to help you plan your next SA mission. Where are we headed?";
            } else if(userText.includes("beach") || userText.includes("ocean") || userText.includes("coast")) {
                botDiv.textContent = "SA has world-class beaches! Check out Camps Bay in CT, or the warm waters of Umhlanga in KZN.";
            } else if(userText.includes("hiking") || userText.includes("mountains") || userText.includes("trail")) {
                botDiv.textContent = "For hiking, the Drakensberg is unmatched, but Lion's Head is perfect for a quick sunset mission!";
            } else if(userText.includes("food") || userText.includes("eat") || userText.includes("braai")) {
                botDiv.textContent = "You haven't lived until you've had a shisanyama or a fresh bunny chow in Durban!";
            } else if(userText.includes("price") || userText.includes("cost") || userText.includes("cheap")) {
                botDiv.textContent = "Travel doesn't have to be pricey! Look for our 'Budget-Friendly' tags for the best local deals.";
            } else if(userText.includes("safari") || userText.includes("animals") || userText.includes("kruger")) {
                botDiv.textContent = "The Big Five are waiting! The Kruger National Park is the go-to, but Pilanesberg is great for a day trip.";
            } else if(userText.includes("weather") || userText.includes("best time")) {
                botDiv.textContent = "September to March is great for beaches, but winter (June-August) is actually the best time for wildlife viewing!";
            } else {
                botDiv.textContent = "Eish, I don't know that one yet. Try asking about 'beaches', 'hiking', or 'safari'!";
            }

            content.appendChild(botDiv);
            content.scrollTop = content.scrollHeight; 
        }, 600);
    }
}