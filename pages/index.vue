<template>
  <div >
    <div class="grid grid-cols-12">
      <div class="col-span-3 bg-blue-200 h-screen">
         sidebar
      </div>
      <div class="col-span-9   bg-blue-50   text-gray-700">
        <div class="mx-6 my-4 bg-white flex  flex-col border-2">
            <div class="px-4 flex h-12 justify-between w-full items-center border-b">
              <div class="">Developers</div>
              <button @click="openDeveloperCreatePopup" class=" bg-blue-500 color uppercase px-4 py-2 rounded text-white text-sm font-medium hover:bg-blue-400">Add Developer</button>
            </div>
            <developer-item
                v-for="developer in developers"
                :key="developer.id"
                :developer="developer"
                @editDeveloper="openDeveloperEditPopup(developer.id)"
            ></developer-item>

            <div class="px-4 flex h-16 justify-between w-full items-center border-t">
              <div class=""></div>
              <button @click="openDeveloperCreatePopup" class=" bg-green-500 color uppercase px-4 py-2 rounded text-white text-sm font-medium hover:bg-green-400 ">Hire</button>
            </div>
        </div>
      </div>
    </div>
    <developer-popup
        v-show="addDeveloperPopup"
        @closePopup="addDeveloperPopup = false"
    ></developer-popup>
    <developer-popup
        v-if="editDeveloperPopup"
        @closePopup="editDeveloperPopup = false"
        :editDeveloper="developers[editingDeveloper-1]"
    ></developer-popup>
  </div>
</template>

<script>
import DeveloperPopup from "@/components/Developer/DeveloperPopup";
import DeveloperItem from "@/components/Developer/DeveloperItem";
export default {
  components:{
    DeveloperPopup,
    DeveloperItem
  },
  data(){
    return{
      addDeveloperPopup: false,
      editDeveloperPopup: false,
      editingDeveloper: -1,
    }
  },

  computed:{
    developers(){
      return this.$store.getters['developers']
    }
  },
  methods:{
    openDeveloperCreatePopup(){
      this.addDeveloperPopup = true;
    },
    openDeveloperEditPopup(id){
      this.editingDeveloper = id
      console.log(this.editingDeveloper)
      this.editDeveloperPopup = true
    }
  }
}
</script>

<style>

</style>
