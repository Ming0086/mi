<template>
	<div :style="{'padding-bottom':'52px','background':'#f5f5f5'}">
		<header>
			<div class="header-list">
				<div class="header-pic flex" >
						<div class="img">
							<img src="../../assets/avatar.76a75b8f17.png"/>
						</div>
						<div class="txt">
							登陆/注册
						</div>
				</div>
				
			</div>
		</header>
		<div class="order flex">
			<div class="order-left">
				我的订单
			</div>
			<div class="order-right">
				全部订单
			</div>
		</div>
		<ul class="flex state">
			<li>
				<div class="state-box">
					<div class="pic">
						
					</div>
					<div class="state-txt">
						待付款
					</div>
				</div>
			</li>
			<li>
				<div class="state-box">
					<div class="pic pic2">
						
					</div>
					<div class="state-txt">
						待收货
					</div>
				</div>
			</li>
			<li>
				<div class="state-box">
					<div class="pic pic3">
						
					</div>
					<div class="state-txt">
						退换修
					</div>
				</div>
			</li>
		</ul>
		<div class="line">
			
		</div>
		<ul class="flex box">
			<li class="huiyuan">
				<div class="box-list">
					会员中心
				</div>
			</li>
			<li class="wallet">
				<div class="box-list">
					我的优惠
				</div>
			</li>
		</ul>
		<div class="line">
			
		</div>
		<ul class="flex box">
			<li class="sever">
				<div class="box-list">
					服务中心
				</div>
			</li>
			<li class="mihome">
				<div class="box-list">
					小米之家
				</div>
			</li>
		</ul>
		<div class="line">
			
		</div>
		<ul class="flex box">
			<li class="fma">
				<div class="box-list">
					F码通道
				</div>
			</li>
		</ul>
		<div class="line">		
		</div>
		<ul class="flex box">
			<li class="setting">
				<div class="box-list">
					设置
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped="">
	 .flex{
	 	display: flex;
	 }
	 .header-list{
	 	background: url(../../assets/bg.63c8e19851.png) center 0 #f37d0f;
	 	background-size: 100% auto;
	 	padding: 0.32rem 0;
	 }
	 .header-pic{
	 	align-items: center;
	 }
	 .img{
	 	width: 0.96rem;
	 	height: 0.96rem;
	 	border: 3px solid hsla(0,0%,100%,.4);
	 	border-radius: 100%;
 	    margin: 0 .16rem 0 .32rem;
 	    box-sizing: border-box;
	 }
	 .img img{
	 	width: auto;
	 	height: 100%;
	 }
	 .txt{
	 	color: #fff;
	    font-size: .24rem;
	    text-align: left;
	 }
	 .order{
	 	justify-content: space-between;
	 	align-items: center;
	 	padding-right: .56rem;
	 	background-color: #fff;
	    height: .8rem;
	    border-bottom: 1px solid rgba(0,0,0,.15);
	 }
	 .order-left{
	 	font-size: .28rem;
    	padding: 0 0 0 .32rem;
    	color: rgba(0,0,0,.87);
	 }
	 .order-right{
	 	  font-size: 0.24rem;
	 }
	.state{
		justify-content: space-between;
		align-items: center;
		padding: 0 .8rem;
	}
	.pic{
	    width: .48rem;
	    height: .48rem;
	    margin: 0 auto .16rem;
	    background: url(../../assets/money.png) no-repeat center 0;
	    background-size: 100% auto;
	}
	.state li{
		padding: .4rem 0;
	}
	.pic2{
		background: url(../../assets/car.png);
		background-size: 100% auto;
	}
	.pic3{
		background: url(../../assets/nav-4.d68723895f.png);
		background-size: 100% auto;
	}
	.line{
		height: .2rem;
	    background: #f5f5f5;
	    overflow: hidden;
	}
	.box{
		flex-wrap: wrap;
	}
	ul{
		background: white;
	}
	.box li{
		width: 100%;
		position: relative;
	    color: rgba(0,0,0,.54);
	    border-bottom: 1px solid rgba(0,0,0,.15);
	    line-height: 0;
     background-size: .48rem auto;
	    list-style: none;
	}
	.huiyuan{
		 background: url(../../assets/huiyuan.png) no-repeat .32rem;
	  	
	}
	.wallet{
		background: url(../../assets/pake.png) no-repeat .32rem;
	}
	.sever{
		background: url(../../assets/server.png) no-repeat .32rem;
	}
	.mihome{
		background: url(../../assets/mihome.png) no-repeat .32rem;
	}
	.fma{
		background: url(../../assets/f.png) no-repeat .32rem;		
	}
	.setting{
		background: url(../../assets/setting.png)no-repeat .32rem;		
	}
	.box li:not(:first-child):before{
		    content: "";
		    position: absolute;
		    left: 0;
		    top: -2px;
		    height: 3px;
		    background: #fff;
		    width: 17.92px;
		    width: 1.12rem;
	}
	.box li:after{
		    content: "";
		    position: absolute;
		    right: 5.12px;
		    right: .32rem;
		    top: 50%;
		    width: 3.2px;
		    width: .2rem;
		    height: 3.2px;
		    height: .2rem;
		    border-left: 1px solid currentColor;
		    border-top: 1px solid currentColor;
		    transform: translate3d(0,-50%,0) rotate(135deg);
		    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
	}
	.box-list{
		    height: 1.04rem;
		    line-height: 1.04rem;
		    text-align: left;
		    padding-left: 1.12rem;
		    font-size: 0.28rem;
		    color: rgba(0,0,0,.87);
	}
</style>