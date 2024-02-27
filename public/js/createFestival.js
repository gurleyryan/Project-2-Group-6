async function createBooking(event) {
  event.preventDefault();

  const number_ofticket = document.querySelector('#number-of-ticket').value;
  //const description = document.querySelector('#post-text').value;
  

  if (number_ofticket) {
      const response = await fetch('/api/booking/', {
          method: 'POST',
          body: JSON.stringify({
          number_ofticket,
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        window.alert("a new Booking created successfully")
          document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
     
          document.location.replace('/');
      }
  }
}

document.querySelector('.new-booking-form').addEventListener('submit', createBooking);