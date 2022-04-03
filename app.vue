<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
body{
  margin: 0;
}
input{
  padding-left: .5rem;
  padding-right: .5rem;

  &:focus{
    outline: none;
  }
}
.cursor-pointer{
  cursor: pointer;
}
</style>