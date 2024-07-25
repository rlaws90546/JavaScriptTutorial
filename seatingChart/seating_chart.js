let theaterSeats = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O']
];

function updateSeatStatus(row, col, status) {
    const seats = document.getElementsByClassName('seat');
    const index = row * 3 + col;
    seats[index].classList.remove('available', 'booked');
    seats[index].classList.add(status);
}

function bookSeat(row, col) {
    if (theaterSeats[row][col] === 'O') {
        theaterSeats[row][col] = 'X';
        updateSeatStatus(row, col, 'booked');
        alert(`Your seat has been booked! You chose Seat ${String.fromCharCode(65 + row)}${col + 1}, thank you.`);
    } else {
        alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken, please choose another seat.`);
    }
}