const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const name = document.querySelector('#username').value.trim();
console.log(name)
  console.log(email)
  console.log(password)
  if (email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({name,email,password}),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
document
  .querySelector('.signup-form').addEventListener('submit', signupFormHandler);


