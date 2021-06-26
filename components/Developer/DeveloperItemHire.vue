<template>
  <div class=" flex items-center py-2 px-4 ">
                <button class="rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 border-white h-6 w-6 mr-4 flex items-center justify-center" @click="selectDeveloper">
                  <svg v-if="developerSelected"  class="h-6 w-6 bg-green-600 rounded-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </button>
                <span class="flex-1">{{developer.devName}}</span>
                <span class="flex-1">${{developer.price}}</span>
                <span class="flex-1">{{developer.tehnology}}</span>
                <button
                  class="bg-yellow-300 text-white p-1 rounded mx-1 hover:bg-yellow-500"
                  @click="editDeveloper"
                >
                  <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  class="bg-red-400 text-white p-1 rounded mx-1 hover:bg-red-500"
                  @click="deleteDeveloper"
                  >
                  <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
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
      return this.developerSelected = !this.developerSelected;
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
