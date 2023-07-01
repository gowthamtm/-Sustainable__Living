
let emailAddresses = [];


function subscribe(event) {
  event.preventDefault(); 

  
  const emailInput = document.getElementById('email-input');
  const email = emailInput.value;

 
  if (validateEmail(email)) {
   
    if (!emailAddresses.includes(email)) {
      
      emailAddresses.push(email);


      const message = document.getElementById('subscribe-message');
      message.textContent = 'Thank you for subscribing!';

      
      emailInput.value = '';
    } else {
      const message = document.getElementById('subscribe-message');
      message.textContent = 'Email address is already subscribed.';
    }
  } else {
    
    const message = document.getElementById('subscribe-message');
    message.textContent = 'Please enter a valid email address.';
  }
}

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}


