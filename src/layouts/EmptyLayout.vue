<template>
   <div class = "empty">
      Empty Layout
      <br>
   <router-view/>
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

<style >/*scoped*/
.empty {
   width: 100%;
   height: 100%;
   background: rgb(183, 151, 243);
}
</style>