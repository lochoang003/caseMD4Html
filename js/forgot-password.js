function forgotPassword() {
    let username = $("#input").val();
    let email = $("#email").val();
    let user = {username,email}

    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/user/forgotPassword",
        data: JSON.stringify(user),
        success: function (user) {
            console.log(user.password)

                $("#pForgotPassword").html("Mật khẩu của bạn là : " + user.password)


        },
        error: function (err) {
            console.log(err);
            $("#pForgotPassword").html("Tài khoản không tồn tại  ")
        }
    })


}
