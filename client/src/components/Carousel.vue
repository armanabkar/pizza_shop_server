<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <picture>
          <source srcset="../assets/home-image-1.webp" type="image/webp" />
          <img
            src="../assets/home-image-1.jpg"
            class="d-block w-100"
            alt="..."
          />
        </picture>
        <div class="carousel-caption d-none d-md-block">
          <h4>Ipsum laborum</h4>
          <p>Laborum velit in Lorem laboris proident eiusmod do mollit.</p>
        </div>
      </div>
      <div class="carousel-item">
        <picture>
          <source srcset="../assets/home-image-2.webp" type="image/webp" />
          <img
            src="../assets/home-image-2.jpg"
            class="d-block w-100"
            alt="..."
          />
        </picture>
        <div class="carousel-caption d-none d-md-block">
          <h4>Amet irure excepteur</h4>
          <p>
            Ex labore amet exercitation cupidatat commodo consectetur eiusmo.
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <picture>
          <source srcset="../assets/home-image-3.webp" type="image/webp" />
          <img
            src="../assets/home-image-3.jpg"
            class="d-block w-100"
            alt="..."
          />
        </picture>
        <div class="carousel-caption d-none d-md-block">
          <div class="caption">
            <h4>Laborum velit in</h4>
            <p>Ipsum laborum elit amet irure excepteur.</p>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  border-radius: 10px 10px 0 0;
}
h4,
p {
  text-shadow: 2px 2px 4px black;
}
</style>