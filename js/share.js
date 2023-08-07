function chiase(p,id) {
    p.shareCount +=1;
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts/editPost",
        data: JSON.stringify(p),
        success: function () {
            getAll();
            sharePost(id);
        },
        error: function (err) {
            console.log(err);
        }
    })
}

function  sharePost(id){
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts/findPostById/"+id,
        success: function (data) {
            localStorage.setItem("sharePost",JSON.stringify(data))
            location.href = "time-line.html"

        },
        error: function (err) {
            console.log(err);
        }
    })
}