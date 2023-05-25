<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  created() {
    const slug = this.$route.params.slug
    this.fetchDetailNews(slug)
  },
  methods: {
    ...mapActions(useMainStore, ['fetchDetailNews']),
  },
  computed: {
    ...mapState(useMainStore, ['detailData'])
  }

}
</script>

<template>
  <!-- <pre>{{ detailData }}</pre> -->
  <!-- <div className="flex justify-center items-center mt-80">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Processing...</span>
    </div>
  </div> -->
  <div class="mt-6 flex flex-col items-center rounded-xl bg-green-50 p-4 text-slate-800 shadow-sm dark:bg-slate-900 dark:text-slate-400 md:p-12">
    <div class="inline-flex items-center">
      <svg class="mr-2 h-6 w-6 fill-current text-teal-900 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512">
        <path
          d="M447.1 0h-384c-35.25 0-64 28.75-64 63.1v287.1c0 35.25 28.75 63.1 64 63.1h96v83.1c0 9.838 11.03 15.55 19.12 9.7l124.9-93.7h144c35.25 0 64-28.75 64-63.1V63.1C511.1 28.75 483.2 0 447.1 0zM480 352c0 17.6-14.4 32-32 32h-144.1c-6.928 0-13.67 2.248-19.21 6.406L192 460v-60c0-8.838-7.164-16-16-16H64c-17.6 0-32-14.4-32-32V64c0-17.6 14.4-32 32-32h384c17.6 0 32 14.4 32 32V352zM432 224h-160C263.2 224 256 231.2 256 240S263.2 256 272 256h160C440.8 256 448 248.8 448 240S440.8 224 432 224zM224 240C224 231.2 216.8 224 208 224h-128C71.16 224 64 231.2 64 240S71.16 256 80 256h128C216.8 256 224 248.8 224 240zM144 288h-32C103.2 288 96 295.2 96 304S103.2 320 112 320h32C152.8 320 160 312.8 160 304S152.8 288 144 288zM400 288h-32C359.2 288 352 295.2 352 304s7.156 16 16 16h32c8.844 0 16-7.156 16-16S408.8 288 400 288zM304 288h-96C199.2 288 192 295.2 192 304S199.2 320 208 320h96c8.844 0 16-7.156 16-16S312.8 288 304 288z" />
      </svg>
      <h2 class="text-teal-900 dark:text-teal-400 text-xl font-semibold">{{ detailData.title }}</h2>
    </div>
    <div class="overflow-hidden mt-10">
      <img :src="detailData.content[0]" class="w-full h-auto" alt="Sample Cover">
    </div>
    <p v-for="data in detailData.content" class="mt-6 mb-6 max-w-2xl text-justify text-slate-800 dark:text-teal-400">
      {{ data }}
    </p>
    <button class="rounded-2xl bg-teal-400 px-4 py-3 font-bold text-white">Start Discussion</button>
  </div>
</template>
