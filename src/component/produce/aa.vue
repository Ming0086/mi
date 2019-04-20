<template>
	<div>
		<div class="box">
			<section v-for="(v,i) in list" :class="v.classname">
				<div v-for="(child,ii) in v.children" :class="child.childclass">
					{{child.title}}
					{{child.price}}					
					<div v-for="(three,c) in child.threediv" :class="three.class">					
						<mt-swipe :auto="0" :continuous="false" v-if="three.flag=='ppt-true'">
						  <mt-swipe-item v-for="(four,d) in three.url">
							  <img :src="four.src"/>
						  </mt-swipe-item>
						</mt-swipe>						
						<img :src="three.src" alt="" v-if="three.flag=='img-true'">						
						<font v-if="three.flag=='font-true'">
							{{three.font}}
						</font>
						{{three.con}}
						<div class="setting-box" v-if="three.flag=='box-true'" v-for="(four,d) in three.conset">
							<img :src="four.src" alt="">
							<div class="setting-name">{{four.name}}</div>
							<div class="setting-value">{{four.value}}</div>
						</div>
					</div>			
					<img :src="child.src" alt="" v-if="child.flag=='img-true'">
					<div v-for="(choose,ch) in child.choose" class="choose-box flex" v-if="child.flag=='choose-true'">
						<div class="choose-main flex" v-if="choose.flag=='true'">	
							<div class="choose-title">{{choose.ctitle}}</div>
							<div class="choose-name">{{choose.name}}</div>
							<div class="choose-on">{{choose.on}}</div>
						</div>	
						<div class="choose-sever" v-if="choose.flag=='1'">
							<img :src="choose.src" alt="">
							<span>{{choose.title}}</span>
						</div>		
					</div>
				</div>
			</section>
		</div>
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
			_this.list=response.data.list
		   console.log(response)
		   
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
	.produce-choose{
		background-color: #fafafa;
		margin: .16rem .32rem 0;
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
	.choose-sever img{
		height: 0.2rem;
		width: auto;
	}
</style>
