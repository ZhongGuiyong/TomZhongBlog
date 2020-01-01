<template>
  <div class="mobile-nav-container" @click="hideNav">
    <div id="mobile-body-overly" v-show="showNav">
      <button id="mobile-nav-toggle" @click="hideNav">
        <svg
          t="1564370662673"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1984"
          width="24"
          height="24"
        >
          <path
            d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"
            p-id="1985"
            fill="#777777"
          />
        </svg>
      </button>
    </div>
    <nav id="mobile-nav" :style="navBar">
      <ul class="nav-menu">
        <li>
          <a href="/">首页</a>
        </li>
        <!-- <li>
          <a href="about.html">About</a>
        </li> -->
        <li>
          <a href="/article_home">个人感悟</a>
        </li>
        <li>
          <a href="/dashboard">文章后台</a>
        </li>
        <!-- <li>
          <a href="price.html">Pricing</a>
        </li> -->
        <!-- <li class="menu-has-children">
          <a href>Blog</a>
          <ul>
            <li>
              <a href="blog-home.html">Blog Home</a>
            </li>
            <li>
              <a href="blog-single.html">Blog Single</a>
            </li>
          </ul>
        </li>
        <li class="menu-has-children">
          <a href>Pages</a>
          <ul>
            <li>
              <a href="elements.html">Elements</a>
            </li>
            <li class="menu-has-children">
              <a href>Level 2</a>
              <ul>
                <li>
                  <a href="#">Item One</a>
                </li>
                <li>
                  <a href="#">Item Two</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li> -->
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showNav: false,
      navBar: {
        left: '-260px'
      }
    }
  },
  created() {
    this.$bus.$on('showNav', () => {
      this.ModalHelper.afterOpen()
      this.showNav = true
      this.navBar.left = 0
    })

    /**
     * ModalHelper helpers resolve the modal scrolling issue on mobile devices
     * https://github.com/twbs/bootstrap/issues/15852
     * requires document.scrollingElement polyfill https://github.com/yangg/scrolling-element
     */
    // 预留接口防止后面导航栏菜单需要滚动的时候无法滚动。
    this.ModalHelper = (function(bodyCls) {
      var scrollTop
      return {
        afterOpen: function() {
          scrollTop = document.scrollingElement.scrollTop
          document.body.classList.add(bodyCls)
          // document.body.style.top = -scrollTop + 'px'
        },
        beforeClose: function() {
          document.body.classList.remove(bodyCls)
          // scrollTop lost after set position:fixed, restore it back.
          // document.scrollingElement.scrollTop = scrollTop
        }
      }
    })('modal-open')
  },
  methods: {
    hideNav() {
      this.ModalHelper.beforeClose()
      this.navBar.left = '-260px'
      this.showNav = false
      this.$bus.$emit('showNavBtn', 'showNavBtn')
    }
  }
}
</script>
<style scoped>
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
/* .mobile-nav-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  overflow-y: auto;
  transition: 0.4s;
} */
#mobile-nav {
  position: fixed;
  top: 0;
  padding-top: 18px;
  bottom: 0;
  right: 0;
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
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.7);
  /* display: none; */
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

body.modal-open {
  position: fixed;
  width: 100%;
}
.modal {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: none;
}
.modal-frame {
  position: absolute;
  left: 10%;
  right: 10%;
  top: 50%;
  transform: translateY(-50%);
  border: solid 1px #ddd;
  background: #fff;
  padding: 1em;
}
</style>


