<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Update City</h2>
        <form @submit.prevent="updateCity">
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              aria-describedby="emailHelp"
              placeholder="City"
              v-model="cityInfo.name"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              v-model="cityInfo.county"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Country"
              v-model="cityInfo.country"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import citiesColRef from "../firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      selectedCity: {},
      cityId: null,
      docRef: null,
      cityInfo: {
        name: null,
        country: null,
        county: null,
      },
    };
  },
  methods: {
    async getCity() {
      this.docRef = doc(citiesColRef, this.cityId);
      let city = await getDoc(this.docRef);
      console.log(city.data());
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
    },
    async updateCity() {
      await setDoc(this.docRef, this.cityInfo);
      alert(`city ${this.cityId}, ${this.cityInfo}`);
      this.$router.push("/");
    },
  },
  created() {
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  },
};
</script>