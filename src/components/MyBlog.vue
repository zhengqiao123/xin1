<template>
     <h2>
         这个标题是{{title}}
         <MyButton :title='title'></MyButton>
     </h2>
</template>

<script>
import MyButton from './MyButton.vue'
 export default {
   data () {
     return {

     }
   },
   components:{
       MyButton
   },
   props:['title']
 }
</script>

<style>

 
</style>
