$(document).ready(function () {
    $("#btnAlert").click(function () {
        Swal.fire({
            title: 'Enter your message',
            input: 'text',
            inputValidator: (value) => {
                return !value && 'You need to write message!'
            }
        })
    });
    $("#btnPost").click(function () {
        Swal.fire(
            'Thank you :)',
            'We will review your comment!',
            'success'
        )
    });
});
