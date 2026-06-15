<template>
  <a href="../../" class="poddeck-back" title="返回 PodDeck">
    ← PodDeck
  </a>
</template>

<style scoped>
.poddeck-back {
  position: fixed;
  bottom: 14px;
  left: 14px;
  z-index: 100;
  font-size: 11px;
  color: rgba(30, 30, 30, 0.55);
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
}
.poddeck-back:hover {
  color: rgba(30, 30, 30, 0.95);
  background: white;
}
</style>
