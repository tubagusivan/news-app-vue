<script>
export default {
    props: ['data']   
}
</script>

<template>
    <div class="p-6 bg-white shadow border rounded-xl">
        <a href="#" class="group">
            <div class="overflow-hidden">
                <img :src="data.thumb"
                    class="w-full h-auto hover:scale-105 transition transition-all duration-200 ease-in-out"
                    alt="Sample Cover">
            </div>

            <h3 class="mt-6 leading-normal text-gray-800 group-hover:text-purple-400 font-semibold text-2xl lg:text-4xl line-clamp-3 transition translation-all duration-200 ease-in-out"
                title="Lorem Ipsum is simply dummy text of the printing">
                {{data.title}}
            </h3>
        </a>

        <div class="mt-6">
            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <time class="text-gray-600" datetime="2021-11-06T08:29:56+00:00">
                    {{data.time}}
                </time>

                <a href="#" class="inline-block text-gray-600 hover:text-purple-400">
                    10 Comments
                </a>

                <a href="#" class="flex items-center">
                    <div class="h-6 w-6 rounded-full bg-purple-400"></div>

                    <span class="ml-2 text-gray-600">
                        {{data.author}}
                    </span>
                </a>
            </div>

            <p class="mt-6 leading-normal line-clamp-3 text-lg text-gray-600">
                {{data.desc}}
            </p>
        </div>

        <a href="#" class="inline-block mt-6 text-purple-500 hover:text-purple-400">
            Read More
        </a>
    </div>
</template>