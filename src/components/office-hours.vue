<template>
  <div class="office-hours">
    <div class="schedule">Every other <span class="day">{{ hours.day }}</span></div>
    <div class="times"><span class="time">{{ hours.time.from }}</span> - <span class="time">{{ hours.time.to }}</span></div>
    <div class="next">Next: <span class="date">{{ hours.date }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'office-hours',
  props: ['hours'],
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.office-hours {
  width: 100%;
  min-height: 500px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    text-align: center;
  }

  .schedule {
    font-size: 4em;
  }

  .times {
    font-size: 5em;
  }

  .next {
    font-size: 3em;
  }

  span {
    color: #6B0307;
  }

  .day {
    font-weight: bold;
  }

  .time {
    font-weight: bold;
  }

  .date {
    font-weight: bold;
  }
}

</style>
