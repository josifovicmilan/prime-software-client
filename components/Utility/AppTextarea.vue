<template>
      <textarea
        :name="name"
        class="w-full px-3 py-2 border border-blue-900 outline-none shadow-sm focus:border-4 focus:border-indigo-600 focus:border-blue-900"

        :value="value"
        @change="$emit('input', $event.target.value)
        ">
      </textarea>
</template>

<script>
export default {

props:['type','value','name'],

}
</script>

<style>

</style>
