<template>
  <div>
    <component :is="panel"></component>
  </div>
</template>

<script>
import httpVueLoader from '../../utils/httpVueLoader';
export default {
  data () {
    return {
      panel: null
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.panel = httpVueLoader('/devices/version1.0.0/panel.vue');
    }
  }
};

</script>
<style lang='scss' scoped>
</style>
