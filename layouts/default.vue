<template>
  <div>
    <Header />
    <div class="container">
      <slot />
    </div>
    <Footer />
  </div>
</template>


<style lang="scss" scoped>
.container{
  width: 1024px;
  margin: auto;
}
</style>