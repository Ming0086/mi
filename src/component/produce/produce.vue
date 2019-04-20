<template>
	<div class="box">
		<section class="produce-box">
			<div class="produce-ppt">
				<div class="pic-ppt">
					<mt-swipe :auto="0" :continuous="false" >
					  <mt-swipe-item >
						  <img src="../../../img/producemi9.webp.jpg"/>
					  </mt-swipe-item>
					  <mt-swipe-item >
						  <img src="../../../img/producemi9_1.webp.jpg"/>
					  </mt-swipe-item>
					  <mt-swipe-item >
						  <img src="../../../img/producemi9_2.webp.jpg"/>
					  </mt-swipe-item>
					  <mt-swipe-item >
						  <img src="../../../img/producemi9_3.webp.jpg"/>
					  </mt-swipe-item>
					</mt-swipe>	
				</div>
			</div>
		</section>
		<section class="produce-box">
			<div class="top-tip">
				<img src="../../../img/mi9time.jpg" alt="">
			</div>
		</section>
		<section class="produce-box">
			<div class="produce-title">
				小米9
			</div>
		</section>
		<section class="produce-box">
			<div class="produce-con">
				<div class="txt-con">
					<font>
						「全款预售火爆进行中，3周内发货」
					</font>					
					全息幻彩全曲面玻璃机身 / 全球首批量产骁龙855 / 索尼4800万超广角微距三摄，DxOMark 视频世界第一 / 全球首款20W无线闪充 / 第5代极速屏下指纹解锁					
				</div>
			</div>
		</section>
		<section class="produce-box">
			<div class="price-box">								
				￥3299					
			</div>
		</section>
		<section class="produce-box">
			<div class="produce-setting-box flex">
				<div class="setting-box">
					<img src="../../../img/cpumi9.png" alt="">
					<div class="setting-name">CPU</div>
					<div class="setting-value">骁龙855八核</div>
				</div>
			</div>
		</section>
		<section class="produce-box">
			<div class="img-box">
				<img src="../../../img/changephone.png" alt="">
			</div>
		</section>
		<section class="produce-box">
			<div class="produce-choose">
				<div class="choose-box">
					<div class="choose-main flex">
						<div class="choose-title">已选</div>
						<div class="choose-name">小米9 全网通版 8GB+128GB 全息幻彩蓝 x 1</div>
					</div>
				</div>
				<div class="choose-box">
					<div class="choose-main flex">
						<div class="choose-title">送至</div>
						<div class="choose-name">北京市东城区</div>
						<div class="choose-on">该地区暂时缺货</div>
					</div>
				</div>
				<div class="choose-box">
					<div class="choose-main flex">
						<img src="../../../img/choosetrue.png" alt="">
						<span>小米自营</span>
					</div>
				</div>
			</div>	
		</section>
		<section class="produce-box">
			<div class="produce-discuss flex">
				<div class="discuss-box">
					<div class="discuss-header flex">
						<div class="header-img">
							<img src="../../../img/header1.webp.jpg" alt="">
						</div>
						<div class="discuss-user">
							<p class="user-name">唯爱</p>
							<p class="user-time">2019-03-23</p>
						</div>
						<div class="good">264</div>
					</div>
					<div class="discuss-con">
						<div class="discuss-txt">美～美美～美美美～你也美我也美，
						手机美美的，花也美树也美，一切美美的...</div>
						<div class="discuss-img flex">
							<div class="phone">
								<img src="../../../img/2330f09726be011d675bd7df86a38db8.webp.jpg" alt="">
							</div>
							<div class="phone">
								<img src="../../../img/8ecb0a0ac417de89d540d033f27ef078.webp.jpg" alt="">
							</div>
							<div class="phone">
								<img src="../../../img/6bb8435dcde08f4e434ce9cc4ab6d66c.webp.jpg" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="discuss-box">
					<div class="discuss-header flex">
						<div class="header-img">
							<img src="../../../img/header1.webp.jpg" alt="">
						</div>
						<div class="discuss-user">
							<p class="user-name">唯爱</p>
							<p class="user-time">2019-03-23</p>
						</div>
						<div class="good">264</div>
					</div>
					<div class="discuss-con">
						<div class="discuss-txt">美～美美～美美美～你也美我也美，
						手机美美的，花也美树也美，一切美美的...</div>
						<div class="discuss-img flex">
							<div class="phone">
								<img src="../../../img/2330f09726be011d675bd7df86a38db8.webp.jpg" alt="">
							</div>
							<div class="phone">
								<img src="../../../img/8ecb0a0ac417de89d540d033f27ef078.webp.jpg" alt="">
							</div>
							<div class="phone">
								<img src="../../../img/6bb8435dcde08f4e434ce9cc4ab6d66c.webp.jpg" alt="">
							</div>
						</div>
					</div>
				</div>				
			</div>
			<div class="more-discuss">
				更多评论
			</div>
		</section>
		<section class="produce-box">
			<div class="produce-img">
				<img src="" alt="">
			</div>
		</section>
		<section class="produce-box" v-for="(v,i) in list">
			<div class="produce-pic">
				<img :src="v.src" alt="" />
			</div>
		</section>
		<footer>
			<div class="footer-box flex">
				<router-link to="/home" class="footer-left">
					<div class="pic pic1"></div>
					<span>首页</span>
				</router-link>
				<router-link to="/shopcar" class="footer-left">
					<div class="pic pic2"></div>
					<span>购物车</span>
				</router-link>
				<div class="joinshop-box">
					<div class="joinshop">
						加入购物车
					</div>
				</div>
			</div>
		</footer>
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
			this.$http.get('./data/produce.json')
			  .then(function (response) {	
			   _this.list=response.data.listpic
			   
			  })
			  .catch(function (error) {
			    console.log(error);
			  })
			  .then(function () {
			    // always executed
			  });  
		},
	}
