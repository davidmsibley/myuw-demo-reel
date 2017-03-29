<template>
  <div class="app-header">
    <a href="https://my.wisc.edu" aria-label="go to my u w">
      <img src="../assets/img/uw-crest.png" alt="uw crest link">
      <h1>MyUW <span>Developer</span></h1>
    </a>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.app-header {
  width: 100%;
  height: 56px;
  background: #c5050c;
  padding-right: 16px;

  a {
    display: flex;
    text-decoration: none;

    img {
      height: 56px;
      margin-right: 16px;
    }

    h1 {
      display: inline-block;
      color: #fff;
      margin: 0;
      line-height: 56px;
      font-size: 20px;
      font-weight: 500;

      span {
        font-weight: 400;
      }
    }
  }
}

</style>
