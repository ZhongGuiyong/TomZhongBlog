<template>
  <div>
    <!-- 我的简介，我的兴趣 -->
    <section class="section-1 my-career my-interest">
      <div class="wrapper">
        <div class="container">
          <div class="content">
            <h1>
              我是,
              <span id="typed-carrer"></span>
            </h1>
            <p
              style="margin: 0"
            >I am Tom Zhong(大贵), I am Frontend developer, Basketball fans, and Ukelele fans.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 我的个人介绍，技能 -->
    <section class="section-2 self-introduction section-gap">
      <div class="container">
        <div class="row">
          <div class="col-md-4 .col-12">
            <div class="about-img-bg">
              <div class="about-img">
                <img src="/img/me.jpg" alt class="img" />
              </div>
            </div>
          </div>
          <div class="col-md-8 .col-12">
            <div class="introduction">
              <h2 class="mt-10 mb-10">作为一个前端工程师，我不仅仅只学习前端领域的知识，还喜欢在其他未知的技术领域探寻。</h2>
              <p
                class="detail"
                style="text-indent: 2em;"
              >人的一生很漫长，我选择了前端工程师作为我的职业，可能会有人说我们就是一个写网页的，但是事实证明，我们能称得上工程师，业务线是不可能简单的，从H5应用，H5游戏，小程序，跨平台应用(electron), Express等等。没有人再敢说我们前端的工作是简单的。这，也是我选择前端的原因，可以说它很简单，简单到你在页面构建的时候就像在搭积木。更可以说很复杂，工程化的思想渗透到了前端的方方面面，组件化，webpack bundle打包，MVVM设计。一句话概括，前端工程师，是有艺术气息和理工气息的工程师。</p>
              <div class="coding-panel">
                <span
                  id="typed-npm"
                  style="white-space: pre-wrap;word-wrap: break-word; color:#fff; word-break: break-all"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 前端工程师技能包 -->
    <section class="section-3 section-gap" style="background-color: #fff;">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content col-lg-7">
            <div class="title text-center">
              <h1 class="mb-10">前端工程师技能包</h1>
              <p>嗯，下面就是我会的一点点东西！</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-pie-chart"></span>
              <a href="#">
                <h4>Web Design</h4>
              </a>
              <p>“It is not because things are difficult that we do not dare; it is because we do not dare that they are difficult.”</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-laptop-phone"></span>
              <a href="#">
                <h4>Web Development</h4>
              </a>
              <p>If you are an entrepreneur, you know that your success cannot depend on the opinions of others. Like the wind, opinions.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-camera"></span>
              <a href="#">
                <h4>Photography</h4>
              </a>
              <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-picture"></span>
              <a href="#">
                <h4>Clipping Path</h4>
              </a>
              <p>Hypnosis quit smoking methods maintain caused quite a stir in the medical world over the last two decades. There is a lot of argument.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-tablet"></span>
              <a href="#">
                <h4>Apps Interface</h4>
              </a>
              <p>Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-services">
              <span class="lnr lnr-rocket"></span>
              <a href="#">
                <h4>Graphic Design</h4>
              </a>
              <p>You’ve heard the expression, “Just believe it and it will come.” Well, technically, that is true, however, ‘believing’ is not just thinking that.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End services Area -->
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Typed from 'typed.js'

export default {
  layout: 'default',
  components: {
    Logo
  },
  mounted() {
    // 使用typed.js
    new Typed('#typed-carrer', {
      strings: ['大贵', '前端工程师', '篮球爱好者', '尤克里里爱好者'],
      typeSpeed: 50,
      backSpeed: 50,
      cursorChar: '_',
      shuffle: true,
      smartBackspace: true,
      loop: true
    })
    new Typed('#typed-npm', {
      strings: [
        'npm install Dagui^1000\n`installing...` ^1000\n`[ successful ]Dagui will try best to do everything...`'
      ],
      typeSpeed: 50,
      backSpeed: 0,
      backDelay: 2000,
      loop: true
    })
  }
}
</script>

<style scoped>
/* section 1 开始 */
.section-1 {
  height: 100vh;
}
.section-1 .wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  padding: 0 15px;
  background: #b8a07e url(/img/home-bg.jpg) repeat scroll center center / cover;
  z-index: -1;
}
.section-1 .container {
  overflow: hidden;
  width: 100%;
}
.section-1 .container .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  color: #fff;
}
.section-1 .container .content h1 {
  letter-spacing: 0.02em;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  white-space: pre-line;
  max-width: 100%;
  color: #fff;
}
.section-1 .container .content p {
  margin: 0;
  color: #fff;
}

/* section 1 结束 */

/* section 2 开始 */
.section-2 {
  background: #fff;
}
.about-img-bg {
  border: 10px solid #b8a07e;
}
.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  box-shadow: 0px 0px 85px 0px rgba(0, 0, 0, 0.14);
  transform: translate(20px, -20px);
}
@media (max-width: 991px) {
  .about-img img {
    display: block;
    transform: translate(0, 0);
    height: auto;
  }
}
.coding-panel {
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 5px;
  border: #ccc 1px solid;
  height: 80px;
  box-sizing: content-box;
}

.single-services {
  text-align: center;
  margin-top: 60px;
}
</style>
