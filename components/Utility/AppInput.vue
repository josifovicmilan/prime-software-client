<template>
      <input
        :min="min"
        :type="type"
        :name="name"
        class="w-full px-3 py-2 border border-blue-900 outline-none shadow-sm focus:border-4 focus:border-indigo-600 focus:border-blue-900"
        :value="value"
        @change="$emit('input', $event.target.value)
        ">
</template>

<script>
export default {

props:{
  type: {
    type: String,
    required: true
  },
  value:{
    required: true
  },
  name:{
    required: true
  },
  min:{
    required: false
  }
},
}
</script>

<style>

</style>
