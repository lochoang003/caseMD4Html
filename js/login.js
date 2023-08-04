function login() {
    let username = $("#username2").val();
    let password = $("#password2").val();
    let useracc = {username, password};
    console.log(0)
    console.log(useracc)
    $.ajax({
        type: "Post",
        contentType: "application/json",
        url: "http://localhost:8080/login",
        data: JSON.stringify(useracc),
        success: function (data) {
            console.log(data)
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data));
            location.href = "index.html";
        },
        error: function (err) {
            console.log(err);
            $("#error").text("Nhập sai tên tài khoản hoặc mật khẩu").show();
        }
    })

}