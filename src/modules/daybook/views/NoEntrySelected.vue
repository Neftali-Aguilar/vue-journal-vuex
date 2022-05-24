<template>
  <div class="d-flex align-items-center align-content-center w-100">
    <h1>No hay entrada seleccionada</h1>
  </div>
  <Fab icon="fa-plus"/>
</template>

<script>
import {defineAsyncComponent} from "vue";
export default {
  name: "NoEntrySelected",
  components: {
    Fab: defineAsyncComponent( () => import('@/modules/daybook/components/Fab') )
  }
}
</script>

<style lang="scss" scoped>
div{
  height: 100%;
}
</style>
