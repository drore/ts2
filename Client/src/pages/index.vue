<template>
  <div>
    <div class="jumbotron jumbotron-fluid tsbackground">
      <div class="container" style="background-color: rgba(255, 255, 255, 0.8);">
        <h1 class="display-4">{{$t('login.center.welcome')}}</h1>
        <div class="lead">
          {{$t('login.center.Intro_line_1')}}
          {{$t('login.center.Intro_line_2')}}
        </div>
        <hr>
        <div class="lead" style="color:green">
          {{$t('version_text')}}
          <a href="mailto:dror.elovits@gmail.com">{{$t('support')}}</a>
        </div>
      </div>
    </div>
    <div class="container">
      <LoginForm v-if="shownSection === 'login'"/>

      <RegistrationForm v-if="shownSection === 'registration'"/>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

export default {
  components: {
    LoginForm,
    RegistrationForm
  },
  beforeMount(){
    const locale = localStorage.getItem('locale')
    if(locale){
      this.$root.$i18n.locale = locale;
    }
  },
  computed: {
    shownSection() {
      return this.$store.state.auth.login.shown_section
    }
  }
}
</script>
<style>
.tsbackground {
  background-image: url(/images/Banner_1900_100.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
