<template>
  <div class=" flex items-center py-2 px-4 ">
                <img
                  :src="developer.picture"
                   class="rounded-full border-2 border-gray-500 h-12 w-12 object-cover mr-4 ">

                <span class="flex-1">{{developer.devName}}</span>
                <span class="flex-1">{{developer.startDate.getDate()}}.{{developer.startDate.getMonth()+1}}.{{developer.startDate.getFullYear()}}.</span>
                <span class="flex-1">{{developer.endDate.getDate()}}.{{developer.endDate.getMonth()+1}}.{{developer.endDate.getFullYear()}}.</span>
                <span class="flex-1">{{developer.duration/86400000}} days</span>
                <button
                  class="bg-yellow-300 text-white p-1 rounded mx-1 hover:bg-yellow-500"
                  @click="editHiring"
                >
                  <svg  class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  class="bg-red-400 text-white p-1 rounded mx-1 hover:bg-red-500"
                  @click="deleteHiring"
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
    deleteHiring(){
      console.log('deliting')
    },
    editHiring(){
        console.log('hiring')
    }
}
}
</script>

<style>

</style>
