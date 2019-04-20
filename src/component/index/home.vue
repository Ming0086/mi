<template>
	<div :style="{'padding-bottom':'52px'}">
		<header>
			<div class="header-top">
				<div class="header-pic">
					<img src="../../../img/logo.png"/>
				</div>
				<div class="header-search">
					<img src="../../../img/search.png"/>
					搜索商品名称
				</div>
				<div class="header-user">
					<router-link to="/my">
						<img src="../../../img/my.png"/>
					</router-link>
				</div>
			</div>
			<div class="header-bottom">
				<div class="header-list">
					<div class="header-meun">
						<img src="../../../img/meun-down.png"/>
					</div>
					<div class="header-title" v-for="(v,i) in list" >
						<span @click="change(i)" :class="{current:num==i}">{{v.name}}</span>
					</div>
				</div>
			</div>
		</header>
		<section :style="{'padding-bottom':'52px'}">
			<div class="section-one">
				<mt-swipe :auto="0" :continuous="false">
				  <mt-swipe-item v-for="(v,i) in pic">
				  	  <img :src="v.src"/>
				  </mt-swipe-item>
				</mt-swipe>
				<div class="middle-list" >
					<div v-for="(v,i) in mpic">
						<img :src="v.src" alt="" />
					</div>
				</div>
				<div class="line">
					
				</div>
			<!-- 	<div class="box-one" :style="{'width': '7.2rem','height': '5.08rem'}" >
					<div class="item-pic"  :style="{'width':'3.58rem','height':'5.08rem'}">
						<img src="../../../img/newgoods.webp.jpg"/>
					</div>
					<div class="item-pic"  :style="{'width':'3.58rem','height':'2.52rem','left':'3.62rem'}">
						<img src="../../../img/12966fc6-08ed-7521-fcad-374874297e1b.webp.jpg"/>
					</div>
					<div class="item-pic"  :style="{'width':'3.58rem','height':'2.52rem','left':'3.62rem','top':'2.56rem'}">
						<img src="../../../img/ca27380e-37a7-740a-1ed9-abcabd3485a9.webp.jpg"/>
					</div>
				</div>
				
				<div class="big-box" v-for="(v,i) in Bboxpic">
					<div class="line">
						
					</div>
					<div :style="{'width':'7.2rem','height':'2.8rem'}">
						<img :src="v.src" alt="" />
					</div>
					<div class="line">
						
					</div>
					<div :style="{'width':'7.2rem','height':'4.4rem'}">
						<img :src="v.src1" alt="" />
					</div>				
				</div>
				<div class="big-box-two" v-for="(v,i) in Sboxpic">
						<div class="small-box" >
							<div class="small-box-con">
								<div class="img">
									<img :src="v.src"/>
								</div> 
								<div class="box-txt">
									<div class="name">
										{{v.name}}
									</div>
									<div class="msg">
										{{v.msg}}
									</div>
									<div class="price">
										<span>￥</span>
										{{v.price}}
										<span>起</span>
										<span class="old">
											￥{{v.oldprice}}
										</span>
									</div>
								</div>
							</div>
							<div class="small-box-con">
								<div class="img">
									<img :src="v.src1"/>
								</div>
								<div class="box-txt">
									<div class="name">
										{{v.name1}}
									</div>
									<div class="msg">
										{{v.msg1}}
									</div>
									<div class="price">
										<span>￥</span>
										{{v.price1}}
										<span>起</span>
										<span class="old">
											￥{{v.oldprice1}}
										</span>
									</div>
								</div>
							</div>	
						</div>
				</div>
				<div class="tip">
					更多小米手机产品 >
				</div>
				<div class="line"></div> -->
			
				<div v-for="(v,i) in listbox" :class="v.class">
					
					<div v-for="(vv,ii) in v.children" :class="vv.class">
						<div class="big-box" v-for="(Smallbox,iii) in vv.bigbox_pic">
							<router-link to='/produce'>
								<div :style="{'width':'7.2rem','height':'2.8rem'}">
									<img :src="Smallbox.src" alt="">
								</div>
							</router-link>
							<div class="line"></div>
							<div :style="{'width':'7.2rem','height':'4.4rem'}">
								<img :src="Smallbox.src1" alt="">
							</div>
						</div>
						
						<div class="big-box-two" v-for="(msg,msg_i) in vv.msg">
							<div class="small-box" >
								<div class="small-box-con">
									<router-link to="/produce">
										<div class="img">
											<img :src="msg.src"/>
										</div> 
										<div class="box-txt">
											<div class="name">
												{{msg.name}}
											</div>
											<div class="msg">
												{{msg.msg}}
											</div>
											<div class="price">
												<span>￥</span>
												{{msg.price}}
												<span>起</span>
												<span class="old">
													￥{{msg.oldprice}}
												</span>
											</div>
											
									</div>
									</router-link>
								</div>
								<div class="small-box-con">
									<div class="img">
										<img :src="msg.src1"/>
									</div>
									<div class="box-txt">
										<div class="name">
											{{msg.name1}}
										</div>
										<div class="msg">
											{{msg.msg1}}
										</div>
										<div class="price">
											<span>￥</span>
											{{msg.price1}}
											<span>起</span>
											<span class="old">
												￥{{msg.oldprice1}}
											</span>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
					
					<div class="tip">
						{{v.tip}}
					</div>
					<div class="line"></div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
		
		export default {
			data(){
				return{
					num:0,
					list:[],
					pic:[],
					mpic:[],
					Bboxpic:[],
					Sboxpic:[],
					listbox:[]
				}
			},
			mounted(){
				var a=this
				this.$http.get('./data/home.json')
				  .then(function (response) {
				    a.list=response.data.Title
				    a.pic=response.data.Pic
				    a.mpic=response.data.Middlepic
				    a.Bboxpic=response.data.Bigbox
				    a.Sboxpic=response.data.Smallbox
					a.listbox=response.data.list
			
				   
				  })
				  .catch(function (error) {
				    console.log(error);
				  })
				  .then(function () {
				    // always executed
				  });  
			},
			methods:{
			  change(a){
				console.log(a)
				this.num=a
			  }
			}
		}
