<template>
  <div id="app">
    <div class="scrollPosition">{{ offset }}</div>
  </div>
</template>

<script>
import mixin from '@/mixin'

export default {
  name: 'App',
  mixins: [mixin],
  data() {
    return {
      offset: 0
    }
  },
  mounted() {
    console.log('App mounted')
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 3000px;
  position: relative;
}

.scrollPosition {
  position: fixed;
  left: 10px;
  right: 10px;
}
</style>
