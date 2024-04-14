<template>
    <div class="text-style">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
    </div>
</template>

<script>
export default {
    name: 'text'
};
</script>

<style scoped>
@font-face {
    font-family: 'JetBrains Mono';
    src: url('~/assets/fonts/JetBrainsMonoNL-Thin.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

.text-style {
    color: white;
    font-size: 40px;
    font-family: 'JetBrains Mono', monospace;
}
</style>