<template>
  <div class=" flex items-center py-2 px-4 ">
                <button class="rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 border-white h-6 w-6 mr-4 flex items-center justify-center" @click="selectDeveloper">
                  <svg v-if="developerSelected"  class="h-6 w-6 bg-green-600 rounded-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <span class="flex-1">{{developer.devName}}</span>
                <span class="flex-1">{{developer.location}}</span>
                <span class="flex-1">${{developer.price}}</span>
                <span class="flex-1">{{developer.tehnology}}</span>
                <span class="flex-1">{{developer.experiance}} years</span>
                
              </div>
</template>

<script>
export default {
props: ['developer'],
data(){
  return{
    developerSelected: false,
  }
},

methods:{
   selectDeveloper(){
      this.developerSelected = !this.developerSelected;
      if(this.developerSelected){
        this.$emit('addDeveloperToCart', {
          id: this.developer.id,
          add: true
        })
      }
      else{
        this.$emit('addDeveloperToCart',{
          id: this.developer.id,
          add: false
        })
      }
    },
    deleteDeveloper(){
      return this.$store.dispatch('deleteDeveloper', {
        id: this.developer.id
      })
    },
    editDeveloper(){
      return this.$emit('editDeveloper')
    }
}
}
</script>

<style>

</style>
