<template>
  <div id="app">
     <router-view></router-view>
     
  </div>
</template>

<script>
	
export default {
  data () {
    return {
        
     }
  },
  methods:{
  	
  }
  }
</script>

<style>
*{	
	padding: 0;
	margin: 0;
}
html{
	font-size: 52.0833px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .22rem;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0;
}

a {
  color: #42b983;
}
.flex{
	display: flex;
}
</style>
