function getAll() {
    $.ajax({
        type: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/posts",
        success: function (data) {
            showPost(data);
        },
        error: function (err) {
            console.log(err);
        }
    })
}
function  showPost(arr) {
    let str = "";
    for (const p of arr) {
        str += `
              <div class="friend-info">
<figure>
<img src="${p.img}" alt="">
</figure>
<div class="friend-name">
<ins><a href="time-line.html" title="">${p.fullname}</a></ins>
<span>${p.createDate}</span>
</div>
<div class="post-meta">
<img src="${p.video}" alt="">
<div class="we-video-info">
<ul>
<!--<li>-->
<!--<span class="views" data-toggle="tooltip" title="views">-->
<!--<i class="fa fa-eye"></i>-->
<!--<ins>1.2k</ins>-->
<!--</span>-->
<!--</li>-->
<li>
<span class="comment" data-toggle="tooltip" title="Comments">
<i class="fa fa-comments-o"></i>
<ins>${p.likeCount}</ins>
</span>
</li>
<li>
<span class="like" data-toggle="tooltip" title="like">
<i class="ti-heart"></i>
<ins>${p.commentCount}</ins>
</span>
</li>
<li>
<span class="dislike" data-toggle="tooltip" title="dislike">
<i class="ti-heart-broken"></i>
<ins>${p.likeCount}</ins>
</span>
</li>
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
<div class="description">

<p>
 ${p.content}
</p>
</div>
</div>
</div>
        `
    }
    document.getElementById("post").innerHTML = str;

}
getAll();

function create() {

    let img = $("#img").val();
    let video = $("#video").val();
    let createDate = $("#createDate").val();
    let likeCount = $("#likeCount").val();
    let commentCount = $("#commentCount").val();
    let shareCount = $("#shareCount").val();

    let post = {img,video,createDate,likeCount,commentCount,shareCount}

    }
    $.ajax({
        type: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: "http://localhost:8080/posts/create",
        data: JSON.stringify(post),
        success: function () {
            getAll();
        },
        error: function (err) {
            console.log(err);
        }
    })
