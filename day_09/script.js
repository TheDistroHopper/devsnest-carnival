let counter = 0;
let seats = document.querySelectorAll(".seat");
// console.log(seat)


for(let seat of seats) {
    seat.addEventListener('click', function() {
        let booked = document.getElementById('booked-number');
        let available = document.getElementById('available-number');
        if(this.classList.contains('seatBooked')) {
            booked.innerHTML = --counter;
        }else {
            booked.innerHTML = ++counter;
        }
        available.innerHTML = 36 - counter;
        this.classList.toggle('seatBooked');
        
        
    })
}