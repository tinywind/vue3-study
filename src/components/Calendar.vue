<template>
  <div class="mx-auto w-9/12">
    <h1 class="text-2xl my-2">Calendar</h1>
    <section class="flex justify-between">
      <h2 class="px-3 font-bold"> {{ getMonthLocalString(currentMonth) }} </h2>
      <h2 class="px-3 font-bold"> {{ currentYear }}</h2>
    </section>

    <section class="flex">
      <p class="h-5 text-center mb-5" style="width: calc(100% / 7)" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap">
      <p class="h-5 text-center" style="width: calc(100% / 7)"
         v-for="i in getStartDay(currentYear, currentMonth)" :key="i"></p>
      <p class="h-5 text-center" style="width: calc(100% / 7)"
         v-for="i in daysInMonth(currentYear, currentMonth)" :key="i"
         :class="isToday(currentYear, currentMonth, i) && 'font-bold text-yellow-600'">{{ i }}</p>
    </section>
    <section class="flex justify-between">
      <button type="button" class="p-2 border rounded" @click="toPrevMonth">Prev</button>
      <button type="button" class="p-2 border rounded" @click="toNextMonth">Next</button>
    </section>
  </div>
</template>
<script>
const DECEMBER = 11;
const JANUARY = 0;

export default {
  data() {
    return {
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    }
  },
  methods: {
    getStartDay(year, month) {
      return new Date(year, month, 1).getDay();
    },
    getMonthLocalString(month) {
      const date = new Date();
      date.setMonth(month);
      return date.toLocaleString('default', {month: 'long'});
    },
    daysInMonth(year, month) {
      return new Date(year, month + 1, 0).getDate();
    },
    toPrevMonth() {
      this.currentMonth--;
      if (this.currentMonth < JANUARY) {
        this.currentMonth = DECEMBER;
        this.currentYear--;
      }
    },
    toNextMonth() {
      this.currentMonth++;
      if (this.currentMonth > DECEMBER) {
        this.currentMonth = JANUARY;
        this.currentYear++;
      }
    },
    isToday(year, month, date) {
      console.log(
          {year, month, date},
          {year: new Date().getFullYear(), month: new Date().getMonth(), date: new Date().getDate()}
      )
      const today = new Date();
      return today.getFullYear() === year
          && today.getMonth() === month
          && today.getDate() === date;
    }
  }
};
</script>