<template>
  <section class="flex w-full">
    <div class="m-auto w-48">
      <h1 class="text-2xl text-center">Calculator</h1>
      <p ref="expression" class="text-3xl text-right mt-10 my-4 overflow-y-hidden break-all" style="min-height: 3rem">{{ text }}</p>
      <small>{{ operand1 }} {{ operator }} {{ operand2 }}</small>
      <div class="grid grid-cols-4 gap-1">
        <button v-for="letter in letters" :key="letter" class="p-2 w-10 h-10 border rounded shadow mb-2" type="button" @click="pressed(letter)" v-text="letter"></button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      letters: [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, 'C', '=', '/',],
      text: '',
      operand1: '',
      operand2: '',
      operator: '',
    }
  },
  methods: {
    pressed(letter) {
      if (letter === 'C') {
        this.operand1 = ''
        this.operand2 = ''
        this.operator = ''
        this.text = ''
        return
      }

      if (isFinite(letter) && !isNaN(letter)) {
        if (!this.operand1 || !this.operator) {
          this.operand1 += letter
          this.text = this.operand1
        } else {
          this.operand2 += letter
          this.text = this.operand2
        }
        return
      }

      if (['+', '-', '*', '/'].includes(letter)) {
        if (!this.operand1)
          return

        if (this.operand2) {
          const result = this.calculate()
          this.operand1 = isFinite(result) && !isNaN(result) ? result : '0'
        }

        this.operator = letter
        this.operand2 = ''
        this.text = ''
        return
      }

      if (letter === '=') {
        const result = this.calculate()
        this.text = isFinite(result) && !isNaN(result) ? result : '0'
        this.operand1 = this.text
        this.operand2 = ''
        this.operator = ''
      }
    },
    calculate() {
      return this.operator === '+' ? parseFloat(this.operand1) + parseFloat(this.operand2)
          : this.operator === '-' ? parseFloat(this.operand1) - parseFloat(this.operand2)
              : this.operator === '*' ? parseFloat(this.operand1) * parseFloat(this.operand2)
                  : parseFloat(this.operand1) / parseFloat(this.operand2)
    },
    handleKeyInput(event) {
      this.pressed(event.key.toLowerCase() === 'enter' ? '=' : event.key.toLowerCase() === 'c' ? 'C' : event.key)
    }
  },
  mounted() {
    window.addEventListener('keyup', this.handleKeyInput)
  },
  unmounted() {
    window.removeEventListener('keyup', this.handleKeyInput)
  }
}
</script>
