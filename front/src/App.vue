<template>
<div class="position-relative">
  <img class="pattern-bg right" src="./assets/pattern-bg1.png" alt="background pattern">
  <img class="pattern-bg left" src="./assets/pattern-bg2.png" alt="background pattern">
  <div class="container">
    <div class="d-flex">
      <h1 class="title">Encontre a vaga dos seus sonhos</h1>
      <div class="circle">
        <img src="./assets/searching-jobs.png" alt="">
      </div>
    </div>
  </div>
  <JobPanelVue color="transparent"></JobPanelVue>
  <div class="money">
    <img src="./assets/money.png" alt="">
  </div>
  <div class="rocket">
    <img src="./assets/rocket.png" alt="">
  </div>
</div>
</template>

<script>
import JobPanelVue from './components/JobPanel.vue'
export default {
  name: 'App',
  components: {
    JobPanelVue
  }
}
</script>

<style>
.title{
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  text-align: start;
  font-size: 4em !important;
  font-size: 2.5rem;
  color: #00183d;
  margin-top: 50px;
  width: 528px;
  margin: 50px auto;
  letter-spacing: -4px !important;
} 
.pattern-bg{
  position: absolute;
  width: 950px;
  /* opacity: 0.8; */
}
.pattern-bg.left{
  left: -484px;
  top: -152px;
  transform: rotate(298deg);
}
.pattern-bg.right{
  top: -100px;
  right: -50px;
}

.circle{
  position: relative;
  top: -18px;
  right: 169px;
  background: #00183d;
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.circle img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
#app {
  font-family: Poppins !important;
  letter-spacing: -0.4px;
  font-optical-sizing: initial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
  overflow-x: hidden;
  overflow-y: clip;
  min-height: 100vh;
}
.radius{
    border-radius: 10px;
}

.money{
  position: absolute;
  top: 100px;
  left: -50px;
  background: #00183d;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.money img{
  position: relative; 
  right: -50px;
  top: -10px;
  width: 250px;
}

.rocket{
  position: absolute;
  top: 650px;
  right: -20px;
  background: #00183d;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.rocket img{
  position: relative; 
  left: -40px;
  top: -60px;
  width: 250px;
}

.rocket, .circle, .money{
  z-index: 0;
}

body{
  overflow-x: hidden;
}

::selection{
  background: #00183d;
  color: white;
}

img{
  user-select: none;
}

@media screen and (max-width: 1280px){
  .money, .left{
    opacity: 0;
  }  
  .circle{
    right: auto;
    left: -50px;
  }
  .pattern-bg.right{
    right: -400px;
  }
}

@media screen and (max-width: 768px) {
  .title{
    font-size: 12vw !important;
  }
  .circle{
    display: none;
  }
  .pattern-bg.right{
    top: -150px;
    right: -550px;
  }
}
</style>
