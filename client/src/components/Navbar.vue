<template>
  <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark w-100">
    <div>
      <router-link to="/">Pizza Pizza</router-link>
      <router-link to="/menu">Menu</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div>
      <router-link to="/admin">Admin Panel</router-link>
    </div>
  </nav>
</template>

<style>
#nav {
  background-color: rgba(0, 0, 0, 0.75) !important;
  display: flex;
  justify-content: space-between;
  padding: 0.75em 0;
}

#nav a {
  font-weight: bold;
  color: #555555;
  padding: 0.45em;
  text-decoration: none;
  font-size: 1.1em;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  nav {
    font-size: 1em;
  }
}
</style>