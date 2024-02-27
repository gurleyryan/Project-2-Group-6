$(document).ready(function(){

    var quantitiy=0;
       $('.quantity-right-plus').click(function(e){
            
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
                
                $('#quantity').val(quantity + 1);
    
              
                // Increment
            
        });
    
         $('.quantity-left-minus').click(function(e){
            // Stop acting like a button
            e.preventDefault();
            // Get the field name
            var quantity = parseInt($('#quantity').val());
            
            // If is not undefined
          
                // Increment
                if(quantity>0){
                $('#quantity').val(quantity - 1);
                }
        });
        
    });

    async function createBookingOrder(event) {
        event.preventDefault();

        var number_ofticket = parseInt($('#quantity').val());
        const festival_id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
            ];

        if (number_ofticket) {
            const response = await fetch('/api/booking/', {
                method: 'POST',
                body: JSON.stringify({
                number_ofticket,
                festival_id
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


        // var quantity = parseInt($('#quantity').val());
        // const id = window.location.toString().split('/')[
        //   window.location.toString().split('/').length - 1
        //   ];
        //   alert(quantity)
        // document.location.replace(`/`);
    
        // }
      
      
      document
      .getElementById("booking-confirm-form")
      .addEventListener("submit",  createBookingOrder)