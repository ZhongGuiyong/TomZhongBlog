<template>
  <header id="header">
    <button type="button" id="mobile-nav-toggle" @click="showMobileNav" v-show="showNavBtn">
      <svg
        t="1563951849867"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="832"
        width="24"
        height="24"
      >
        <path
          d="M126 192.5h772M898 227.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35zM126 511.5h772M898 546.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z"
          p-id="833"
          fill="#515151"
        />
        <path
          d="M126 830.5h772M898 865.5H126c-19.3 0-35-15.7-35-35s15.7-35 35-35h772c19.3 0 35 15.7 35 35s-15.7 35-35 35z"
          p-id="834"
          fill="#515151"
        />
      </svg>
    </button>
    <div class="container main-menu">
      <div class="row align-items-center justify-content-between d-flex">
        <div id="logo">
          <a href="/">
            <img src="/img/logo.png" alt title style="height:30px;"/>
          </a>
        </div>
        <nav id="nav-menu-container">
          <ul class="nav-menu">
            <li>
              <a href="/index.html">首页</a>
            </li>
            <li>
              <a href="/about.html">博客</a>
            </li>
            <li>
              <a href="/portfolio.html">生活照片</a>
            </li>
            <li>
              <a href="/contact.html">联系我</a>
            </li>
          </ul>
        </nav>
        <!-- #nav-menu-container -->
      </div>
    </div>
  </header>
  <!-- #header -->
</template>
<script>
export default {
  data() {
    return {
      showNavBtn: true
    }
  },
  mounted() {
    // 导航栏滑动阴影监听
    window.addEventListener(
      'scroll',
      () => {
        let bodyTop = 0
        let header = document.querySelector('#header')
        if (typeof window.pageYOffset != 'undefined') {
          bodyTop = window.pageYOffset
        } else if (
          typeof document.compatMode != 'undefined' &&
          document.compatMode != 'BackCompat'
        ) {
          bodyTop = document.documentElement.scrollTop
        } else if (typeof document.body != 'undefined') {
          bodyTop = document.body.scrollTop
        }
        
        if (bodyTop > 50) {
          header.classList.add('header-scrolled')
        }
        else {
          header.classList.remove('header-scrolled')
        }
      },
      false
    )
  },
  created() {
    this.$bus.$on('showNavBtn', ()=>{
      this.showNavBtn = true
    })
  },
  methods: {
    showMobileNav () {
      this.$bus.$emit('showNav', 'showNav')
      this.showNavBtn = false
    }
  }
}
</script>

<style scoped>
/* =================================== */
/*  Menu Styles
/* =================================== */
/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#mobile-nav-toggle {
  position: fixed;
  right: 15px;
  z-index: 999;
  top: 22px;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}
.main-menu {
  padding-bottom: 20px;
  padding-top: 20px;
}

#header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  transition: all 0.5s;
  z-index: 997;
  background: #fff;
}

#header.header-scrolled {
  transition: all 0.5s;
  box-shadow: -21.213px 21.213px 30px 0px rgba(158, 158, 158, 0.3);
}

#header.header-scrolled .main-menu {
  border-color: transparent;
}

@media (max-width: 673px) {
  #logo {
    margin-left: 20px;
  }
}

.nav-menu li:hover > a,
.menu-active,
.parent-active > .sf-with-ul {
  color: #8490ff !important;
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Nav Menu Essentials */
.nav-menu,
.nav-menu * {
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-menu ul {
  position: absolute;
  display: none;
  top: 100%;
  right: 0;
  z-index: 99;
}

.nav-menu li {
  position: relative;
  white-space: nowrap;
}

.nav-menu > li {
  float: left;
}

.nav-menu li:hover > ul,
.nav-menu li.sfHover > ul {
  display: block;
}

.nav-menu ul ul {
  top: 0;
  right: 100%;
}

.nav-menu ul li {
  min-width: 180px;
}

/* Nav Menu Arrows */
.sf-arrows .sf-with-ul {
  padding-right: 30px;
}

.sf-arrows .sf-with-ul:after {
  content: '\f107';
  position: absolute;
  right: 15px;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
}

.sf-arrows ul .sf-with-ul:after {
  content: '\f105';
}

/* Nav Meu Container */
@media (max-width: 768px) {
  #nav-menu-container {
    display: none;
  }
}

/* Nav Meu Styling */
.nav-menu a {
  padding: 0 8px 0px 8px;
  text-decoration: none;
  display: inline-block;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
}

.nav-menu li:hover > a {
  color: #8490ff;
}

.nav-menu > li {
  margin-left: 10px;
}

.nav-menu ul {
  margin: 22px 0 0 0;
  padding: 10px;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  background: #fff;
}

.nav-menu ul li {
  transition: 0.3s;
}

.nav-menu ul li a {
  padding: 5px 10px;
  color: #333;
  transition: 0.3s;
  display: block;
  font-size: 12px;
  text-transform: none;
}

.nav-menu ul li:hover > a {
  color: #8490ff;
}

.nav-menu ul ul {
  margin-right: 10px;
  margin-top: 0;
}

/* Mobile Nav Toggle */
#mobile-nav-toggle {
  position: fixed;
  right: 15px;
  z-index: 999;
  top: 22px;
  border: 0;
  background: none;
  font-size: 24px;
  display: none;
  transition: all 0.4s;
  outline: none;
  cursor: pointer;
}

