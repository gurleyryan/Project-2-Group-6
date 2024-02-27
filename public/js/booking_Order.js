async function createBookingOrder(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
      ];
  
    document.location.replace(`/api/festival/booking/${id}`);

    }
  
  
  document
  .getElementById("comment-form")
  .addEventListener("submit",  createBookingOrder)

//-----------------------------------------------------------------------------------------
