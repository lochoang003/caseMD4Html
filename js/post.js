function getAll() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts",
        success: function (data) {
            let user = localStorage.getItem("user");
            let userOj = JSON.parse(user)
            let user1 = JSON.parse(user)
            imgUser(userOj)
            imgUser1(user1)

            showPost(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}
function imgUser(userOj) {
    let str = `<img width="50" height="10" src="${userOj.avatar}" alt="" > `
    $("#imgUser").html(str)

}
function imgUser1(user1) {
    let str = `<img width="50" height="10" src="${user1.avatar}" alt=""> 
`
    $("#imgUser1").html(str)

}
function imgUser2(user2) {
    let str = `<img width="50" height="10" src="${user2.avatar}" alt=""> 
`
    $("#imgUser2").html(str)

}



function  showPost(arr) {
    let str = "";
    for (const p of arr) {
        str += `
<!--<div class="central-meta item"  style="margin: 25px 0 25px 0"  >-->
        <div class="user-post" style="margin-top: 50px"  >
											<div class="friend-info"   >
												<figure>
													<img src="${p.userAcc.avatar}" alt="">
											
												</figure>
												<div class="friend-name">
                                                    <ins><a href="time-line.html?userAccId=${p.userAcc.id}" >${p.userAcc.fullName}</a></ins>
													<span>${p.createDate}</span>
												</div>
												<p>
 ${p.content}
</p>

												<div class="post-meta">
													<img src="${p.img}" alt="">
													<div class="we-video-info">
														<ul>
														
															<li onclick="showComment(${p.id})">
															<span class="comment" data-toggle="tooltip" title="Comments">
																<i class="fa fa-comments-o"></i>
																<ins>${p.commentCount}</ins>
															</span>
															</li>
															<li>
															<span class="like" data-toggle="tooltip" title="like" onclick='like(${JSON.stringify(p)})'>
																<i class="ti-heart"></i>
																<ins id="likeCount_${p.id}">${p.likeCount}</ins>
															</span>
															</li>
															<li>
															<span class="dislike" data-toggle="tooltip" title="share" onclick='chiase(${JSON.stringify(p)},${p.id})'  >
																<i class="ti-heart-broken" ><a href="time-line.html?userAccId=${p.userAcc.id}"></a></i>
																<ins id="shareCount_${p.id}">${p.shareCount}</ins>
															</span>
															</li>

														</ul>
													</div>
											
</div>
</div>
</div>
<div class="coment-area">
<div id="commentP${p.id}"></div>
<!--</div>-->
        
`
    }
    document.getElementById("post").innerHTML = str;

}
getAll();

function create() {
    let content = $("#content").val();
    let img = $("#img").val();
    let video = $("#video").val();
    let post = {content,img,video}
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts/createPost",
        data: JSON.stringify(post),
        success: function () {
            getAll();
        },
        error: function (err) {
            console.log(err);
        }
    })
        }



