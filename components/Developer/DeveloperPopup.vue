<template>
  <app-popup @closePopup="$emit('closePopup')">
    <p v-if="errors.length">
     Please correct the following error(s):
    <ul >
      <li class="text-red-700" v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </p>
        <div class="p-1 flex items-center">
            <label
               for="devName"
               class="w-1/4 text-sm text-gray-800 text-sm text-gray-800">
               Name <span class="text-red-600 text-base">*</span>
            </label>
            <app-input
               v-model="developer.devName"
               :type="'input'"
               :name="'developer.devName'"
            >
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
               for="email"
               class="w-1/4 text-sm text-gray-800 text-sm text-gray-800">
              Email<span class="text-red-600 text-base">*</span>
            </label>
            <app-input
              v-model="developer.email"
              :type="'input'"
              :name="'developer.email'">
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="phone">
                Phone number<span class="text-red-600 text-base">*</span>
            </label>
            <app-input
              v-model="developer.phone"
              :type="'input'"
              :name="'developer.phone'">
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="location">
                Location<span class="text-red-600 text-base">*</span>
            </label>
            <app-input
              v-model="developer.location"
              :type="'input'"
              :name="'developer.location'">
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="picture">
                Profile picture (url)
            </label>
            <app-input
              v-model="developer.picture"
              :type="'input'"
              :name="'developer.picture'">
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="price">
                Price per hour<span class="text-red-600 text-base">*</span>
              </label>
            <app-input
              v-model="developer.price"
              :type="'number'"
              :name="'developer.price'"
            ></app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="tehnology">
                Tehnology<span class="text-red-600 text-base">*</span>
            </label>
            <app-select
              v-model="developer.tehnology"
              :name="'developer.tehnology'"
              :options='tehnologies'></app-select>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="description">
              Description
            </label>
            <app-textarea
              v-model="developer.description"
              :name="'developer.description'">
            </app-textarea>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="experiance">
                Years of experiance <span class="text-red-600 text-base">*</span>
              </label>
            <app-input
              v-model="developer.experiance"
              :type="'number'"
              :name="'developer.experiance'">
            </app-input>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="language">
                Language<span class="text-red-600 text-base">*</span>
            </label>
            <app-select
              v-model="developer.language"
              :name="'developer.language'"
              :options='languages'>
            </app-select>
        </div>
        <div class="p-1 flex items-center">
            <label
                class="w-1/4 text-sm text-gray-800"
                for="linkedIn">LinkedIn profile (url)</label>
            <app-input
              v-model="developer.linkedIn"
              :type="'number'"
              :name="'developer.linkedIn'">
            </app-input>
        </div>
        <div class="flex items-center justify-end py-3 px-2">
            <app-button v-if="editing" :mode="'btn-yellow'" :btn-text="'Update developer'" @click.native="updateDeveloper"></app-button>
            <app-button v-else :mode="'btn-blue'" :btn-text="'Add developer'" @click.native="addDeveloper"></app-button>
        </div>

  </app-popup>
</template>

<script>

import AppPopup from "@/components/Popup/AppPopup";
import AppInput from "@/components/Utility/AppInput";
import AppSelect from "@/components/Utility/AppSelect";
import AppButton from "@/components/Utility/AppButton";
import AppTextarea from "@/components/Utility/AppTextarea";

export default {
   components:{
        AppPopup,
        AppInput,
        AppButton,
        AppSelect,
        AppTextarea
    },
    props:{
      editDeveloper:{
        required: false
      }
      },
    data(){
        return{
          errors:[],
          newDeveloper:{
            devName: '',
            email: '',
            phone: '',
            location: '',
            picture: '',
            price: '',
            tehnology: '',
            description: '',
            experiance: '',
            language: '',
            linkedIn: '',
          },
          languages: ['Serbian', 'English', 'Bulgarian'],
          tehnologies: ['Javascript', 'Java', '.NET', 'Flutter', 'Python', 'PHP'],

        }
    },
    methods:{
      addDeveloper(){
        this.errors = [];
        this.$store.dispatch('addDeveloper',{
          developer: this.developer
        }).then((response)=>{
          if(response.error){
            this.errors.push(response.error)
          }
          else{
            this.$emit('closePopup');
          }
        })
      },
      updateDeveloper(){
        this.errors = [];
          this.$store.dispatch('updateDeveloper', {
            developer: this.developer
          }).then((response) =>{
            if(response.error){
              this.errors.push(response.error)
            }
            else{
              this.$emit('closePopup')

            }
          })
      }
    },
    computed:{
      developer:{
        get: function(){
          console.log('getting developer')
          if(this.editDeveloper !== undefined ){
            return {...this.editDeveloper};
          }
          else{
            return this.newDeveloper;
          }
        },
        set: function(newValue){
          this.developer = newValue
        }
      },
    editing(){
        if(this.editDeveloper !== undefined){
          return true;
        }
        return false;
      }
    },

}
</script>

<style>

</style>
