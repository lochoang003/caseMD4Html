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
													<ins><a href="time-line.html" title="" >${p.userAcc.fullName}</a></ins>
													<span>${p.createDate}</span>
												</div>

												<div class="post-meta">
													<img src="${p.img}" alt="">
													<div class="we-video-info">
														<ul>
														
															<li>
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
												<ul class="we-comet">
													<li>
														<div class="comet-avatar">
															<img src="images/resources/comet-1.jpg" alt="">
														</div>
														<div class="we-comment">
															<div class="coment-head">
																<h5><a href="time-line.html" title="">Jason borne</a></h5>
																<span>1 year ago</span>
																<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
															</div>
															<p>we are working for the dance and sing songs. this car is very awesome for the youngster. please vote this car and like our post</p>
														</div>
														<ul>
															<li>
																<div class="comet-avatar">
																	<img src="images/resources/comet-2.jpg" alt="">
																</div>
																<div class="we-comment">
																	<div class="coment-head">
																		<h5><a href="time-line.html" title="">alexendra dadrio</a></h5>
																		<span>1 month ago</span>
																		<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
																	</div>
																	<p>yes, really very awesome car i see the features of this car in the official website of <a href="#" title="">#Mercedes-Benz</a> and really impressed :-)</p>
																</div>
															</li>
															<li>
																<div class="comet-avatar">
																	<img src="images/resources/comet-3.jpg" alt="">
																</div>
																<div class="we-comment">
																	<div class="coment-head">
																		<h5><a href="time-line.html" title="">Olivia</a></h5>
																		<span>16 days ago</span>
																		<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
																	</div>
																	<p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
																</div>
															</li>
														</ul>
													</li>
													<li>
														<div class="comet-avatar">
															<img src="images/resources/comet-1.jpg" alt="">
														</div>
														<div class="we-comment">
															<div class="coment-head">
																<h5><a href="time-line.html" title="">Donald Trump</a></h5>
																<span>1 week ago</span>
																<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
															</div>
															<p>we are working for the dance and sing songs. this video is very awesome for the youngster. please vote this video and like our channel
																<i class="em em-smiley"></i>
															</p>
														</div>
													</li>
													<li>
														<a href="#" title="" class="showmore underline">more comments</a>
													</li>
													<li class="post-comment">
														<div class="comet-avatar">
															<img src="images/resources/comet-1.jpg" alt="">
														</div>
														<div class="post-comt-box">
															<form method="post">
																<textarea placeholder="Post your comment"></textarea>
																<div class="add-smiles">
																	<span class="em em-expressionless" title="add icon"></span>
																</div>
																<div class="smiles-bunch">
																	<i class="em em---1"></i>
																	<i class="em em-smiley"></i>
																	<i class="em em-anguished"></i>
																	<i class="em em-laughing"></i>
																	<i class="em em-angry"></i>
																	<i class="em em-astonished"></i>
																	<i class="em em-blush"></i>
																	<i class="em em-disappointed"></i>
																	<i class="em em-worried"></i>
																	<i class="em em-kissing_heart"></i>
																	<i class="em em-rage"></i>
																	<i class="em em-stuck_out_tongue"></i>
																</div>
																<button type="submit"></button>
															</form>
														</div>
													</li>
												</ul>
											</div>
										</div>
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



