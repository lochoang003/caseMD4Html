$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
     const id = urlParams.get("userAccId");
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/userAccDetail/" + id,
        success: function (data) {
            $(".userAccFullName").html(data.fullName);
            avatarUserAcc(data.avatar)
            getAllPostOneUserAcc(id)

        },
        error: function (err) {
            console.log("loi")
        }
    })
});
function avatarUserAcc(avatar){
    let str = `
    								<img src="${avatar}" alt="">

    `
    $(".userAvatar1").html(str)
}

function getAllPostOneUserAcc(id) {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts/user/" +id,
        success: function (data) {

            showPostUserAcc(data);
        },
        error: function (err) {
            console.log(err)
        }
    })
}
function showPostUserAcc(data){
    let str = ``
    for (const post of data) {
        str += `
<div class="central-meta item" >
<div class="user-post" >
        <div class="friend-info">
												<figure>
													<img src="${post.userAcc.avatar}" alt="">
													
												</figure>
												<div class="friend-name">
													<ins><a href="time-line.html" title="" class="userAccFullName">${post.userAcc.fullName}</a></ins>
													<span>${post.createDate}</span>
												</div>
												<div class="description">
														
														<p>
														${post.content}
														</p>
													</div>
												<div class="post-meta">
													<div class="linked-image align-left">
													<img src="${post.img}">
													
													</div>
													<div class="detail">
														<span></span>
														<p>
														${post.video}
</p>
	
													</div>		
													<div class="we-video-info">
														<ul>
															
															<li>
																<span class="views" data-toggle="tooltip" title="views">
																	<i class="fa fa-eye"></i>
																	<ins>1.2k</ins>
																</span>
															</li>
															<li>
																<span class="comment" data-toggle="tooltip" title="Comments">
																	<i class="fa fa-comments-o"></i>
																	<ins>${post.commentCount}</ins>
																</span>
															</li>
															<li>
																<span class="like" data-toggle="tooltip" title="like">
																	<i class="ti-heart"></i>
																	<ins>${post.likeCount}</ins>
																</span>
															</li>
															<li>
																<span class="dislike" data-toggle="tooltip" title="dislike">
																	<i class="ti-heart-broken"></i>
																	<ins>200</ins>
																</span>
															</li>
															<li>
															<a class="btn btn-warning" href="edit-post.html?postId=${post.id}">Edit</a></li>
															<li><a class="btn btn-danger" id="deleteUserAcc" data-id="${post.id}">Delete</a></li>
															<li class="social-media">
																<div class="menu">
																  <div class="btn trigger"><i class="fa fa-share-alt"></i></div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-html5"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-facebook"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-google-plus"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-twitter"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-css3"></i></a></div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-instagram"></i></a>
																	</div>
																  </div>
																	<div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-dribbble"></i></a>
																	</div>
																  </div>
																  <div class="rotater">
																	<div class="btn btn-icon"><a href="#" title=""><i class="fa fa-pinterest"></i></a>
																	</div>
																  </div>

																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
											</div>
											</div>  
											
        `

    }
    $("#postDetail").html(str)

}

$(document).on("click", "#deleteUserAcc", function() {
    const postId = $(this).data("id");
    // Gửi yêu cầu AJAX để xóa bài đăng với postId
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/posts/deletePost/" + postId,
        success: function (data) {
            $(this).closest('.central-meta.item').remove();
            $("#postDetail").html(str)
        },
        error: function (err) {
            console.log(err)
        }
    });
});