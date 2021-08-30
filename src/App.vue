<template>
  <AppHeader/>
  <div class="w-full flex">
    <router-view/>
  </div>

  <teleport to="#modals">
    <LoginModal/>
    <AlertModal/>
  </teleport>
</template>

<script>
import AppHeader from "@/components/singleton/AppHeader"
import LoginModal from "@/components/singleton/LoginModal"
import AlertModal from "@/components/singleton/AlertModal";
import {registerUserStateChangeEventHandler} from "@/utillities/firebase";

export default {
  components: {
    AlertModal,
    LoginModal,
    AppHeader,
  },
  data() {
    return {
      user: null
    }
  },
  created() {
    registerUserStateChangeEventHandler(user => this.$store.commit(user ? 'user/login' : 'user/logout', user))
  }
}
</script>
