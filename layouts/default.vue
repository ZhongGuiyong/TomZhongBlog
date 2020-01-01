<template>
  <div>
    <div style="padding-bottom: 70px;" id="header-wrapper">
      <Header />
    </div>
    <nuxt />
    <Footer />
    <MobileNav />
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import MobileNav from '~/components/MobileNav.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    MobileNav
  },
  computed: {
    ...mapState({
        seo: state => state.seo.seo
    }),
  },
  head () {
    // console.log(this.$router.history.current)
    const seoArrays = this.seo.seoArrays
    const routePath = this.$router.history.current.name
    let metaInfo = {}
    seoArrays.map(item=> {
      // console.log(item)
      if (item.name === routePath ) {
        metaInfo = item.tdk
      }
    })
    // console.log(metaInfo)
    return {
      title: metaInfo.title || '',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: metaInfo.description || '',
        }
      ]
    }
  }
}
</script>

<style>
/* 全局样式设置 */

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

/* 基本样式设置 */

::-moz-selection {
  /* Code for Firefox */
  background-color: #8490ff;
  color: #fff;
}

::selection {
  background-color: #8490ff;
  color: #fff;
}

::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #777777;
  font-weight: 300;
}

:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #777777;
  opacity: 1;
  font-weight: 300;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #777777;
  font-weight: 300;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #777777;
  font-weight: 300;
}

body {
  color: #777777;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.625em;
  position: relative;
}

ol,
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

select {
  display: block;
}

figure {
  margin: 0;
}

