<template>
  <div :class="$style.example">
    <p :class="$style.text">这是一个带有 css Module 的样式</p>
  </div>
</template>

<script setup>

</script>

<style module>
.example {
  background-color: lightblue;
}
.text {
  color: red;
}
</style>