</script>

<style scoped="">
	.header-top{
		display: flex;
		height: 0.84rem;
		align-items: center;
		flex: 1;
		background: #f2f2f2;
	}
	.header-pic,.header-user{
		width: 0.6rem;
		margin: 0 0.2rem;
	}
	.header-top img{
		width: 100%;
	}
	.header-search{
		display: flex;
		width: 100%;
		background: white;
		border: 1px solid #e5e5e5;
		text-align: left;
		align-items: center;
		color: rgba(0,0,0,0.3);
	}
	.header-search img{
		display: inline-block;
		width: 0.6rem;
		height: 0.6rem;
	}
	.header-bottom{
		overflow: hidden;
		background: #F2F2F2;
		position: relative;
	}
	.header-list{
		white-space: nowrap;
		overflow-x: auto;
		z-index: 2;
	}
	.header-title{
		display: inline-block;
		padding: 0 0.25rem;
		
	}
	.header-title span{
		font-size: 0.26rem;
		line-height: .55rem;
		border-bottom: 2px solid rgba(237,91,0,0);
		display: inline-block;
	}
	::-webkit-scrollbar {
	display: none;/*隐藏滚轮*/
	}
	.header-meun{
		position: absolute;
		width: 0.68rem;
		height: 0.55rem;
		right: 0;
		bottom: 0;
		background: #F2F2F2;
	}
	.header-meun img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.mint-swipe-item>img{
		width: 100%;
	}
	.mint-swipe-items-wrap{
		overflow: ;
	}
	.mint-swipe{
		height: 3.6rem;
		background: #ccc;
	}
	.middle-list{
		width: 7.2rem;
		height: 1.52rem;
		margin: 0 auto;
	}
	.middle-list>div{
		float: left;
		width: 1.44rem;
	    height: 1.52rem;
	}
	.middle-list img{
		width: 100%;
	}
	.line{
		border-bottom: 0.16rem  solid rgb(245,245,245);
	}
	.box-one{
		position: relative;
		margin: 0 auto;
	}
	.item-pic{
		position: absolute;
	}
	.item-pic img{
		width: 100%;
	}
	.big-box img{
		width: 100%;
	}
	.small-box{
		display: flex;
	}
	.small-box-con{
		width: 3.6rem;	
	}
	.small-box-con:first-child{
		margin-right: .04rem;
	}
	
	.img img{
		width: 100%;
	}
	.box-txt{
		padding: .2rem .27rem;
		text-align: left;
	}
	.msg{
	    font-size: .22rem;
	    line-height: .3rem;
	    color: rgba(0,0,0,.54);
	}
	.price{
		display: inline-block;
		color: #ea625b;
		font-size: .28rem;
	}
	.price span{
	    font-size: .2rem;
	    display: inline-block;
	}
	.old{
		display: inline-block;
		text-decoration: line-through;
		font-size: .22rem;
   		color: rgba(0,0,0,.54);
	}
	.name{
		font-size: .28rem;
    	color: rgba(0,0,0,.87);
	}
	.tip{
		height: 1rem;
		line-height: 1rem;
		font-size: .28rem;
		border-top: 1px solid #EBEBEB;
	}
	.current{
		color: rgb(237, 91, 0);
		border-color: rgb(237, 91, 0) !important;
	}
	a{
		text-decoration: none;
	}
</style>