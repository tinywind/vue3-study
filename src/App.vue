<template>
  <AppHeader @show-login-modal="loginModalCallCount++"/>
  <div class="w-full flex">
    <router-view/>
  </div>
  <LoginModal :call-count="loginModalCallCount"/>
</template>

<script>
import AppHeader from "@/components/AppHeader"
import LoginModal from "@/components/LoginModal"

export default {
  components: {
    LoginModal,
    AppHeader,
  },
  data() {
    return {
      loginModalCallCount: 0,
      user: null
    }
  },
}
</script>
