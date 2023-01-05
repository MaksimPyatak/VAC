<template>   
   <div class = "main">
      Main Layout
   <router-view/>
      <br>
   <br>
   <router-link to="/">Home</router-link>
   <br>
      <router-link to="/aboutVAc">About</router-link>
   <br>
      <router-link to="/404">404</router-link>
   </div>
</template>

<script>

</script>

<style scoped>
.main {
   width: 100%;
   height: 100%;
   background: rgb(0, 255, 247);
}
</style>