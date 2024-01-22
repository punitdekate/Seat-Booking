//Create you project here from scratch
const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
];
// Use moviesList array for displaing the Name in the dropdown menu
const selectMovie = document.getElementById('selectMovie');
moviesList.forEach(element => {
    const option = document.createElement('option');
    option.value = element.movieName;
    option.innerHTML = element.movieName;
    selectMovie.appendChild(option);
    selectMovie.selectedIndex = 0;
    selectMovie.addEventListener('change', (event) => {
        moviesList.forEach(element => {
            if (element.movieName === event.target.value) {
                const movieName = document.getElementById('movieName');
                const moviePrice = document.getElementById('moviePrice');
                movieName.textContent = element.movieName;
                moviePrice.textContent = element.price;
            }
        });

    })
});
const seats = document.querySelectorAll("#seatCont .seat");
seats.forEach(seat => {
    // console.log(seat.classList.contains('seat occupied'));
    seat.addEventListener('click', (event) => {
        if (!hasClass(seat, 'seat occupied')) {
            priceCalculation();

        }
    });
});

function priceCalculation() {
    const totalPrice = document.getElementById('totalPrice');
    console.log(totalPrice.innerText);
}

function hasClass(element, clsName) {
    return (' ' + element.className + ' ').indexOf(' ' + clsName + ' ') > -1;
}


//Add eventLister to each unoccupied seat
//Add eventLsiter to continue Button
//Add eventListerner to Cancel Button