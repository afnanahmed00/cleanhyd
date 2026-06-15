const form =
    document.getElementById(
        'bookingForm'
    );

form.addEventListener(
    'submit',
    function (e) {

        e.preventDefault();

        alert(
            'Booking Submitted Successfully!'
        );

        form.reset();

    });