<template>
  <div class="office-hours">
    <h2>Office Hours</h2>
    <div class="container">
      <div class="schedule">Every other <span class="day">{{ config[index].day }}</span></div>
      <div class="times"><span class="time">{{ config[index].time.from }}</span> - <span class="time">{{ config[0].time.to }}</span></div>
      <div class="next">Next: <span class="date">{{ config[index].date }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'office-hours',
  props: ['index'],
  data () {
    return {
      config : [
        {
          day: "Monday",
          time: {
            "from": "9am",
            "to": "3pm"
          },
          date: "April 17th"
        },
        {
          day: "Friday",
          time: {
            "from": "9am",
            "to": "1:30pm"
          },
          date: "April 14th"
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
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
