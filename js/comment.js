function commentP(comments, idPost) {
    let str = '';
    for (const c of comments) {

        str += `
											<div class="coment-area">
												<ul class="we-comet">
													<li>
														<div class="comet-avatar">
															<img src=${c.avatar} alt="avata">
														</div>
														<div class="we-comment">
															<div class="coment-head">
																<h5><a  href="${c.avatar}"  >${c.username}</a></h5>
																<span>${c.createDate}</span>
																<a class="we-reply" href="#" title="Reply"><i class="fa fa-reply"></i></a>
															</div>
															<p>${c.content}</p>
														</div>
										
													</li>
										
													
													
												</ul>
											</div>
											
        
        `

    }
    str += `<li class="post-comment">
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
													</li>`
    $("#commentP" + idPost).html(str)
}

function showComment(idPost) {
    $.ajax({
        type: "Get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        url: "http://localhost:8080/comment/" + idPost,
        success: function (comments) {
            commentP(comments, idPost)
        },
        error: function (err) {
            console.log(err);
        }
    })

}
