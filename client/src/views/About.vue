<template>
  <div class="about">
    <p>
      Deserunt Lorem commodo dolore anim labore aute exercitation. Ea tempor
      anim dolore consequat nulla nisi laboris do fugiat consectetur et
      voluptate consectetur velit. Lorem irure incididunt aliqua officia irure
      velit cupidatat proident quis sit culpa tempor velit ut. Enim commodo
      Lorem do sit. Deserunt ut id voluptate dolore nostrud minim labore dolor
      ut do sit. Quis irure eiusmod sit aliqua velit aute mollit qui velit.
    </p>
    <p>
      Deserunt Lorem commodo dolore anim labore aute exercitation. Ea tempor
      anim dolore consequat nulla nisi laboris do fugiat consectetur et
      voluptate consectetur velit. Lorem irure incididunt aliqua officia irure
      velit cupidatat proident quis sit culpa tempor velit ut. Enim commodo
      Lorem do sit. Deserunt ut id voluptate dolore nostrud minim labore dolor
      ut do sit. Quis irure eiusmod sit aliqua velit aute mollit qui velit.
    </p>
    <p></p>
    <p>(805) 964-5065</p>
    <p>4668 Vintage Ranch Ln, Santa Barbara, California(CA), 93110</p>
    <img src="../assets/location.png" alt="Pizza Pizza" class="map" />
    <a href="https://github.com/armanabkar/pizzashop" class="store">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
        alt="PizzaShop"
      />
    </a>
    <a href="https://github.com/armanabkar/pizzashop" class="store">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
        alt="PizzaShop"
      />
    </a>
  </div>
</template>

<style scoped>
img {
  width: 10em;
  margin: 0 0.45em;
}
.map {
  display: block;
  width: 25%;
  margin: 0 auto 1em auto;
  border-radius: 8px;
}
.about {
  margin: 1.5em auto;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  width: 90%;
  border-radius: 8px;
}
@media only screen and (max-width: 600px) {
  .map {
    width: 100%;
  }
  img {
    width: 45%;
  }
}
</style>