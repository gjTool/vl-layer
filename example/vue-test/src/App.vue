<!-- i18n -->
<template>
  <div>
    <span>{{ $t('message.riqi') }}</span>
    <span>{{ $t('message.aa') }}</span>
    <span>{{ $t('message.text') }}</span>
    <el-select v-model="selectValue" @change="langChange" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
  import world from "@/components/HelloWorld.vue"
export default {
  components:{
    world
  },
  data() {
    return {
      selectValue: '',
      options: [
        {
          value: 'cn',
          label: '中文'
        },
        {
          value: 'en',
          label: 'English'
        }
      ]
    };
  },
  created() {
    let that = this;
    console.log(localStorage.lang);
    that.selectValue = localStorage.lang == undefined ? 'cn' : localStorage.lang;
  },
  mounted(){
    this.$layer.iframe({
      title:"xxx",
      content:{
        content:world,
        parent:this,
        data:{

        }
      },
      canmove:false,
      success:id=>{
        console.log("success",id)
      },
      end:()=>{
        console.log("end")
      },
      beforeClose:(id,close)=>{
        console.log("beforeClose",id)
        setTimeout(()=>{
          close(id)
        },2000)
        return false
      }
    })
  },
  methods: {
    //语言切换
    langChange(e) {
      // console.log(e)
      localStorage.setItem('lang', e);
      this.$i18n.locale = e;
    }
  }
};
</script>
