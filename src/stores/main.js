import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    dataNews: [],
    detailData: [],
  }),

  actions: {
    async fetchNews() {
      try {
        let url = 'https://the-lazy-media-api.vercel.app/api/tech?page=1'
        const { data } = await axios({
          method: 'GET',
          url: url
        })
        this.dataNews = data
        console.log(data, '<=== ini data news');
      } catch (error) {
        console.log(error);
      }
    },

    async fetchDetailNews(slug) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://the-lazy-media-api.vercel.app/api/detail/${slug}`
        })
        this.detailData = data.results
        console.log(data.results, '<== ini detail');
      } catch (error) {
        console.log(error);
      }
    },

  },
})
