<template>
	<div>
		<header class="flex">
			<div class="header-left">
				
			</div>
			<div class="header-center">
				购物车
			</div>
			<div class="header-right">
				
			</div>
		</header>
		<section :style="{'padding-top':'50px','padding-bottom':'52px'}">
			<div>
				<div class="empty">
					<router-link to="/home" class="empty-a">
						<span>购物车还是空的</span>
						<p>去逛逛</p>
					</router-link>
				</div>
				<div class="love">
					<img src="../../assets/e95ade2750a7fde92369b416c7d3176d.jpg" alt="">
				</div>
				<div class="box  flex">
					<div class="goods" v-for="(v,i) in list">
						<div class="goods-img">
							<img :src="v.src" alt="">
						</div>
						<div class="goods-txt">
							<div>{{v.title}}</div>
							<div class="price">&yen{{v.price}}</div>
							<div class="del" v-if="v.flag=='true'">&yen{{v.d_price}}</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				list:[]
			}
		},
		mounted(){
					var _this=this
					this.$http.get('./data/cart.json')
					  .then(function (response) {
					    _this.list=response.data.list	
					  })
					  .catch(function (error) {
					    console.log(error);
					  })
					  .then(function () {
					    // always executed
					  });  
				}
	}
</script>

<style scoped="">
	header{
		background: #F2F2F2;
		justify-content: space-between;
		height: 50px;
		align-items: center;
		padding: 0 0.2rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.header-left{
		width: 0.5rem;
		height: 0.5rem;
		background: url(../../assets/back.png);
		background-size:100% 100% ;
	}
	.header-center{
		font-size: 0.3rem;
	}
	.header-right{
		width: 0.5rem;
		height: 0.5rem;
		background: url(../../assets/search.png);
		background-size:100% 100% ;
	}
	.empty{
		padding: 0.2rem;
		background: #ebebeb;
	}
	.empty-a{
		text-decoration: none;
	}
	.empty span{
		display: inline-block;
		line-height: .8rem;
		background: url(../../assets/cart.png) no-repeat 0;
		background-size: auto 100%;
		padding: 0 .16rem 0 .96rem;
		color: rgba(0,0,0,.27);
	}
	.empty p{
		display: inline-block;
		border: 1px solid rgba(0,0,0,.15);
		box-sizing: border-box;
		height: .5rem;
		line-height: .5rem;
		padding: 0 .24rem;
		color: rgba(0,0,0,.87);
		font-style: normal;
	}
	.love img{
		width: 100%;
		display: block;
	}
	.box{
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.goods{
		flex: 0 1 49.5%;
		overflow: hidden;
	}
	.goods img{
		width: 100%;
		display: block;
	}
	.goods-txt{
		padding: .18rem .26rem .22rem;
		text-align: left;
	}
	.goods-txt span{
		font-size: 0.28rem;
	}
	.price{
		display: inline-block;
		font-size: 0.32rem;
		color: #ff6700;
	}
	.del{
		display: inline-block;
		text-decoration: line-through;
	}
</style>