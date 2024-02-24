const editBtn= document.querySelectorAll("#edit_Btn")

for (let i=0; i< editBtn.length; i++)
{
    editBtn[i].addEventListener("click",async function(event){
    
      
        let id=parseInt(event.target.dataset.id)

        console.log(id)
        document.location.replace('/comments')
        // const response = await fetch(`/api/comments`, {
        //     method: 'POST',
        //     body: JSON.stringify({title, description}),  
        //     headers: {
        //       'Content-Type': 'application/json'
        //     }
        //   });
      
        //   if (response.ok) {  
        //     document.location.replace('/');
        //   } else {
        //     alert('Failed to create comment');
        //   }


    });
}



















