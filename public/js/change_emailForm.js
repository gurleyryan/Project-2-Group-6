//-----------------------------------------------------------------------------------------
async function editEmailForm(event) {
    event.preventDefault();
     // get the post id from the url
     const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
      ];
  
          // delete the post with an async function
          const response = await fetch(`/api/users/edit/${id}`, {
            method: 'GET'
          });
        // if the delete action is successful, redirect to the dashboard page, otherwise display the error
        if (response.ok) {
       
            document.location.replace(`/api/users/edit/${id}`);
            // otherwise, display the error
          } else {
            alert(response.statusText);
          }
      }



  document.querySelector('#edit_emailBtn').addEventListener('click', editEmailForm);
  