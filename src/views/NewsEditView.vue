<script>
import { mapActions, mapState } from 'pinia';
import { useMainStore } from '../stores/main';
import ContentEditor from '../components/ContentEditor.vue';
import Swal from "sweetalert2";

export default {
    data() {
        return {}
    },
    created() {
        const slug = this.$route.params.slug;
        this.fetchDetailNews(slug);
    },
    methods: {
        ...mapActions(useMainStore, ["fetchDetailNews"]),
        handleCancel() {
            this.$router.push({ name: 'home' })
        },
        alertDisplay(e) {
            e.preventDefault()
            // Use sweetalert2
            Swal.fire({
                title: "Error!",
                text: "Warning!! Have not access from API to edit this article.",
                icon: "error",
                confirmButtonText: "Close"
            });
        },
    },
    computed: {
        ...mapState(useMainStore, ["detailData"])
    },
    components: { ContentEditor }
}
</script>

<template>
    <!-- <pre>{{ detailData }}</pre> -->
    <form class="flex flex-col w-1/3 gap-16 py-16 mx-auto my-0">
        <div class="mb-4 px-2 w-full">
            <label class="block mb-1 text-sm" for="input1">Title:</label>
            <input v-model="detailData.title" id="title"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="text" autofocus placeholder="Title..." />

            <label class="block mb-1 text-sm" for="input1">Author:</label>
            <input id="author" v-model="detailData.author"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="text" autofocus placeholder="Author..." />

            <label class="block mb-1 text-sm" for="input1">Date:</label>
            <input id="date" :value="new Date().toISOString().substring(0, 10)"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                type="date" autofocus placeholder="Date..." />

            <label class="block mb-1 text-sm" for="textarea1">Content:</label>
            <!-- <textarea id="textarea1"
                v-model="detailData.content"
                class="w-full border mb-4 px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                rows="5" placeholder="Textarea placeholder...">
            </textarea> -->
            <div class="mb-4">
                <ContentEditor v-model="detailData.content[4]" />
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <button class="inline-flex rounded-2xl bg-blue-400 px-4 py-3 font-bold text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                            clip-rule="evenodd" />
                    </svg>
                    <span>Refresh...</span>
                </button>
                <button @click="alertDisplay" class="rounded-2xl bg-blue-400 px-4 py-3 font-bold text-white">Save</button>
                <button @click="handleCancel" class="rounded-2xl bg-blue-400 px-4 py-3 font-bold text-white">Cancel</button>
            </div>
        </div>
    </form>
</template>