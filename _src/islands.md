---
title: Islands
layout: base.njk
permalink: islands.html
---

# Islands

## A petite-vue counter

<is-land on:visible>

<div id="counter" v-scope="{ count: 0 }">
  <p>Count: <span v-text="count"></span></p>
  <button @click="count++">Add one</button>
</div>

<template data-island>
<script type="module">
  import { createApp } from './js/petite-vue.js'
  createApp().mount('#counter')
</script>
</template>

</is-land>

## Reusable counters

<is-land on:visible>

<div id="counters">
  <div v-scope="Counter({ initialCount: 5 })">
    <p>Count: <span v-text="count"></span></p>
    <button @click="increment">+</button>
  </div>
  <div v-scope="Counter({ initialCount: 20 })">
    <p>Count: <span v-text="count"></span></p>
    <button @click="increment">+</button>
  </div>
</div>

<template data-island>
<script type="module">
  import { createApp } from './js/petite-vue.js'
  function Counter(props) {
    return {
      count: props.initialCount,
      increment() { this.count++ }
    }
  }
  createApp({ Counter }).mount('#counters')
</script>
</template>

</is-land>

## Three.js scene

<is-land on:visible>
<template data-island>
<div id="scene-container"></div>
<script type="module" src="js/threeScene.js"></script>
</template>
</is-land>