</script>

<style scoped="">
	.pic-ppt{
		height: 7.92rem;
	}
	.pic-ppt img{
		width: 100%;
	}
	.top-tip{
		width: 100%;
	}
	.top-tip img{
		width: 100%;
		display: block;
	}
	.produce-title{
		padding: .32rem .32rem 0;
		font-size: .4rem;
		text-align: left;
	}
	.produce-con{
		padding: 0 .32rem;
		text-align: left;
	}
	font{
		color:rgb(255,74,0);
	}
	.txt-con{
		font-size: 0.25rem;
		line-height: 1.5em;
		word-break: break-all;
		color: rgba(0,0,0,.54);
	}
	.price-box{
		padding: 0 .32rem .32rem;
		text-align: left;
		font-size: 0.48rem;
		color: #FF6700;
	}
	::-webkit-scrollbar {
	display: none;/*隐藏滚轮*/
	}
	.produce-setting-box{
		overflow-x: auto;
		padding-bottom: 34px;
	}
	.setting-box{
		min-width: 1.68rem;
		padding: 0 .08rem;
		position: relative;
	}
	.setting-box img{
		display: block;
		margin: 0 auto;
		width: .4rem;
		height: .4rem;
	}
	.setting-box::before{
		content: "";
		position: absolute;
		border-left: 1px solid #d9d9d9;
		top: 0;
		left: 0;
		height: 100%;
		-webkit-transform-origin: left 0;
		transform-origin: left 0;
	}
	.setting-value{
		color: #676767;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.img-box img{
		display: block;
		width: 100%;
	}
	.discuss-header{
		align-items: center;
	}
	.produce-choose{
		background-color: #fafafa;
		margin: .16rem .32rem 0;
	}
	.produce-discuss{
		margin-top: 0.16rem;
		overflow-x:auto;
	}
	.choose-box{
		padding: .24rem .32rem;		
	/* 	border: 1px solid #999; */
	}
	.choose-title{
		margin-right: 0.3rem;
	}
	.choose-on{
		color: #FF6700;
		margin-left: 0.3rem;
	}
	.choose-box img{
		display: block;
		height: 0.2rem;
		width: auto;
	}
	.discuss-box{
		background-color:#fafafa;
		width: 5.9rem;
		height: 4.7rem;
		box-sizing: border-box;
		padding: 0.32rem;
		margin-left:0.32rem
	}
	.header-img{
		margin-right: 0.24rem;
		width: 0.64rem;
		height: 0.64rem;
		overflow: hidden;
		border-radius:100% ;
	}
	.header-img img{
		width: 100%;
	}
	.discuss-user{
		flex: 1;
		text-align: left;
	}
	.discuss-txt{
		margin: .12rem 0;
		text-align: left;
		height: 3em;
	}
	.phone{
		width: 1.646rem;
		height: 1.26rem;
		border-radius: 0.16rem;
		overflow: hidden;
		margin:0 .16rem 0 0
	}
	.phone img{
		width: 100%;
	}
	.discuss-img{
		justify-content: space-between;
	}
	.more-discuss{
		margin-top: .32rem;
		margin-bottom: .5rem;
		color: #4e72a5;
		font-size: 0.32rem;
	}
	.produce-pic{
		width: 7.2rem;
	}
	.produce-pic img{
		width: 100%;
		display: block;
	}
	footer{
		padding: 0 .16rem .16rem;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: transparent;
	}
	.footer-box{
		width: 100%;
		background: white;
		height: 1.04rem;
		align-items: center;
		box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
		border-radius: 0.16rem;
	}
	.pic{
		display: block;	
		margin: 0 auto .04rem;
		width: .4rem;
		height: .4rem;	
		background-size: cover;
	}
	.pic1{
		background-image:url(../../../img/home.png) ;		
	}
	.pic2{
		background-image:url(../../../img/shopcar.png) ;
	}
	a{
		text-decoration: none;
		color: rgba(0,0,0,.54);
	}
	.footer-left{
		margin-left: 0.5rem;
	}
	.joinshop-box{
		flex: 1;
		margin-left: 0.4rem;
		margin-right: 0.32rem;
		text-align: right;
	}
	.joinshop{
		display: inline-block;
		padding: 0 .48rem;
		border-radius: .32rem;
		height: .64rem;
		line-height: .64rem;
		background: #ff6700;
		font-size: .28rem;
		color: #FFFFFF;
	}
</style>
