<template>
  <div>
      <select name="" class="px-3 py-1 w-full border-blue-900 focus:border-2" :value="selectValue" @change="emitChange">
          <option value="">-- select --</option>
          <option
            v-for="option in options"
            :value="option"
            :key="option">

            {{option}}

          </option>
      </select>
  </div>
</template>

<script>
export default {
props:{
  options: {
    type: Array,
    required: true
  },
  value:{
    required: true
  },
  name:{
    required: true
  }
},
methods:{
  emitChange($event){
    this.$emit('input', $event.target.value)
  }
},
computed:{
  selectValue:{
    get(){
      return this.value;
    },
    set(value){
      this.value = value;
    }
  }
}
}
</script>