#mobile-nav-toggle i {
  color: #222;
  font-weight: 900;
}

@media (max-width: 991px) {
  #mobile-nav-toggle {
    display: inline;
  }
  #nav-menu-container {
    display: none;
  }
}

/* Mobile Nav Styling */
#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.8);
  left: -260px;
  width: 260px;
  overflow-y: auto;
  transition: 0.4s;
}

#mobile-nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

#mobile-nav ul li {
  position: relative;
}

#mobile-nav ul li a {
  color: #fff;
  font-size: 13px;
  text-transform: uppercase;
  overflow: hidden;
  padding: 10px 22px 10px 15px;
  position: relative;
  text-decoration: none;
  width: 100%;
  display: block;
  outline: none;
  font-weight: 400;
}

#mobile-nav ul li a:hover {
  color: #fff;
}

#mobile-nav ul li li {
  padding-left: 30px;
}

#mobile-nav ul .menu-has-children i {
  position: absolute;
  right: 0;
  z-index: 99;
  padding: 15px;
  cursor: pointer;
  color: #fff;
}

#mobile-nav ul .menu-has-children i.fa-chevron-up {
  color: #8490ff;
}

#mobile-nav ul .menu-has-children li a {
  text-transform: none;
}

#mobile-nav ul .menu-item-active {
  color: #8490ff;
}

#mobile-body-overly {
  width: 100%;
  height: 100%;
  z-index: 997;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  display: none;
}

/* Mobile Nav body classes */
body.mobile-nav-active {
  overflow: hidden;
}

body.mobile-nav-active #mobile-nav {
  left: 0;
}

body.mobile-nav-active #mobile-nav-toggle {
  color: #fff;
}

/* =================================== */
/*  Homepage Styles
/* =================================== */
.section-gap {
  padding: 120px 0;
}

.alert-msg {
  color: #008000;
}

.p1-gradient-bg,
.banner-left .primary-btn,
.home-about-right .primary-btn,
.facts-area,
.thumb .overlay-bg,
.price-area .single-price:hover,
.brands-area,
.about-banner,
.sb_bar {
  background: -moz-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  background: -webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  background: -ms-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
}

.p1-gradient-color,
.single-services:hover .lnr {
  background: -moz-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  background: -webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  background: -ms-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.primary-btn {
  background: #8490ff;
  line-height: 42px;
  padding-left: 30px;
  padding-right: 30px;
  border: none;
  color: #fff;
  display: inline-block;
  font-weight: 500;
  position: relative;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  position: relative;
}

.primary-btn:focus {
  outline: none;
}

.primary-btn span {
  color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-60%);
  right: 30px;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.primary-btn:hover {
  color: #fff;
}

.primary-btn:hover span {
  color: #fff;
  right: 20px;
}

.primary-btn.white {
  border: 1px solid #fff;
  color: #fff;
}

.primary-btn.white span {
  color: #fff;
}

.primary-btn.white:hover {
  background: #fff;
  color: #8490ff;
}

.primary-btn.white:hover span {
  color: #8490ff;
}

.primary-btn.wh {
  background: #fff;
  color: #222;
  text-transform: uppercase;
}

.primary-btn.wh:hover {
  background: #222;
  color: #fff;
}

.primary-btn.squire {
  border-radius: 0px !important;
  border: 1px solid transparent;
}

.primary-btn.squire:hover {
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.section-title {
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
}

.section-title h1 {
  margin-bottom: 10px;
}

/*-------- Start Banner Area ------------*/
.banner-area {
  background: #f9f9ff;
}

.banner-area .fullscreen {
  height: 750px !important;
}

.banner-left h6 {
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
}

.banner-left h1 {
  margin: 20px 0;
  font-size: 60px;
  text-transform: uppercase;
}

@media (max-width: 991px) {
  .banner-left h1 {
    font-size: 30px;
  }
}

.banner-left .primary-btn:hover {
  box-shadow: 0px 20px 20px 0px rgba(132, 144, 255, 0.3);
}

@media (max-width: 767px) {
  .banner-left {
    margin-top: 100px;
  }
}

.banner-right {
  text-align: center;
}

@media (max-width: 991px) {
  .banner-right {
    align-self: center !important;
  }
}

@media (max-width: 767px) {
  .banner-right {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
}

/*-------- End Banner Area ------------*/
/*-------- Start home-about Area ------------*/
@media (max-width: 767px) {
  .home-about-right {
    margin-top: 30px;
  }
}

.home-about-right h6 {
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 400;
}

.home-about-right h1 {
  margin-bottom: 40px;
}

@media (max-width: 991px) {
  .home-about-right h1 {
    font-size: 20px;
  }
}

.home-about-right p {
  margin-bottom: 30px;
  max-width: 445px;
}

.home-about-right .primary-btn:hover {
  box-shadow: 0px 20px 20px 0px rgba(132, 144, 255, 0.3);
}
</style>
