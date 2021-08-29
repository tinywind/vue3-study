<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-center">Re-usable Modal</h1>

      <div class="fixed inset-0 flex items-center justify-center">
        <button
            class="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            type="button" @click="showing++">
          Open dialog
        </button>
      </div>
    </div>

    <Modal :call="showing" @close="showing = 0">
      <template v-slot:header>
        <strong>HEADER1</strong>
      </template>
      <template v-slot:body>
        <small>BODY1123123</small>
      </template>
    </Modal>
  </section>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal
  },
  data() {
    return {
      showing: 0
    }
  }
}
</script>

<style scoped>

</style>
