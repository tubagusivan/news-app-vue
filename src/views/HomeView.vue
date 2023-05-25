<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main'
import CardNews from '../components/CardNews.vue';

export default {
  created() {
    this.fetchNews();
  },
  methods: {
    ...mapActions(useMainStore, ["fetchNews"])
  },
  computed: {
    ...mapState(useMainStore, ["dataNews"])
  },
  components: { CardNews }
}
</script>

<template>
  <!-- <pre>{{ dataNews }}</pre> -->
  <div v-if="dataNews.length === 0" className="flex justify-center items-center mt-80">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Processing...</span>
    </div>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
    <CardNews v-for="(data) in dataNews" :key="data.key" :data="data" />
  </div>
</template>