<template>
    <form action="">
        <slot>
            No form to render
        </slot>
        <div class="help">
            <slot name="help"></slot>
        </div>
        <div class="fields">
            <slot name="fields"></slot>
        </div>
        <div class="buttons">
            <slot name="buttons"></slot>
        </div>
        <slot></slot>
    </form>
</template>