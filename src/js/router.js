import VueRouter from 'vue-router'
import index from '../component/index/index.vue';
import home from '../component/index/home.vue';
import classify from '../component/index/classify.vue';
import shopcar from '../component/index/shopcar.vue';
import my from '../component/index/my.vue';
import produce from '../component/produce/produce.vue';
export default new VueRouter({
	routes:[
			
			{
			 path:'/produce',component:produce
			},
	  		{
		   	 path:'/index',component:index,
		   	 children:[
		   	    {
		   	    	path:'/home',component:home
		   	    },
		   	    {
		   	    	path:'/classify',component:classify
		   	    },
		   	    {
		   	    	path:'/shopcar',component:shopcar
		   	    },
		   	    {
		   	    	path:'/my',component:my
		   	    }   	 
	   	 
	   	 		]
	  		},
	  		{
		   	 path:'/',redirect:'/home'
		    }
  		   
	
	]
	
	
})	
