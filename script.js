












 //////////

  // To‘y sanasi: 2025-yil, 30-avgust, soat 18:00

const targetDate = new Date("2025-08-30T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  animateChange('days', days);
  animateChange('hours', hours);
  animateChange('minutes', minutes);
  animateChange('seconds', seconds);
}

function animateChange(id, newValue) {
  const el = document.getElementById(id);
  const currentValue = el.textContent;

  const formatted = newValue.toString().padStart(2, '0');

  if (currentValue !== formatted) {
    const parent = el.parentElement;
    parent.classList.add('animate');
    
    setTimeout(() => {
      el.textContent = formatted;
      parent.classList.remove('animate');
    }, 300);
  }
}

updateTimer();
setInterval(updateTimer, 1000);




// scroll






window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");
  music.volume = 0.3; // ovozni pasaytirish
  music.play().catch((err) => {
    console.log("Brauzer autoplayni blokladi:", err);
  });
});







window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("musicModal");
  const playBtn = document.getElementById("playMusicBtn");
  const bgMusic = document.getElementById("bgMusic");

  // Show modal when page loads
  modal.style.display = "flex";

  playBtn.addEventListener("click", () => {
    bgMusic.volume = 0.3;
    bgMusic.play();
    modal.style.display = "none";
  });
});




 const paragraphs = document.querySelectorAll(".text p,b");
 let delay = 0;

 paragraphs.forEach((p, index) => {
   const text = p.textContent;
   p.textContent = "";
   setTimeout(() => {
     p.style.opacity = 1;
     let i = 0;
     const interval = setInterval(() => {
       p.textContent += text.charAt(i);
       i++;
       if (i >= text.length) clearInterval(interval);
     }, 50); // harf chiqish tezligi
   }, delay);
   delay += text.length * 50 + 100; // navbat bilan yozilishi uchun
 });














//  Bot




 document.getElementById("btn1").addEventListener("click", sendMessage);

 function sendMessage(e) {
   e.preventDefault();

   const name = document.getElementById("inp").value.trim();
   const wishes = document.getElementById("inp2").value.trim();

   if (!name || !wishes) {
     alert("Please fill in all the information.");
     return;
   }

   const telegramToken = "7690250601:AAEw5Rp2FDzKbGc_QAHFQ0T87ep9B0lAOWM";
   const chatId = "830173198";
   const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

   const formData = new URLSearchParams({
     chat_id: chatId,
     text: `👤 Name: ${name}\n💌 Wishes: ${wishes}`,
   });

   fetch(url, {
     method: "POST",
     headers: {
       "Content-Type": "application/x-www-form-urlencoded",
     },
     body: formData,
   })
     .then((response) => response.json())
     .then((data) => {
       console.log("Message sent:", data);
       alert("✅ Your message was sent successfully!");

       // Clear the input fields
       document.getElementById("inp").value = "";
       document.getElementById("inp2").value = "";
     })
     .catch((error) => {
       console.error("Error:", error);
       alert("❌ Failed to send the message.");
     });
 }





 