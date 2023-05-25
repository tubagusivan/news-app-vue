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
    <form class="flex flex-col w-1/3 gap-16 py-16 mx-auto my-0">
        <div class="mb-4 px-2 w-full">
            <label class="block mb-1 text-sm" for="input1">Title:</label>
            <input 
                v-model="detailData.title"
                id="title"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="text" autofocus placeholder="Title..." />

            <label class="block mb-1 text-sm" for="input1">Author:</label>
            <input id="author"
                v-model="detailData.author"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="text" autofocus placeholder="Author..." />

            <label class="block mb-1 text-sm" for="input1">Date:</label>
            <input id="date"
                :value="new Date().toISOString().substring(0, 10)"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="date" autofocus placeholder="Date..." />

            <label class="block mb-1 text-sm" for="textarea1">Content:</label>
            <textarea id="textarea1"
                v-model="detailData.content"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                rows="5" placeholder="Textarea placeholder...">
            </textarea>
            
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <button class="rounded-2xl bg-blue-400 px-4 py-3 font-bold text-white">Save</button>
                <button class="rounded-2xl bg-blue-400 px-4 py-3 font-bold text-white">Cancel</button>
            </div>
        </div>
    </form>
</template>