// const totalSeats=28;

// const reservedSeats=[];


// function reserSeat(SeatNumber){
//     if(reservedSeats.includes(SeatNumber)){
//         alert("This seat is already reserved. Please choose another seat.");
//     }else{
//         reservedSeats.push(SeatNumber);
//         alert("Seat"+SeatNumber+"reserved successful");
//     }
// }

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
})