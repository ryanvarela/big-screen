<template>
  <div style="height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease;
}

.dark-theme {
  background-color: #121212;
  color: white;
}

button {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #fff;
  color: #121212;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #f1f1f1;
}
</style>
