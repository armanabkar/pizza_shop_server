<template>
  <form class="form" @submit.prevent>
    <h3>New Reservation</h3>
    <div class="mb-3">
      <label for="nameInput" class="form-label">What is your name?</label>
      <input class="form-control" id="nameInput" v-model="name" />
    </div>
    <div class="mb-3">
      <label for="phoneInput" class="form-label"
        >What is your phone number?</label
      >
      <input class="form-control" id="phoneInput" v-model="phone" />
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label"
        >What table size do you want?</label
      >
      <select id="disabledSelect" class="form-select" v-model="tableSize">
        <option disabled value="">Please select a size</option>
        <option value="Small">Small | 2 people</option>
        <option value="Medium">Medium | 4 people</option>
        <option value="Large">Large | +6 people</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="timeInput" class="form-label"
        >When do you want to come?</label
      >
      <input
        placeholder="example: 20:30pm Monday 17 Sep 2021"
        class="form-control"
        id="timeInput"
        v-model="time"
      />
    </div>
    <div class="mb-3">
      <label for="requestInput" class="form-label"
        >Any other requests you have?</label
      >
      <input class="form-control" id="requestInput" v-model="request" />
    </div>
    <button
      @click="submitReservation()"
      type="submit"
      class="btn btn-light mt-2"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  data: function () {
    return { name: "", phone: "", time: "", request: "", tableSize: "" }
  },
  methods: {
    submitReservation: async function () {
      if (
        this.name &&
        this.phone &&
        this.time &&
        this.request &&
        this.tableSize
      ) {
        const rawResponse = await fetch(
          "https://pizzashop-server.herokuapp.com/api/v1/reservations/add",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: this.name,
              phone: this.phone,
              tableSize: this.tableSize,
              time: this.time,
              request: this.request,
            }),
          }
        )
        const statusCode = await rawResponse.status
        if (statusCode == 200) {
          this.name = ""
          this.phone = ""
          this.time = ""
          this.request = ""
          this.tableSize = ""
        }
      }
    },
  },
}
</script>

<style scoped>
.form {
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  border-radius: 8px;
  text-align: left;
  width: 70%;
  padding: 1em;
  margin: 1.5em auto;
}

@media only screen and (max-width: 600px) {
  .form {
    width: 90%;
  }
}
</style>