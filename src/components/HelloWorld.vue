<template>
  <AppHeader/>
  <div class="hello">
    <h1 class="product-name hover:!text-center text-left">{{ msg.toUpperCase() + '!!' }} {{ arrayCount }}</h1>

    <div v-html="msg.toUpperCase()" v-text="'a1'"/>

    <ol v-if="true">
      <li v-if="false">false</li>
      <li v-else-if="!false">false2</li>
      <li v-for="(e, i) in [10, 20, 30]" v-bind:key="i">[{{ i }}] {{ e }}</li>
    </ol>

    <button v-bind:disabled="false" @click="value++">button</button>

    <input v-bind:[attribute]="value"/>

  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  name: 'HelloWorld',
  components: {
    AppHeader
  },
  props: {
    msg: String
  },
  data() {
    return {
      attribute: "value",
      value: 1,

      array: [{a: 1, b: 2, c: 3}]
    }
  },
  computed: {
    arrayCount() {
      return this.array.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {margin: 40px 0 0;}
ul {list-style-type: none;padding: 0;}
li {display: inline-block;margin: 0 10px;}
a {color: #42b983;}
</style>
