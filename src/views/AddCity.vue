<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Add City</h2>
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              :class="{ 'is-invalid': error.name }"
              aria-describedby="emailHelp"
              placeholder="City"
              v-model="cities.name"
            />
            <div v-if="error.name" class="invalid-feedback">
              {{ error.name }}
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              :class="{ 'is-invalid': error.county }"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="County"
              v-model="cities.county"
            />
            <div v-if="error.name" class="invalid-feedback">
              {{ error.county }}
            </div>
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              :class="{ 'is-invalid': error.country }"
              placeholder="Country"
              v-model="cities.country"
            />
            <div v-if="error.country" class="invalid-feedback">
              {{ error.country }}
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { addDoc } from "firebase/firestore";
import citiesColRef from "../firebase";
export default {
  data() {
    return {
      cities: {
        name: null,
        county: null,
        country: null,
      },
      error: {
        name: null,
        county: null,
        country: null,
      },
    };
  },
  methods: {
    validate() {
      let isValid = true;
      this.error = {
        name: null,
        county: null,
        country: null,
      };
      if (!this.cities.name) {
        this.error.name = "Name is require";
        isValid = false;
      }
      if (!this.cities.county) {
        this.error.county = "County is require";
        isValid = false;
      }
      if (!this.cities.country) {
        this.error.country = "Country is require";
        isValid = false;
      }
      return isValid;
    },

    onSubmit() {
      const formIsValid = this.validate();
      if (formIsValid) {
        this.createCity();
      }
    },

    async createCity() {
      const addedDoc = await addDoc(citiesColRef, this.$data.cities);
      alert("document create successfully");

      this.$router.push("/");
    },
  },
};
</script>
