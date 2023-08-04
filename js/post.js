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
    let str = `<img width="50" height="10" src="${userOj.avatar}" alt="" >`
    $("#imgUser").html(str)

}
function imgUser1(user1) {
    let str = `<img width="50" height="10" src="${user1.avatar}" alt=""> 

`
    $("#imgUser1").html(str)

}


function  showPost(arr) {
    let str = "";
    for (const p of arr) {
        str += `

        <div class="user-post" >
											<div class="friend-info">
												<figure>
													<img src="${p.img}" alt="">
												</figure>
												<div class="friend-name">
                                                    <ins><a href="time-line.html?userAccId=${p.userAcc.id}" >${p.userAcc.fullName}</a></ins>
													<span>${p.createDate}</span>
												</div>

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
															<span class="dislike" data-toggle="tooltip" title="share" onclick='chiase(${JSON.stringify(p)})' >
																<i class="ti-heart-broken"></i>
																<ins id="shareCount_${p.id}">${p.shareCount}</ins>
															</span>
															</li>
<!--															<li class="social-media">-->
<!--																<div class="menu">-->
<!--																	<div class="btn trigger"><i class="fa fa-share-alt"></i></div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-html5"></i></a></div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-facebook"></i></a></div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-google-plus"></i></a></div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-twitter"></i></a></div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-css3"></i></a></div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-instagram"></i></a>-->
<!--																		</div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-dribbble"></i></a>-->
<!--																		</div>-->
<!--																	</div>-->
<!--																	<div class="rotater">-->
<!--																		<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-pinterest"></i></a>-->
<!--																		</div>-->
<!--																	</div>-->

<!--																</div>-->
<!--															</li>-->
														</ul>
													</div>
													<div class="description">

<p>
 ${p.content}
</p>
</div>
</div>
</div>
<div class="coment-area">
<div id="commentP${p.id}"></div>
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



