<template>
  <div >
<!-- ALL DEVELOPERS -->
    <div class="grid grid-cols-12">
      <div class="col-span-2 bg-blue-200 h-full">
         sidebar :)
      </div>
      <div class="col-span-10   bg-blue-50   text-gray-700">
        <div class="mx-6 my-4 bg-white flex  flex-col border-2">
            <div class="px-4 flex h-12 justify-between w-full items-center border-b">
              <div class="uppercase font-extralight tracking-widest text-sm">All developers</div>
              <button @click="openDeveloperCreatePopup" class=" bg-blue-500 color uppercase px-4 py-2 rounded text-white text-sm font-medium hover:bg-blue-400">Add Developer</button>
            </div>
            
            <developer-item
                v-for="developer in developers"
                :key="developer.id"
                :developer="developer"
                @editDeveloper="openDeveloperEditPopup(developer.id)"
            ></developer-item>
        </div>

        <!-- AVAILABLE DEVELOPERS -->
    <div class="mx-6 my-4 bg-white flex  flex-col border-2">
     <div class="px-4 flex h-12 justify-between w-full items-center border-b">
              <div class="uppercase font-extralight tracking-widest text-sm">Hire developer</div>
              <button  @click="refreshTable" class=" bg-blue-500 color uppercase px-4 py-2 rounded text-white text-sm font-medium hover:bg-blue-400">Refresh table</button>
      </div>
      <div class="px-4 flex h-16 justify-around w-full items-center border-b">
              <div class="flex items-center w-1/3">
                <span class="w-1/3">
                  Start date
                </span>
               <app-input :class="{'bg-red-200 ': errorStartDate}" v-model="workStartDate" :type="'date'" :name="'workStartDate'" :min="today"></app-input>
                </div>
              <div class="flex items-center w-1/3">
                <span class="w-1/3">End Date</span>
                
                <app-input :class="{'bg-red-200 ': errorEndDate}" v-model="workEndDate" :type="'date'" :name="'workEndDate'" :min="workStartDate"></app-input>
                </div>

                
      </div>
       <developer-item-hire
                v-for="developer in availableDevelopers"
                :key="developer.id"
                :developer="developer"
                @addDeveloperToCart="addDeveloperToCart"

            ></developer-item-hire>
            <div class="px-4 flex h-16 justify-between w-full items-center border-t">
              <div class=""></div>
              <button 
                v-show="developerCart.length !==0" 
                @click="hireDevelopers" 
                class=" bg-green-500 color uppercase px-4 py-2 rounded text-white text-sm font-medium hover:bg-green-400 ">Hire</button>
            </div>
    </div>
<!-- ALL HIRINGS -->
    <div class="mx-6 my-4 bg-white flex  flex-col border-2">
     <div class="px-4 flex h-12 justify-between w-full items-center border-b">
              <div class="uppercase font-extralight tracking-widest text-sm">All hirings</div>
            
      </div>
    <hiring-item v-for="developer in allHirings" :key="developer.id" :developer="developer"></hiring-item>
    </div>
      </div>
    </div>
    <developer-popup
        v-if="addDeveloperPopup"
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
import AppInput from "@/components/Utility/AppInput";
import DeveloperPopup from "@/components/Developer/DeveloperPopup";
import DeveloperItem from "@/components/Developer/DeveloperItem";
import HiringItem from "@/components/Developer/HiringItem";
export default {
  components:{
    DeveloperPopup,
    DeveloperItem,
    AppInput,
    HiringItem,
  },
  data(){
    return{
      errorStartDate: false,
      errorEndDate: false,
      today: new Date().toISOString().split('T')[0],
      workStartDate: null,
      workEndDate: null,
      addDeveloperPopup: false,
      editDeveloperPopup: false,
      editingDeveloper: -1,
      developerCart: []
    }
  },

  computed:{
    developers(){
      return this.$store.getters['developers']
    },
    availableDevelopers(){
      return this.$store.getters['availableDevelopers'];
    },
    allHirings(){
      return this.$store.getters['allHirings']
    }
  },
  methods:{
    addDeveloperToCart(data){
      if(data.add){
        this.developerCart.push({
          developer_id: data.id,
          startDate: new Date(this.workStartDate),
          endDate: new Date(this.workEndDate),
        })
      }
      else{
        this.developerCart = this.developerCart.filter(cartItem => cartItem.developer_id !== data.id)
      }
    },
    hireDevelopers(){
      this.$store.dispatch('hireDevelopers',{
        developerCart: this.developerCart
      }).then(() => {
        this.$store.dispatch('showAvailableDevelopers',{
        workStartDate: this.workStartDate,
        workEndDate: this.workEndDate
      }) 
      })
      
    },
    openDeveloperCreatePopup(){
      this.addDeveloperPopup = true;
    },
    openDeveloperEditPopup(id){
      this.editingDeveloper = id
      console.log(this.editingDeveloper)
      this.editDeveloperPopup = true
    },
    refreshTable(){
      this.errorStartDate = false;
      this.errorEndDate = false;
      if(this.workStartDate === null){
        this.errorStartDate = true;
        return;
      }
      if(this.workEndDate === null){
        this.errorEndDate = true;
        return;
      }
      if(this.workStartDate < this.today){
        this.errorStartDate = true;
        return;
      }
      if(this.workStartDate >= this.workEndDate){
        this.errorStartDate = true;
        this.errorEndDate = true;
        return;
      }
      this.$store.dispatch('showAvailableDevelopers',{
        workStartDate: this.workStartDate,
        workEndDate: this.workEndDate
      })
    }
  }
}
</script>

<style>

</style>
