async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const email = document.querySelector('#username-email').value.trim();
  const preference = document.querySelector('#username-preference').value.trim();

  if (username && password && email && preference) {
      const response = await fetch('/api/users/signup', {
          method: 'post',
          body: JSON.stringify({
              username,
              password,
              email,
              preference

          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        window.alert("User created successfully")
          document.location.replace('/');
      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);