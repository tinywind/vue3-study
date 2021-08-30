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
}
</script>
