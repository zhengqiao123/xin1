<template>
 <div>
      <MyBlog v-for='blog in blogs' :key="blog.id" :title='blog.title'></MyBlog>
 </div>
</template>

<script>
import MyBlog from './components/MyBlog.vue'

 export default {
   data(){
     return{
        blogs:[
          {id:1,title:'blogONE'},
          {id:2,title:'blogtwo'},
          {id:3,title:'blogthree'},
        ]   
     }
   },
   components:{
     MyBlog
   }
 }
</script>

<style>

 
</style>
