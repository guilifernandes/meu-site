const init =() => {
   const inputEmail = document.querySelector ('input[type="email"]');
   const inputPassword = document.querySelector ('input[type="password"]');
   const submitButton = document.querySelector ( '.login__submit');
 
   if(submitButton) {
     submitButton.addEventListener('click', (event) => {
          event.preventDefault();
         
          fetch('https://reqres.in/api/login'),{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify ({
                emai: inputEmail.value,
                password: inputPassword.value,
          })
     }.then((Response) =>{
        return Response.json();
     }).then ((data) =>{
        console.log(data)
     })
   })
}

window.onload = init;