<template>
    <div class="input-group">
        <input type="text" class="form-control" readonly :value="modelValue.emoji" />
        <button class="btn btn-outline-secondary" type="button" ref="emojiBtn">
            {{ modelValue ? modelValue.emoji : "Select" }}
        </button>
    </div>
</template>

<script>
import { EmojiButton } from '@joeattardi/emoji-button'

export default {
    name: 'EmojiInput',
    props: {
        modelValue: {
            required: true
        },
        options: {
            default() {
                return {}
            }
        }
    },
    mounted() {
        const picker = new EmojiButton()
        const btn = this.$refs.emojiBtn

        picker.on('emoji', (emoji) => {
            this.$emit('update:modelValue', emoji)
        })

        btn.addEventListener('click', () => {
            picker.togglePicker(btn)
        })
    }
}
</script>
