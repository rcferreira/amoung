<template>
  <div class="card-job col-12 col-md-4 col-sm-6 col-lg-3 p-3">
    <div class="content">
      <div class="front">
        <div class="bg-logo">
          <img :src="job.logo" alt="" />
        </div>
        <div class="img-job">
          <img :src="job.logo" alt="" />
        </div>
        <h6 class="my-3 text-center fw-regular">{{ job.cargo }}</h6>
        <p class="badge bg-dark py-2 px-3 radius">{{ job.regime }}</p>
        <div class="location d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-location-dot me-3"></i>
          <p class="mb-0">{{ job.estado }} - {{ job.cidade }}</p>
        </div>
        <div class="d-flex flex-wrap justify-content-center mt-3 col-11 mx-auto">
          <p class="conhecimentos badge bg-light text-dark mb-2 py-2 p-2 radius me-2 border" v-for="con of job.conhecimentos" :key="con">{{ con }}</p>
        </div>
      </div>
      <div class="back p-4 text-start">
        <p>
          É necessario estar cursando ou ter cursado: 
          <strong>{{ job.formacao }}</strong>
        </p>
        <p>
          <strong>Obrigatorio: </strong>
          {{ job.requisitos }}
        </p>
        <p>
          <strong>Desejavel: </strong>
          <span v-for="con of job.conhecimentos" :key="con">{{ con }}, </span>
        </p>

        <p>
          Regime: <strong>{{ job.regime }}</strong>
          <span v-if="this.job?.regime == 'CLT'">
            - Jornada: {{ job.jornada }}h
          </span>
        </p>

        <div class="d-flex justify-content-start align-items-center">
          <i class="fa-solid fa-brazilian-real-sign"></i>
          <p class="mb-0 ms-2 fw-bold">
            <strong>Salário: </strong> {{ job.remuneracao }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobCard",
  props: {
    job: Object,
  },
};
</script>

<style scoped>
.card-job {
  position: relative;
  cursor: pointer;
  perspective: 900px;
  min-height: 430px;
  z-index: 1;
}
.card-job:hover .content {
  transition: transform 0.4s;
  transform: rotateY(180deg);
}
.content {
  transition: transform 0.4s;
  transition-timing-function: cubic-bezier(0.49, 0.44, 0.26, 1.27);
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
}
.front,
.back {
  overflow: hidden;
  position: absolute;
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
  background: white;
  border-radius: 15px;
  box-shadow: 0 51px 37px -37px #00000010;
}
.front .img-job {
  overflow: hidden;
  height: 80px;
  width: 80px;
  margin: 20px auto 20px auto;
  background: #f1f1f1;
  border-radius: 15px;
  box-shadow: 0px 16px 32px -10px #00000063;
}
.front .img-job img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: relative;
}
.bg-logo{
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 80px;
  overflow: hidden;
  width: 100%;
  border-radius: 0 0 8px 8px;
  filter: brightness(0.80);
}
.bg-logo img{
  height: 165%;
  width: 130%;
  object-fit: cover;
  position: relative;
  filter: blur(7px);
  top: -25px;
  left: -30px;
}
.back {
  height: 100%;
  transform: rotateY(180deg);
  background-color: #ffffff;
}
.location {
  width: fit-content;
  font-size: 14px;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding: 5px 10px;
  border-radius: 10px;
}
.location p {
  font-size: 0.9em;
  font-weight: 500;
  color: #00183d;
}
.badge{
  font-weight: 500 !important;
  border-radius: 8px !important;
}
</style>
