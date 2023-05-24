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
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
    <CardNews v-for="(data) in dataNews" :key="data.key" :data="data"/>
  </div>
</template>