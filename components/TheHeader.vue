<template>
  <nav :class="headerClassList" class="fixed w-full top-0" style="z-index: 1000000000;">
    <div
      class="mx-auto flex flex-wrap items-center justify-between mt-0 py-5 custom-header"
      style="width: 80%;"
    >
      <div>
        <div class="nav-btn" @click="isOpen=true" v-if="isOpen == false">
          ≡
        </div>
        <div class="nav-btn-clicked" @click="isOpen=false" v-if="isOpen == true">
          x
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="desktop-item">
          <button class="contact-us">Contact us</button>
        </div>
        <img src="../assets/img/header/logo.png" />
      </div>
    </div>
    <div class="mobile-menu">
      <div class="mobile-menu-item">OSCAR</div>
      <div class="mobile-menu-item">ONE SOLUTION</div>
      <div class="mobile-menu-item">CROSS</div>
      <div class="mobile-menu-item">ADJUST</div>
      <div class="mobile-menu-item">RESTORE</div>
      <div class="mobile-menu-item">TESTIMONIALS</div>
      <div class="mobile-menu-item">FIND OUT MORE</div>
      <div class="mobile-menu-item">CONTACT</div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
// import img from '../assets/img/header/logo.png'

export default {
  name: 'TheHeader',
  components: {
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
      mode: '',

    }
  },
  computed: {
    isSticky() {
      return this.scrollY > 10
    },
    headerClassList() {
      return this.isSticky ? 'bg-greyWhite' : 'bg-greyWhite'
    },
    navSignUpClassList() {
      return this.isSticky ? 'bg-purple text-black' : 'bg-purple text-white'
    },
    navSignInClassList() {
      return this.isSticky ? 'text-white' : ''
    },
    navContentClassList() {
      let classList = this.isSticky ? 'bg-white' : 'bg-gray-100'
      if (!this.isOpen) {
        classList += ` hidden`
      }
      return classList
    }
  },
  methods: {
    onClick() {
      this.isOpen = false
    },
    onScroll() {
      this.scrollY = window.scrollY
    },
    onToggleClick() {
      this.isOpen = !this.isOpen
      console.log('isOPen', this.isOpen)
    }
  },
  mounted() {
    this.scrollY = window.scrollY
    document.addEventListener('click', this.onClick)
    document.addEventListener('scroll', this.onScroll)
    if (window.innerWidth >= 768) this.mode = 'desktop';
    else this.mode = 'mobile';
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onClick, true)
    document.removeEventListener('scroll', this.onScroll, true)
  }
}
</script>

<style scoped>
.bg-greyWhite {
  background-color: #F8F8F8 !important;
}
.bg-purple {
  background-color: #D2B8ED;
}
.bg-black {
  background-color: #2A2A2A;
}
.contact-us {
  color: white;
  background-color: #F25625;
  border-radius: 5px;
  font-weight: bold;
  padding: 3px 15px;
  margin-right: 50px;
}
.nav-btn {
  font-size: 57px;
  line-height: 40px;
  cursor: pointer;
  display: none;
}
.mobile-menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.9;
  left: 0;
  right: 0;
  background-color: white;
  font-size: 18px;
  color: #6E6E6E;
  height: 100vh;
  display: none;
}
.mobile-menu-item {
  border-top: 2px solid #B7B4B1;
  width: 80%;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
}
.nav-btn-clicked {
  display: none;
}
@media screen and (max-width: 560px) {
  .desktop-item {
    display: none;
  }
}
</style>