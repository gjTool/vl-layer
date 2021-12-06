[![npm version](https://img.shields.io/npm/v/vl-layer.svg)](https://www.npmjs.com/package/vl-layer) [![npm downloads](https://img.shields.io/npm/dt/vl-layer.svg)](https://www.npmjs.com/package/vl-layer)   [![MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/gjTool/vl-layer/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/gjTool/vl-layer.svg)](https://github.com/gjTool/vl-layer/issues) [![GitHub stars](https://img.shields.io/github/stars/gjTool/vl-layer.svg?style=social)](https://github.com/gjTool/vl-layer/stargazers) [![GitHub forks](https://img.shields.io/github/forks/gjTool/vl-layer.svg?style=social)](https://github.com/gjTool/vl-layer/network/members)  

 **vue-layer修复版vl-layer，一款好用的vue弹窗组件，layui-layer弹窗风格**
 - 起初使用vue-layer，但是奈何bug太多，作者又没有时间修复，所以只能自己动手修改源码，添加自己想要的功能，修改了图标，索性发布到npm上，这样也能帮到其他想用vue-layer的同学。
 - [vl-layer github地址](https://github.com/gjTool/vl-layer)  
 - [原版vue-layer github地址](https://github.com/zuoyanart/vue-layer)

### **QQ交流群：196422291**

## 更新信息

- 2021.06.18 更新： 新增parentDom属性，弹窗的父元素，弹窗创建后会append到父元素
## 快速使用

```shell
npm install vl-layer
```
 
 - main.js里
```javascript
import Vue from 'vue';
import layer from 'vl-layer'
import 'vl-layer/vl-layer.css';

Vue.prototype.$layer = layer(Vue);
```
 - vue文件里
```javascript
<template>
  <div id="app">
  </div>
</template>
<script>
  import world from "@/components/HelloWorld.vue"
  export default {
    name: 'App',
	components:{
	  world
	},
	data() {
	  return {
	
	  };
	},
	mounted() {
		//iframe层并不是真的用了html标签iframe,实质上还是用的div,只是iframe层可以引用自定义组件、页面
		let layerId = this.$layer.iframe({
		   title:"提示",
		   content:{
		     content:world, //组件
		     parent:this, //vue实例 传入实例 弹窗组件内才能获取laydata
		     data:{
				 a:"这是父组件传值", //父组件向弹窗子组件传值
				 b:{},
				 c:function(){}
			 } 
		   },
		   canmove:false,  //true可以拖动 false不能拖动 
		   //弹窗成功 id弹窗的id
		   success:id=>{
		     console.log("success",id)
		   },
		   //弹窗关闭/取消
		   end:()=>{
		     console.log("end")
		   },
		   //弹窗关闭/取消之前，id弹窗的id close关闭弹窗, return false阻止关闭  return true不阻止    
		  // beforeClose:(id,close)=>{
		  //   console.log("beforeClose",id)
		  //   setTimeout(()=>{
		 //      close(id)
		 //    },2000)
		 //    return false
		 //  },
		  //还原状态回调 id弹窗的id state：1 是由最小化还原 2是由最大化还原
		  maxminiCallback:(id,state)=>{
			console.log('maxminiCallback', id,state);
		  },
		  //最小化回调 id弹窗的id
		  miniCallback: id => {
			console.log('miniCallback', id);
		  },
		  //最大化回调 id弹窗的id
		  maxCallback: id => {
			console.log('maxCallback', id);
		  }
		 })
	}
  }
</script>

<style>
</style>
```
 
- HelloWorld.vue
```javascript
<template>
  <div calss="HelloWorld"></div>
</template>
<script>
  export default {
    name: 'HelloWorld',
	props:{
		//本弹窗的id
		layerid:{
			type:String,
			default:""
		},
		//父组件的data
		laydata:{
			type:Object,
			default:()=>{
				return {}
			}
		},
		//父组件传值
		a:{
			type:String,
			default:""
		},
		b:{
			type:Object,
			default:{}
		},
		c:{
			type:Function,
			default:()=>{}
		}
	},
	data() {
	  return {
	
	  };
	},
	mounted() {
		
	}
  }
</script>

<style>
</style>
```

## Attribut
-（注意1：信息框，页面层,iframe层,加载层,tips层下各种具体配置参数会有差别，可以看后面各自的配置）

-（注意2：iframe层并不是真的用了html标签iframe,实质上还是用的div,只是iframe层可以引用自定义组件、页面）
```javascript
 {
   type: 0, //0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
   title: '信息',
   content: '', //文本，标签，iframe层可以传递vue组件对象
   area: 'auto',//['400px','300px'] 
   offset: 'auto',//[20,10] "rightTop" "rightBottom" "leftTop" "leftBottom" {left:0,top:0}  {left:0,bottom:0}  {right:0,bottom:0} {right:0,top:0}
   icon: -1,
   btn: '确定',//[‘确定’，‘取消’]
   time: 0,
   shade: true,//是否显示遮罩
   yes: ()=>{},//确定回调
   cancel: ()=>{},//取消，右上角x关闭按钮回调
   tips: [0,{}],//支持上右下左四个方向，通过1-4进行方向设定,可以设定tips: [1, '#c00']
   tipsMore: false,//是否允许多个tips
   shadeClose: true,//点击遮罩是否关闭
   maxmin: true,//开启最大化最小化
   minBtnOnly:true, //默认false 在  maxmin: true前提下，开启minBtnOnly表示只显示最小化按钮
   scrollbar: true, //是否允许浏览器出现滚动条:默认是允许
   resize: false ,//是否允许拉伸，默认是不允许
   parentDom: HTMLdiv,//html DOM元素，弹窗所在的父元素
   resizeOptions:{
	   icon:true , //是否显示右下角图标 默认显示 false隐藏
	   dom:true, //是否开启右下角拉伸 
	   right:false, //是否开启右边界拉伸 
	   bottom:false //是否开启底部边界拉伸 
   },
   //新增参数
   canmove:false,  //true可以拖动 false不能拖动
	 //弹窗成功 id弹窗的id
	 success:id=>{
	   console.log("success",id)
	 },
	 //弹窗关闭/取消
	 end:()=>{
	   console.log("end")
	 },
	//还原状态回调 id弹窗的id state：1 是由最小化还原 2是由最大化还原
	maxminiCallback:(id,state)=>{
			console.log('maxminiCallback', id,state);
	},
	//最小化回调 id弹窗的id
	miniCallback: id => {
			console.log('miniCallback', id);
	},
	//最大化回调 id弹窗的id
	maxCallback: id => {
			console.log('maxCallback', id);
	},
	//弹窗关闭/取消之前，id弹窗的id close关闭弹窗, return false阻止关闭  return true不阻止
	  beforeClose:(id,close)=>{
		console.log("beforeClose",id)
		setTimeout(()=>{
		  close(id)
		},2000)
		return false
	  }
 }
```

## Method

![alert示例](https://www.gjtool.cn/images/layer-alert.png)
```javascript
 this.$layer.alert(content, [options, yes]);
 // options和yes可以省略， 如果您不愿意写options，则可以直接写确定按钮的函数，即yes
 // content 可以为html
 //yes如果是个function，这会自动添加参数layerid，
 (layerid)=>{
   this.$layer.close(layerid);
 }
```

![confirm示例](https://www.gjtool.cn/images/layer-confirm.png)
```javascript
 this.$layer.confirm(content, [options, yes, cancel]);
  // options，yes和cancel可以省略， 如果您不愿意写options，则可以直接写确定按钮的函数，即yes，或者覆盖默认的cancel方法。PS：yes和cancel方法不能互换
  //content 可以为html
   //yes,cancel如果是个function，这会自动添加参数layerid，
 (layerid)=>{
   this.$layer.close(layerid);
 }
```
![loading示例](https://www.gjtool.cn/images/layer-loading1.png)
![loading示例](https://www.gjtool.cn/images/layer-loading2.png)
```javascript
 this.$layer.loading(option);
  // options ={time:3}，3秒自动关闭
  //options = {content:'请等待'} //可传入文字
```

![msg示例](https://www.gjtool.cn/images/layer-msg.png)
```javascript
 this.$layer.msg(content, [options, end]);
 // options和end可以省略， 如果您不愿意写options，则可以直接写时间到期的回调即可，即end方法
 // 默认msg的关闭时间为1.5秒
 // content 可以为html
```

![prompt示例](https://www.gjtool.cn/images/layer-prompt.png)
```javascript
 this.$layer.prompt(options, yes);
 //特殊参数: value 要回显的值
 //formType: 1text,2password,3textarea
```

![tips示例](https://www.gjtool.cn/images/layer-tips.png)
```javascript
this.$layer.tips(content, follow, options);
//content 可以为html
//follow对css选择器，用来定位目标
```

![iframe示例](https://www.gjtool.cn/images/layer-iframe.png)
```javascript
this.$layer.iframe({
  content: {
    content: componentName, //传递的组件对象
    parent: this,//当前的vue对象
    data:{}//props
  },
  area:['800px','600px'],
  title: 'title'，
  cancel:()=>{//关闭事件
     alert('关闭iframe');
  }
});
// data参数可认为是componentName的props，同时 该方法会自动添加一个key为layerid的值， 该值为创建层的id， 可以直接用来关闭该层
// options参数直接写到json里即可，比如title
```

```javascript
this.$layer.close(layerid);
this.$layer.closeAll(type); // type:'loading' 'alert' 'confirm' 'msg' 'prompt' 'iframe'
//弹窗最大化
this.$layer.full(layerid);
//弹窗最小化
this.$layer.min(layerid);
//还原弹窗
this.$layer.restore(layerid);
//弹窗是否可以拖动 true可以 false不能
this.$layer.canmove(layerid,true)
```
### **QQ交流群：196422291**

## 打赏赞助作者，请他喝一杯咖啡：
![支付宝二维码](https://www.gjtool.cn/download/zfb.jpg)
 ![微信二维码](https://www.gjtool.cn/download/wx.jpg?123123534253453453245)

