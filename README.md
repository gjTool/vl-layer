## vl-layer
 vue弹窗组件，vue-layer改良版，新增参数属性方法
 
 vue-layer文档 https://github.com/zuoyanart/vue-layer#readme
 
 install
```shell
npm install vl-layer
```
 
 ```js
import Vue from 'vue';
import layer from 'vl-layer'
import 'vl-layer/vl-layer.css';

Vue.prototype.$layer = layer(Vue);
```
 
 新增参数属性如下
 ```js
 
    //新增方法this.$layer.canmove(layerId,true) 
    
   let layerId = this.$layer.iframe({
      title:"xxx",
      content:{
        content:world, //组件
        parent:this, //vue实例
        data:{} //父组件向弹窗子组件传值
      },
      canmove:false,  //true可以拖动 false不能拖动 
      //弹窗成功
      success:id=>{
        console.log("success",id)
      },
      //弹窗关闭/取消
      end:()=>{
        console.log("end")
      },
      //弹窗关闭/取消之前， return false阻止关闭  return true不阻止   
	  //回调参数 close关闭弹窗
      beforeClose:(id,close)=>{
        console.log("beforeClose",id)
        setTimeout(()=>{
          close(id)
        },2000)
        return false
      }
    })
```
