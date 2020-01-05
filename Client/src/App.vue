<template>
  <div id="app" :class="{ rtl: direction === 'rtl' }">
    <Topbar/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Footer from './components/Footer'
export default {
  name: 'app',
  data() {
    return {
      cache_buster: '1009'
    }
  },
  components: {
    Topbar,
    Footer
  },
  computed: {
    direction() {
      return this.$t('dir')
    }
  },
  mounted() {
    // Check the cache buster - if It's different then the one on the localStorage, remove all localStorage
    const cacheBuster = localStorage.getItem('cache_buster')
    if (cacheBuster && cacheBuster != this.cache_buster) {
      localStorage.clear()
    }

    localStorage.setItem('cache_buster', this.cache_buster)

    this.$store.dispatch('general/getInitialData')
  }
}
</script>