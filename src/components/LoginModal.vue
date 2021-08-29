<template>
  <TransitionRoot :show="isOpen" appear as="template">
    <Dialog :open="isOpen" @close="setIsOpen">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">

          <!-- Dimmer. when click, disappear dialog -->
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
            <DialogOverlay class="fixed inset-0 bg-black opacity-30"/>
          </TransitionChild>

          <span aria-hidden="true" class="inline-block h-screen align-middle">&#8203;</span>
          <TransitionChild as="template"
                           enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100"
                           leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
            <form class="login-form" @submit.prevent="submit">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 text-center pb-5">Google Login</DialogTitle>
              <div class="mt-2">
                <label>username/email</label>
                <input ref="username" v-model="username" class="rounded shadow p-2 w-full" placeholder="enter your username or email" type="text"/>
              </div>
              <div class="mt-2">
                <label>password</label>
                <input v-model="password" class="rounded shadow p-2 w-full" placeholder="enter your password" type="text"/>
              </div>
              <div class="mt-4 text-right">
                <button class="login-submit-button" type="submit">SUBMIT</button>
              </div>
            </form>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {login, registerUserStateChangeEvent} from "@/utillities/firebase"

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
  },
  props: {
    callCount: Number
  },
  data() {
    return {
      isOpen: false,
      username: null,
      password: null
    }
  },
  methods: {
    submit() {
      login(this.username, this.password)
          .then((userCredential) => {
            this.user = userCredential.user
            this.$emit('close-login-modal', {result: true})
          })
          .catch(error => alert('login failed: ' + error.message))
    },
    setIsOpen(value) {
      this.isOpen = value;
    }
  },
  watch: {
    callCount() {
      this.setIsOpen(true)
    }
  },
  created() {
    registerUserStateChangeEvent(() => this.setIsOpen(false))
  },
  updated() {
    this.isOpen && this.$refs.username.focus()
  }
}
</script>
<style scoped>
.login-form {
  @apply inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl
}
.login-submit-button {
  @apply inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
}
</style>
