<template>
	<div :style="{'padding':'52px 0'}">
		<header class="flex">
			<div class="header-left" @click="back()">
				
			</div>
			<div class="header-center">
				分类
			</div>
			<div class="header-right">
				
			</div>
		</header>
		<div class="fix-list">
			<ul>
				<li v-for="(v,i) in title" :class="{current:num==i}" @click="change(i)">
					<span>{{v.name}}</span>
				</li>
				
			</ul>
		</div>
		<div class="box">
			<!--<div :class="v.class" v-for="(v,i) in classlist">
				<div class="box-pic" index="0">
					<img src="../../../img/air.webp.jpg"/>
				</div>
				<div class="box-title" index="1">
					<span>手机</span>
				</div>
				<div class="box-produce" index="2">
					<div class="produce" v-for="(v,i) in list">
						<div>
							<img :src="v.src" :style="{'width':'1.2rem','height':'1.2rem'}" >
						</div>
						<div class="name">{{v.title}}</div>
					</div>			
				</div>		
				<div class="box-title" index="3">
					<span>家电</span>
				</div>
				<div class="box-produce" index="4">
					<div class="produce" v-for="(v,i) in appliances">
						<div>
							<img :src="v.src" :style="{'width':'1.2rem','height':'1.2rem'}" >
						</div>
						<div class="name">{{v.title}}</div>
					</div>										
				</div>			
				<div class="box-title" index="5">
					<span>电脑</span>
				</div>
				<div class="box-produce" index="6">
					<div class="produce" v-for="(v,i) in computerNew">
						<div>
							<img :src="v.src" :style="{'width':'1.2rem','height':'1.2rem'}" >
						</div>
						<div class="name">{{v.title}}</div>
					</div>				
				</div>
				<div class="box-pic" index="7">
					<img src=""/>
				</div>
				<div class="box-title" index="8">
					<span>手机配件</span>
				</div>
				<div class="box-produce" index="9">
					<div class="produce">
						<div>
							<img src="" :style="{'width':'1.2rem','height':'1.2rem'}" >
						</div>
						<div class="name">小米9</div>
					</div>
				</div>
			</div>-->
			<div :class="v.class" v-for="(v,i) in classlist">
				<div :class="vv.classname" v-for="(vv,ii) in v.childrenClass">
					<img :src="vv.src" alt="" v-if="vv.flag=='true'" />
					<span v-if="vv.flag=='false'">{{vv.title}}</span>
					<div class="produce" v-for="(produce,iii) in vv.produce">
						<img :src="produce.src" alt="" />
						<div class="name">{{produce.title}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>	

<script>
	export default{
		data(){
			return{
				num:0,
			 	title:[],
			 	classlist:[]
			}
		},
		methods:{
			change(a){
				this.num=a
			
			},
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
				var _this=this
				this.$http.get('./data/classify.json')
				  .then(function (response) {
				  		_this.title=response.data.Title	
				  		_this.classlist=response.data.Class
				   
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
	.fix-list{
		position: fixed;
		left: 0;
		top: 50px;
		width: 1.52rem;
		bottom: 52px;
	}
	.fix-list ul{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		overflow-y:auto ;
	}
	.fix-list ul li{
		    font-size: .34rem;
		    height: .9rem;
		    line-height: .9rem;
		    transform: scale(0.7);
	}
	.box{
		padding-left: 1.84rem;
		padding-right: 0.32rem;

	}
	.box-con img{
		width: 100%;
	}
	::-webkit-scrollbar {
	display: none;/*隐藏滚轮*/
	}
	.box-title{
		    background: #fff;
		    font-size: .28rem;
		    text-align: center;
		    font-weight: 400;
		    margin-top: .2rem;
		    height: 1.28rem;
		    line-height: 1.28rem;
	}
	.box-produce{
	    display: flex;
	    justify-content: space-between;
	    flex-wrap: wrap;
		width: 100%;
		overflow: hidden;
		margin-bottom: 0.2rem;
	}
	.produce{
		width: 33.3%;
		float: left;
		margin-top: 0.2rem;
		margin-bottom: 0.3rem;
	}
	.name{
		margin-top: .28rem;
	    white-space: nowrap;
	    font-size: .23rem;
	    color: rgba(0,0,0,.54);
	    text-overflow: ellipsis;
	    overflow: hidden;
	}
	.fix-list .current{
		color: #fb7d34;
		transform: scale(1);
	}
</style>