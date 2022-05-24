<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
      <span class="mx-1 fs-3">15</span>
      <span class="mx-1 fs-4 fs-light">2021, jueves</span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" rows="10"
              placeholder="¿Que sucedio hoy?"
    ></textarea>
    <Fab icon="fa-save"/>
    <img
        src="https://images.pexels.com/photos/10522082/pexels-photo-10522082.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        class="img-thumbnail"
    >
  </div>
</template>

<script>

import {defineAsyncComponent} from 'vue';

export default {
  components: {
    Fab: defineAsyncComponent(() => import('@/modules/daybook/components/Fab'))
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.6);
}
</style>
