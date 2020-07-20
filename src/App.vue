<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
	
export default {
  name: 'App'
}
</script>

<style>
	@import url("./assets/css/base.css");
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
}
body{
	margin: 0;
}
.uementUI{
	background-color: #fff !important;
	border-color:  0 !important;
}
.pchtml{
	display: block;
}
.waphtml{
	display: none;
}
@media screen and (max-width: 720px) {
	.hello{
	    background: #fff !important;
	}
    .pchtml{
		display: none;
	}
	.waphtml{
		display: block;
	}
}
</style>
