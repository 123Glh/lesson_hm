<template>
  <div>
    <p>Mouse X: {{ x }}</p>
    <p>Mouse Y: {{ y }}</p>
  </div>
</template>

<script setup>
import { useMouse,useMemo } from '../hooks/useMouse.js';
import Hook from '../hooks/useMouse.js';
const {x,y} = useMouse();
useMemo()
console.log(Hook);

</script>