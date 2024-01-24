//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
const selectMovie = document.getElementById('selectMovie');
const seats = document.querySelectorAll("#seatCont .seat");
const selectedSeats = document.getElementsByClassName('selected');
const totalPrice = document.getElementById('totalPrice');
const selectedSeatsHolder = document.getElementById('selectedSeatsHolder');

//for the seats which is updated and later to reset.
const insideSelectedSetsHolder = selectedSeatsHolder.innerHTML;

const numberOfSeats = document.getElementById('numberOfSeat');

//code to add custom attribute in the div
let index = 1;
seats.forEach(element => {
    element.setAttribute('id', index++);
});


let addedSeats = [];

moviesList.forEach(element => {
    const option = document.createElement('option');
    option.value = element.movieName;
    option.innerHTML = element.movieName;
    selectMovie.appendChild(option);
    selectMovie.selectedIndex = 0;
    selectMovie.addEventListener('change', (event) => {
        const movieName = document.getElementById('movieName');
        const moviePrice = document.getElementById('moviePrice');
        moviesList.forEach(element => {
            if (element.movieName === event.target.value) {
                movieName.textContent = element.movieName;
                moviePrice.textContent = `$ ${element.price}`;
            }
        });
    });
});
seats.forEach(seat => {
    seat.addEventListener('click', (event) => {
        // console.log(event.target.value);
        if (!hasClass(seat, 'occupied')) {
            if (hasClass(seat, 'selected')) {
                seat.classList.remove('selected');
                addedSeats.splice(addedSeats.indexOf(seat.id), 1);
            } else {
                seat.classList.add('selected');
                addedSeats.push(seat.id);
            }
            const price = Number(document.getElementById('moviePrice').innerText.replace('$', '').trim());

            numberOfSeats.textContent = addedSeats.length;
            totalPrice.innerText = `$ ${addedSeats.length * price}`;

            insertSeatsInSelectedSeats();
        }
    });
});

function insertSeatsInSelectedSeats() {
    selectedSeatsHolder.innerHTML = '';
    addedSeats.forEach(element => {
        const newSelectedSeat = document.createElement('div');
        newSelectedSeat.classList.add('seat');
        // newSelectedSeat.classList.add('container');
        // newSelectedSeat.classList.add('leftMainContt');

        newSelectedSeat.innerText = element;

        selectedSeatsHolder.appendChild(newSelectedSeat);
    });

}
const continueBtn = document.getElementById('proceedBtn');
continueBtn.addEventListener('click', () => {
    if (addedSeats.length == 0) {
        alert('Oops no seat Selected');
    } else {
        alert('Yayy! Your Seats have been booked');
        cancelSeats();
    }
});

const cancelBtn = document.getElementById('cancelBtn');
cancelBtn.addEventListener('click', () => {
    cancelSeats();
})


function cancelSeats() {
    totalPrice.innerText = '$ 0';
    selectedSeatsHolder.innerHTML = insideSelectedSetsHolder;
    numberOfSeats.innerText = 0;
    addedSeats.forEach(element => {
        const seatToOccupied = document.getElementById(element);
        seatToOccupied.classList.remove('selected');
        seatToOccupied.classList.add('occupied');
    });
    addedSeats = [];
}


function hasClass(element, clsName) {
    return (' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}


//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button
function stopWatch() {
    const date = new Date();
    let stopWatch = setInterval(() => {
        let time = date.getTime() - 0;

        console.log(time);
    }, 1000)
}
stopWatch();