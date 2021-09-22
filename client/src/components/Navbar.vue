<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Pizza Pizza</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/menu" active-class="active"
            >Menu</router-link
          >
          <router-link class="nav-link" to="/reservation" active-class="active"
            >Reservation</router-link
          >
          <router-link class="nav-link" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="nav-link" active-class="active" to="/admin"
            >Admin Panel</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.navbar {
  background-color: rgba(0, 0, 0, 0.75) !important;
  padding-left: 0.7em !important;
  padding-right: 0.7em !important;
}
.nav-link,
.navbar-brand {
  font-weight: 600;
}
</style>