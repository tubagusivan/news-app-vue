<script setup>
import { ref, watch } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { component as CKEditor } from '@ckeditor/ckeditor5-vue';

const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const editorData = ref(props.modelValue || '')
const editorConfig = ({
    toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    }
})

watch(editorData, () => {
    emit('update:modelValue', editorData.value)
})
</script>

<template>
    <div>
        <CKEditor :editor="ClassicEditor" v-model="editorData" :config="editorConfig" />
    </div>
</template>

<style>
.ck-editor__editable {
    min-height: 260px;
}
</style>