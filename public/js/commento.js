const newFormHandler = async (event) => {

  event.preventDefault();

  const title = document.querySelector('#title').value.trim();
  const description = document.querySelector('#description').value.trim();
 
  if (title && description) {
    console.log(title && description);
    
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({title, description}),  
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {  
      document.location.replace('/');
    } else {
      alert('Failed to create comment');
    }
  }

};
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.comments-form')
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  


// const country = document.querySelector("#country").value;
// const city = document.querySelector("#city").value.trim();
// const place = document.querySelector("#place").value.trim();
// const description = document.querySelector('#description').value.trim();
// const user_id = document.querySelector('#user').dataset.id;

// if (country && city && place && description) {
//     console.log(country && city && place && description)
//     const response = await fetch('recommendation', {
//         method: "POST",
//         body: JSON.stringify({ country, city, place, description, user_id }),
//         headers: { "Content-Type": "application/json" },
//     });
    
//     if (response.ok) {
//         document.location.replace(`/api/recommendation/recomJson/${country}`);
//     } else {
//         alert("Error creating recommendations");
//     }
// }
// };

// document.querySelector(".recommendation-form").addEventListener("submit", postRecommendation);