a {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

iframe {
  border: 0;
}

a,
a:focus,
a:hover {
  text-decoration: none;
  outline: 0;
}

.btn.active.focus,
.btn.active:focus,
.btn.focus,
.btn.focus:active,
.btn:active:focus,
.btn:focus {
  text-decoration: none;
  outline: 0;
}

.card-panel {
  margin: 0;
  padding: 60px;
}
.section-gap {
  padding: 60px 0;
}

/**
 *  排版设置
 *
 **/
.btn i,
.btn-large i,
.btn-floating i,
.btn-large i,
.btn-flat i {
  font-size: 1em;
  line-height: inherit;
}

.gray-bg {
  background: #f9f9ff;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
  color: #222222;
  line-height: 1.2em !important;
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0;
  margin-top: 0;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #222222;
}

h1,
.h1 {
  font-size: 36px;
}

h2,
.h2 {
  font-size: 30px;
}

h3,
.h3 {
  font-size: 24px;
}

h4,
.h4 {
  font-size: 18px;
}

h5,
.h5 {
  font-size: 16px;
}

h6,
.h6 {
  font-size: 14px;
  color: #222222;
}

td,
th {
  border-radius: 0px;
}

/**
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *    contenteditable attribute is included anywhere else in the document.
 *    Otherwise it causes space to appear at the top and bottom of elements
 *    that are clearfixed.
 * 2. The use of `table` rather than `block` is only necessary if using
 *    `:before` to contain the top-margins of child elements.
 */
.clear::before,
.clear::after {
  content: ' ';
  display: table;
}

.clear::after {
  clear: both;
}

.fz-11 {
  font-size: 11px;
}

.fz-12 {
  font-size: 12px;
}

.fz-13 {
  font-size: 13px;
}

.fz-14 {
  font-size: 14px;
}

.fz-15 {
  font-size: 15px;
}

.fz-16 {
  font-size: 16px;
}

.fz-18 {
  font-size: 18px;
}

.fz-30 {
  font-size: 30px;
}

.fz-48 {
  font-size: 48px !important;
}

.fw100 {
  font-weight: 100;
}

.fw300 {
  font-weight: 300;
}

.fw400 {
  font-weight: 400 !important;
}

.fw500 {
  font-weight: 500;
}

.f700 {
  font-weight: 700;
}

.fsi {
  font-style: italic;
}

.mt-10 {
  margin-top: 10px;
}

.mt-15 {
  margin-top: 15px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-25 {
  margin-top: 25px;
}

.mt-30 {
  margin-top: 30px;
}

.mt-35 {
  margin-top: 35px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-60 {
  margin-top: 60px;
}

.mt-70 {
  margin-top: 70px;
}

.mt-80 {
  margin-top: 80px;
}

.mt-100 {
  margin-top: 100px;
}

.mt-120 {
  margin-top: 120px;
}

.mt-150 {
  margin-top: 150px;
}

.ml-0 {
  margin-left: 0 !important;
}

.ml-5 {
  margin-left: 5px !important;
}

.ml-10 {
  margin-left: 10px;
}

.ml-15 {
  margin-left: 15px;
}

.ml-20 {
  margin-left: 20px;
}

.ml-30 {
  margin-left: 30px;
}

.ml-50 {
  margin-left: 50px;
}

.mr-0 {
  margin-right: 0 !important;
}

.mr-5 {
  margin-right: 5px !important;
}

.mr-15 {
  margin-right: 15px;
}

.mr-10 {
  margin-right: 10px;
}

.mr-20 {
  margin-right: 20px;
}

.mr-30 {
  margin-right: 30px;
}

.mr-50 {
  margin-right: 50px;
}

.mb-0 {
  margin-bottom: 0px;
}

.mb-0-i {
  margin-bottom: 0px !important;
}

.mb-5 {
  margin-bottom: 5px;
}

.mb-10 {
  margin-bottom: 10px;
}

.mb-15 {
  margin-bottom: 15px;
}

.mb-20 {
  margin-bottom: 20px;
}

.mb-25 {
  margin-bottom: 25px;
}

.mb-30 {
  margin-bottom: 30px;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-60 {
  margin-bottom: 60px;
}

.mb-70 {
  margin-bottom: 70px;
}

.mb-80 {
  margin-bottom: 80px;
}

.mb-90 {
  margin-bottom: 90px;
}

.mb-100 {
  margin-bottom: 100px;
}

.pt-0 {
  padding-top: 0px;
}

.pt-10 {
  padding-top: 10px;
}

.pt-15 {
  padding-top: 15px;
}

.pt-20 {
  padding-top: 20px;
}

.pt-25 {
  padding-top: 25px;
}

.pt-30 {
  padding-top: 30px;
}

.pt-40 {
  padding-top: 40px;
}

.pt-50 {
  padding-top: 50px;
}

.pt-60 {
  padding-top: 60px;
}

.pt-70 {
  padding-top: 70px;
}

.pt-80 {
  padding-top: 80px;
}

.pt-90 {
  padding-top: 90px;
}

.pt-100 {
  padding-top: 100px;
}

.pt-120 {
  padding-top: 120px;
}

.pt-150 {
  padding-top: 150px;
}

.pt-170 {
  padding-top: 170px;
}

.pb-0 {
  padding-bottom: 0px;
}

.pb-10 {
  padding-bottom: 10px;
}

.pb-15 {
  padding-bottom: 15px;
}

.pb-20 {
  padding-bottom: 20px;
}

.pb-25 {
  padding-bottom: 25px;
}

.pb-30 {
  padding-bottom: 30px;
}

.pb-40 {
  padding-bottom: 40px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pb-60 {
  padding-bottom: 60px;
}

.pb-70 {
  padding-bottom: 70px;
}

.pb-80 {
  padding-bottom: 80px;
}

.pb-90 {
  padding-bottom: 90px;
}

.pb-100 {
  padding-bottom: 100px;
}

.pb-120 {
  padding-bottom: 120px;
}

.pb-150 {
  padding-bottom: 150px;
}

.pr-30 {
  padding-right: 30px;
}

.pl-30 {
  padding-left: 30px;
}

.pl-90 {
  padding-left: 90px;
}

.p-40 {
  padding: 40px;
}

.float-left {
  float: left;
}

.float-right {
  float: right;
}

.text-italic {
  font-style: italic;
}

.text-white {
  color: #fff;
}

.text-black {
  color: #000;
}

.transition {
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
}

.section-full {
  padding: 100px 0;
}

.section-half {
  padding: 75px 0;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-rigth {
  text-align: right;
}

.flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
}

.inline-flex {
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -moz-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.flex-grow {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.flex-wrap {
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.flex-left {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  -webkit-justify-content: flex-start;
  -moz-justify-content: flex-start;
  justify-content: flex-start;
}

.flex-middle {
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -moz-align-items: center;
  align-items: center;
}

.flex-right {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  -webkit-justify-content: flex-end;
  -moz-justify-content: flex-end;
  justify-content: flex-end;
}

.flex-top {
  -webkit-align-self: flex-start;
  -moz-align-self: flex-start;
  -ms-flex-item-align: start;
  align-self: flex-start;
}

.flex-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
}

.flex-bottom {
  -webkit-align-self: flex-end;
  -moz-align-self: flex-end;
  -ms-flex-item-align: end;
  align-self: flex-end;
}

.space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-justify-content: space-between;
  -moz-justify-content: space-between;
  justify-content: space-between;
}

.space-around {
  -ms-flex-pack: distribute;
  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  justify-content: space-around;
}

.flex-column {
  -webkit-box-direction: normal;
  -webkit-box-orient: vertical;
  -webkit-flex-direction: column;
  -moz-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
}

.flex-cell {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -moz-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.display-table {
  display: table;
}

.light {
  color: #fff;
}

.dark {
  color: #222;
}

.relative {
  position: relative;
}

.overflow-hidden {
  overflow: hidden;
}

.overlay {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.container.fullwidth {
  width: 100%;
}

.container.no-padding {
  padding-left: 0;
  padding-right: 0;
}

.no-padding {
  padding: 0;
}

.section-bg {
  background: #f9fafc;
}

@media (max-width: 767px) {
  .no-flex-xs {
    display: block !important;
  }
}

.row.no-margin {
  margin-left: 0;
  margin-right: 0;
}

.about-banner,
.skill-bar,
.job-experience {
  background: -moz-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
  background: -webkit-linear-gradient(0deg, #8490ff 0%, #62bdfc 100%);
}

.post-content-area {
  background-color: #f9f9ff;
}
</style>
