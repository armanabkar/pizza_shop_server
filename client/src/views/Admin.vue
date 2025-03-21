<template>
  <div class="admin">
    <p class="text-center description" style="margin: 0 0.5em; padding: 1em 0">
      <span class="text-white">
        The REST API for the pizza ordering application. Built with Node.js and
        Express.</span
      >
      <br />
      <span class="text-secondary"
        >*This server is using lowdb as a database and save the new data to a
        .json file, so new data won't persist.</span
      >
      <br />
      <a
        href="https://github.com/armanabkar/pizza_shop_server"
        class="text-info"
        >Source Code</a
      >
      |
      <a href="https://github.com/armanabkar/PizzaShop" class="text-info"
        >iOS application</a
      >
    </p>
    <h3>
      <span class="text-white">API Endpoints:</span>
    </h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" class="hidden">Method</th>
          <th scope="col">Endpoint</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="hidden">GET</td>
          <td>/api/v1/foods</td>
          <td>Get all foods</td>
        </tr>
        <tr>
          <td class="hidden">GET</td>
          <td>/api/v1/orders</td>
          <td>Get all orders</td>
        </tr>
        <tr>
          <td class="hidden">POST</td>
          <td>/api/v1/orders/add</td>
          <td>Add a new order</td>
        </tr>
        <tr>
          <td class="hidden">DELETE</td>
          <td>/api/v1/orders/delete/:id</td>
          <td>Delete order by id</td>
        </tr>
        <tr>
          <td class="hidden">GET</td>
          <td>/api/v1/reservations</td>
          <td>Get all reservations</td>
        </tr>
        <tr>
          <td class="hidden">POST</td>
          <td>/api/v1/reservations/add</td>
          <td>Add a new reservation</td>
        </tr>
        <tr>
          <td class="hidden">DELETE</td>
          <td>/api/v1/reservations/delete/:id</td>
          <td>Delete reservation by id</td>
        </tr>
        <tr>
          <td class="hidden">GET</td>
          <td>/api/v1/users</td>
          <td>Get all users</td>
        </tr>
        <tr>
          <td class="hidden">GET</td>
          <td>/api/v1/users/login</td>
          <td>Login</td>
        </tr>
        <tr>
          <td class="hidden">POST</td>
          <td>/api/v1/users/register</td>
          <td>Register</td>
        </tr>
        <tr>
          <td class="hidden">DELETE</td>
          <td>/api/v1/users/delete/:phone</td>
          <td>Delete user by phone number</td>
        </tr>
      </tbody>
    </table>
    <h3>
      <span class="text-white">Orders:</span>
      <div>
        <button
          type="button"
          class="btn btn-outline-warning refetch"
          v-on:click="newOrder"
        >
          New Order
        </button>
        <button
          type="button"
          class="btn btn-info refetch"
          v-on:click="refetchOrders"
          style="margin-left: 0.5em"
        >
          Refresh
        </button>
      </div>
    </h3>
    <div class="list-group" v-for="(order, index) in orders" :key="order.id">
      <span
        class="
          list-group-item list-group-item-action
          order
          flex-column
          align-items-start
          bg-dark
          text-white
        "
        ><div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ order.name }}</h5>
          <div>
            <small class="text-white">{{ order.totalPrice }}$</small> |
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteOrder(index)"
            >
              Delete Order
            </button>
          </div>
        </div>
        <ul class="mb-1" v-for="item in order.items" :key="item.id">
          <li class="text-info">{{ item }}</li>
        </ul>
        <small class="text-warning">{{ order.address }}</small
        ><br />
        <small class="text-warning">{{ order.phone }}</small
        ><br />
      </span>
    </div>
    <h3>
      <span class="text-white">Reservations:</span>
      <div>
        <button
          type="button"
          class="btn btn-outline-warning refetch"
          v-on:click="newReservation"
        >
          New Reservation
        </button>
        <button
          type="button"
          class="btn btn-info refetch"
          v-on:click="refetchReservations"
          style="margin-left: 0.5em"
        >
          Refresh
        </button>
      </div>
    </h3>
    <div
      class="list-group"
      v-for="(reservation, index) in reservations"
      :key="reservation.id"
    >
      <span
        class="
          list-group-item list-group-item-action
          order
          flex-column
          align-items-start
          bg-dark
          text-white
        "
        ><div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ reservation.name }}</h5>
          <div>
            <small class="text-white">{{ reservation.phone }}</small> |
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteReservation(index)"
            >
              Delete Reservation
            </button>
          </div>
        </div>
        <small class="text-warning">{{ reservation.tableSize }} Table</small
        ><br /><small class="text-warning">{{ reservation.time }}</small
        ><br />
        <small class="text-secondary">{{ reservation.request }}</small>
      </span>
    </div>
    <h3>
      <span class="text-white">Users:</span>
      <div>
        <button
          type="button"
          class="btn btn-outline-warning refetch"
          v-on:click="newUser"
        >
          New User
        </button>
        <button
          type="button"
          class="btn btn-info refetch"
          v-on:click="refetchUsers"
          style="margin-left: 0.5em"
        >
          Refresh
        </button>
      </div>
    </h3>
    <div class="list-group" v-for="(user, index) in users" :key="user.id">
      <span
        class="
          list-group-item list-group-item-action
          order
          flex-column
          align-items-start
          bg-dark
          text-white
        "
        ><div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ user.name }}</h5>
          <div>
            <small class="text-white">{{ user.phone }}</small> |
            <button
              type="button"
              class="btn btn-danger"
              v-on:click="deleteUser(index)"
            >
              Delete User
            </button>
          </div>
        </div>
        <p style="margin: 0" class="text-warning">{{ user.address }}</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return { orders: [], reservations: [], users: [] }
  },
  created: function () {
    fetch("https://pizzashop-server.herokuapp.com/api/v1/orders")
      .then((response) => response.json())
      .then((data) => (this.orders = data))
    fetch("https://pizzashop-server.herokuapp.com/api/v1/reservations")
      .then((response) => response.json())
      .then((data) => (this.reservations = data))
    fetch("https://pizzashop-server.herokuapp.com/api/v1/users")
      .then((response) => response.json())
      .then((data) => (this.users = data))
  },
  methods: {
    deleteOrder: function (index) {
      let id = this.orders[index].id
      if (confirm("Are you sure you want to delete this order?")) {
        fetch(
          "https://pizzashop-server.herokuapp.com/api/v1/orders/delete/" + id,
          { method: "DELETE" }
        ).then(this.orders.splice(index, 1))
      }
    },
    deleteReservation: function (index) {
      let id = this.reservations[index].id
      if (confirm("Are you sure you want to delete this reservation?")) {
        fetch(
          "https://pizzashop-server.herokuapp.com/api/v1/reservations/delete/" +
            id,
          {
            method: "DELETE",
          }
        ).then(this.reservations.splice(index, 1))
      }
    },
    deleteUser: function (index) {
      let id = this.users[index].phone
      if (confirm("Are you sure you want to delete this user?")) {
        fetch(
          "https://pizzashop-server.herokuapp.com/api/v1/users/delete/" + id,
          {
            method: "DELETE",
          }
        ).then(this.users.splice(index, 1))
      }
    },
    refetchOrders: function () {
      fetch("https://pizzashop-server.herokuapp.com/api/v1/orders")
        .then((response) => response.json())
        .then((data) => (this.orders = data))
    },
    refetchReservations: function () {
      fetch("https://pizzashop-server.herokuapp.com/api/v1/reservations")
        .then((response) => response.json())
        .then((data) => (this.reservations = data))
    },
    refetchUsers: function () {
      fetch("https://pizzashop-server.herokuapp.com/api/v1/users")
        .then((response) => response.json())
        .then((data) => (this.users = data))
    },
    newOrder: function () {},
    newReservation: function () {},
    newUser: function () {},
  },
}
</script>

<style scoped>
.admin {
  text-align: left;
  padding: 0 1.5em 2em 1.5em;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: rgba(0, 0, 0, 0.75) !important;
  border-top: 2px solid white;
}
.container-fluid {
  justify-content: center !important;
}
h3 {
  margin: 0.5em;
  display: flex;
  justify-content: space-between;
}
.btn {
  font-size: 0.7em;
  padding: 0.2em;
}
.refetch {
  font-size: 1rem;
}
.order {
  margin-bottom: 0.5em;
  background-color: #2c3034 !important;
}
.table,
.list-group-item {
  background-color: rgba(0, 0, 0, 0.75) !important;
  color: white;
}
@media only screen and (max-width: 600px) {
  .admin {
    padding: 0 0 2em 0;
  }
  .hidden {
    display: none;
  }
}
</style>