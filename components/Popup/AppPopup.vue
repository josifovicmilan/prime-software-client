<template>
  <div class="fixed top-0 left-0 w-full h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="bg-gray-200 w-full rounded-xl shadow-md sm:w-2/3 md:w-1/2">
        <div class="flex items-center justify-end text-gray-600 hover:text-red-500" @click="closePopup">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-2 fill-current cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="m-2">
            <slot></slot>
        </div>
    </div>
  </div>
</template>

<script>


export default {
    methods:{
        closePopup(){
            return this.$emit('closePopup')
        }
    }

}
</script>

<style>

</style>
