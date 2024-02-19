const buyButton=document.getElementById('buyButton');
buyButton.addEventListener('click',function(event){
    console.log('I am pressed');
    hideElementById('seatSection');
    addElementById('confirmTicketSection');
});

const buyAgain=document.getElementById('buyAgainBtn');

buyAgain.addEventListener('click',function(event){
    addElementById('seatSection');
    hideElementById('confirmTicketSection');
});


// button section started from here 
// function handleButtonClick(event){
//     const buttonId=event.target.id;
//     console.log(buttonId);

//     // Calling the color function
//     setBackgroundColorInKey(buttonId);


   
// }


// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(button => {
//   button.addEventListener('click', handleButtonClick);
// });

function handleButtonClick(event) {
    const buttonId = event.target.id;
  
    // Call the function to set background color
    setBackgroundColorInKey(buttonId);
  
    // You can add other logic or actions here if needed
  }
  
  function setBackgroundColorInKey(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-300');
  }
  
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
  