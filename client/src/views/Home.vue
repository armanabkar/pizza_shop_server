<template>
  <div class="home">
    <div class="card text-white">
      <img
        class="card-img-top"
        src="../assets/home-image.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Pizza Pizza</h5>
        <p class="card-text">
          Laborum exercitation cupidatat veniam sunt nulla. Consectetur deserunt
          elit duis in commodo labore amet. Quis minim proident in culpa. Aliqua
          nulla veniam exercitation do dolore eiusmod pariatur labore consequat
          excepteur amet tempor dolor. Ad duis elit culpa non duis labore nisi
          eiusmod qui do sunt laborum ut eu. Consequat aliquip ut ut elit dolor
          aliqua amet cupidatat ullamco. Fugiat quis nulla officia irure aliquip
          ex incididunt sint voluptate.
        </p>
      </div>
      <div class="card-body links" style="padding-top: 0">
        <router-link to="/menu">
          <a href="#" class="btn btn-outline-light">Menu</a>
        </router-link>
        <router-link to="/about">
          <a href="#" class="btn btn-outline-light">More About Us</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.card {
  width: 55%;
  margin: 2.5em auto 0 auto;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75) !important;
  border: none;
  border-radius: 10px;
}
.card-title {
  font-weight: bold;
  letter-spacing: 0.05em;
  padding: 0.25em 0;
}
.btn {
  margin: 0 0.8em;
}
@media only screen and (max-width: 600px) {
  .card {
    width: 80%;
  }
}
</style>