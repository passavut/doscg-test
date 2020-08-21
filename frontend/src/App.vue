<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">DOSCG</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Function 1 </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Function 2</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Direction</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Notification</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="cv()">CV</a>
          </li>
        </ul>
      </div>
    </nav>

    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  methods:{
    cv() {
    this.$router.push({ path:'/cv' })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
