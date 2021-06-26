<template>
  <button :class="mode" class=" uppercase font-semibold flex text-sm items-center py-2 px-3 rounded-md shadow-xl m-1">
      <div :class="icon" class="">
        <slot name="icon">

        </slot>
      </div>
        <div class="">{{ btnText }}</div>
      </button>
</template>

<script>
export default {
    props:['btnText', 'mode' , 'icon']
}
</script>

<style>

</style>
