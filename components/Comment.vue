<template>
  <div class="comments-area mb-50">
    <h4 class="text-center mb-50">5个评论</h4>
    <div class="comment-list-wrapper">
      <div class="comment-list">
        <div class="single-comment d-flex justify-content-between">
          <div class="user d-flex justify-content-between">
            <div class="thumb mr-20">
              <img src="/img/blog/c1.jpg" alt />
            </div>
            <div class="desc">
              <h5>
                <a href="#">大贵</a>
              </h5>
              <p>2018年12月12日</p>
              <p class="comment">永远不要轻易说再见</p>
            </div>
          </div>
          <div>
            <a href="#" class="btn-reply">快速回复</a>
          </div>
        </div>
      </div>
      <div class="comment-list left-padding">
        <div class="single-comment d-flex justify-content-between">
          <div class="user d-flex justify-content-between">
            <div class="thumb mr-20">
              <img src="/img/blog/c1.jpg" alt />
            </div>
            <div class="desc">
              <h5>
                <a href="#">大贵</a>
              </h5>
              <p>2018年12月12日</p>
              <p class="comment">永远不要轻易说再见</p>
            </div>
          </div>
          <div>
            <a href="#" class="btn-reply">快速回复</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.comments-area {
  background: #fafaff;
  border: 1px solid #eee;
  padding: 50px 20px;
  margin-top: 50px;
}
.comments-area .comment-list {
  padding-bottom: 30px;
}
.comments-area .single-comment h5>a{
  color: #222;
}
.comments-area .single-comment .comment {
  color: #777;
}
.comments-area .btn-reply {
  background-color: #fff;
  color: #222;
  border: 1px solid #eee;
  padding: 8px 20px;
  display: block;
  font-weight: 600;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}
.comments-area .btn-reply:hover {
  background-color: #8490ff;
  color: #fff;
}
.comments-area .comment-list.left-padding {
  padding-left: 25px;
}
</style>


