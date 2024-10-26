$(document).ready(function() {
    $('#attendanceForm').on('submit', function(event) {
        event.preventDefault();

        let attended = parseInt($('#attended').val());
        let total = parseInt($('#total').val());
        let result = $('#result');

        if (attended > total || attended < 0 || total <= 0) {
            result.html("Please enter valid numbers.").removeClass('green').addClass('red');
            return;
        }

        let attendancePercentage = (attended / total) * 100;
        attendancePercentage = attendancePercentage.toFixed(2);

        let message = `Your attendance is ${attendancePercentage}%. `;
        if (attendancePercentage >= 80) {
            message += "You have sufficient attendance.";
            result.removeClass('red').addClass('green');
        } else {
            message += "Your attendance is insufficient.";
            result.removeClass('green').addClass('red');
        }

        result.html(message);
    });
});
