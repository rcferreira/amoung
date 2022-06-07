<template>
  <div class="jobs" :style="{ backgroundColor: color }">
    <div class="container">

      <div class="search my-5 col-12 col-xm-10 col-md-8 col-lg-6 mx-auto">
        <h5 class="text-start mb-2">Qual vaga tem mais a sua cara?</h5>
        <div class="d-flex">
          <input type="search" v-model="search" class="search-box me-3" placeholder="Desenvolvedor Front-end"/>
          <button class="btn btn-dark-blue radius" @click="searchJobs()">Buscar</button>
        </div>
      </div>

      <div class="col">
        <h5>Filtre por área</h5>
      </div>

      <div class="row">
        <JobCardVue v-for="(job, index) in jobs" :key="index" :job="job" />
      </div>
    </div>
  </div>
</template>

<script>
import JobCardVue from "./JobCard.vue";
import axios from "axios";

export default {
  name: "JobPanel",
  data() {
    return {
      search: "",
      jobs: [],
    };
  },
  props: {
    color: String,
    msg: String,
  },
  components: {
    JobCardVue,
  },
  methods: {
    async searchJobs(filter = "") {
      this.search ? (filter = this.search) : (filter = "");
      try {
        let { data } = await axios.get(`http://localhost:3000/jobs/${filter}`);
        this.jobs = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.searchJobs();
  },
};
</script>

<style scoped>
.jobs {
  position: relative;
}
.search-box {
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 15px;
  width: 100%;
  transition: 300ms;
  box-shadow: 0 51px 37px -37px #0000001f;
}
.search-box:focus {
  box-shadow: 0 30px 57px -17px #00000059;
}
.btn-dark-blue{
  background-color: #00183d;
  color: #f1f1f1;
  width: 150px;
}
</style>
