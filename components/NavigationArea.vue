<template>
  <div class="row navigation-area">
    <div class="prev-acrticle col-lg-6 col-md-6 col-12 mb-10">
      <a href="#" class="text-left d-flex">
        <div class="thumb mr-20">
          <img class="img-fluid" src="/img/blog/prev.jpg" alt />
        </div>
        <div class="detatils">
          <p>上一篇文章</p>
          <h4>我不快乐</h4>
        </div>
      </a>
    </div>
    <div class="next-acrticle col-lg-6 col-md-6 col-12">
      <a href="#" class="d-flex flex-row-reverse text-right">
        <div class="thumb ml-20">
          <img class="img-fluid" src="/img/blog/next.jpg" alt />
        </div>
        <div class="detatils">
          <p>下一篇文章</p>
          <h4>我很快乐</h4>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.navigation-area {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 30px 0;
}
@media screen and (min-width: 720px) {
  .navigation-area .next-acrticle a{
    text-align: right;
    flex-direction: row-reverse;
  }
  .navigation-area .next-acrticle a .thumb {
    margin-left: 20px;
  }
}

.navigation-area a {
  color: #777;
  /* background-color: #eee; */
  transition: all 0.2s ease;
}
.navigation-area a:hover {
  color: #fff;
  background-color: #8490ff;
}
.navigation-area a:hover h4 {
  color: #fff;
}
</style>


