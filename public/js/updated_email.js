//-----------------------------------------------------------------------------------------
async function editEmailFormSubmitHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#edit-Email').value;


  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  if(email)
    {
      const response = await fetch(`/api/users/edit/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
        email
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    
      if (response.ok) {
        alert(email+" was updated")
        document.location.replace(`/api/users/${id}`);  
      } else {
        alert(response.statusText);
      }
    }

  //alert(email+" was updated")
  
}


document.querySelector('#edit-email-button').addEventListener('click', editEmailFormSubmitHandler);