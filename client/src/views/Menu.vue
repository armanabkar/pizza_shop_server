<template>
  <div class="foods-container">
    <h3 class="text-white">Pizzas:</h3>
    <div class="list-group" v-for="food in foods" :key="food.id">
      <span
        class="list-group-item flex-column align-items-start"
        v-if="food.type === 'pizza'"
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ food.name }}</h4>
          <small>{{ food.price }}$</small>
        </div>
        <p class="mb-1">
          {{ food.ingredients }}
        </p>
      </span>
    </div>
    <h3 class="text-white">Salads:</h3>
    <div class="list-group" v-for="food in foods" :key="food.id">
      <span
        class="list-group-item flex-column align-items-start"
        v-if="food.type === 'salad'"
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ food.name }}</h4>
          <small>{{ food.price }}$</small>
        </div>
        <p class="mb-1">
          {{ food.ingredients }}
        </p>
      </span>
    </div>
    <h3 class="text-white">Desserts:</h3>
    <div class="list-group" v-for="food in foods" :key="food.id">
      <span
        class="list-group-item flex-column align-items-start"
        v-if="food.type === 'dessert'"
      >
        <div class="d-flex w-100 justify-content-between">
          <h4 class="mb-1">{{ food.name }}</h4>
          <small>{{ food.price }}$</small>
        </div>
        <p class="mb-1">
          {{ food.ingredients }}
        </p>
      </span>
    </div>
    <h3 class="text-white">Beverages:</h3>
    <div class="list-group" v-for="food in foods" :key="food.id">
      <span
        class="list-group-item flex-column align-items-start"
        v-if="food.type === 'beverage'"
      >
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
h3 {
  text-align: left;
  margin: 0.5em;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.685);
}
.foods-container {
  width: 75%;
  margin: 0 auto 2em auto;
}
.list-group-item {
  text-align: left;
  background-color: rgba(0, 0, 0, 0.75) !important;
  color: white;
}
@media only screen and (max-width: 600px) {
  .foods-container {
    width: 90%;
  }
}
</style>