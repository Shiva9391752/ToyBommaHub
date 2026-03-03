document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const movieName = params.get("movie");

    const movieTitle = document.getElementById("movieTitle");
    const seatContainer = document.getElementById("seatContainer");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const bookingMessage = document.getElementById("bookingMessage");

    if (movieName) {
        movieTitle.textContent = "Booking for: " + movieName;
    }

    const seatPrice = 150;
    let selectedSeats = [];

    for (let i = 1; i <= 30; i++) {

        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.textContent = i;

        seat.addEventListener("click", function () {

            seat.classList.toggle("selected");

            if (selectedSeats.includes(i)) {
                selectedSeats = selectedSeats.filter(s => s !== i);
            } else {
                selectedSeats.push(i);
            }

            count.textContent = selectedSeats.length;
            total.textContent = selectedSeats.length * seatPrice;
        });

        seatContainer.appendChild(seat);
    }

    window.saveBooking = function () {

        if (selectedSeats.length === 0) {
            alert("Please select at least one seat");
            return;
        }

        bookingMessage.textContent =
            "Booking Confirmed! Seats: " + selectedSeats.join(", ");

    };

});
