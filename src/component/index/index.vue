<template>
	<div>
		<router-view></router-view>
		<ul>
			<li v-for="(v,i) in list">
				<router-link :to="v.address">				
					<div class="pic" :class="v.pic"></div>
					<span>{{v.title}}</span>
				</router-link>
			</li>
		
		</ul>
	</div>	
</template>

<script>
	export default{

		mounted(){
			var a=this
			this.$http.get('./data/index.json')
			  .then(function (response) {
//			  	console.log(reponse)
			    a.list=response.data.Product	
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });  
		},
		data(){
		  return{
		  		seen:0,
				list:[]
			}	
		},
		methods:{
			change(a){
				this.seen=a				
			}
		}
	}
</script>

<style scoped="">
	ul{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		background: white;

	}
	ul li{
		width: 25%;
		display: flex;
	    justify-content: center;
	    align-items: center;	
	}
	a{
		text-decoration: none;
		color: #999;
		display: block;
	}
	.pic{
		display: block;	
		margin: 0 auto .1rem;
		width: .4rem;
		height: .4rem;	
		background-size: cover;
	}
	.pic1{
		background-image:url(../../../img/home.png) ;		
	}
	.pic2{
		background-image:url(../../../img/classify.png) ;
	}
	.pic3{
		background-image:url(../../../img/shopcar.png) ;
	}
	.pic4{
		background-image:url(../../../img/my.png) ;
	}
	.router-link-active .pic1on{
		background-image: url(../../../img/homeon.png);
	}
	.router-link-active .pic2on{
		background-image: url(../../../img/classifyon.png);
	}
	.router-link-active .pic3on{
		background-image: url(../../../img/shopcaron.png);
	}
	.router-link-active .pic4on{
		background-image: url(../../../img/myon.png);
	}
	.router-link-active{
		color: #f60;
	}
	
</style>