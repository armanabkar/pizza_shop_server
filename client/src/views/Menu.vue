<template>
  <div class="foods-container">
    <div class="list-group border-bottom" v-for="food in foods" :key="food.id">
      <span class="list-group-item flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ food.name }}</h4>
          <small>{{ food.price }}$</small>
        </div>
        <p class="mb-1">
          {{ food.ingredients }}
        </p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return { foods: [] }
  },
  created: function () {
    fetch("https://pizzashop-server.herokuapp.com/api/v1/foods")
      .then((response) => response.json())
      .then((data) => (this.foods = data))
  },
}
</script>

<style>
.foods-container {
  margin: 1em;
}
.list-group-item {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.75) !important;
  color: white;
}
</style>