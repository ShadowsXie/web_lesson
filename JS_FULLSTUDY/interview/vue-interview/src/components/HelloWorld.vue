<template>
  <div class="hello">
    <p>
      {{msg}}
    </p>
    <button @click="toParent">click</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    toParent() {
      this.$emit('getData', '来自子组件的数据')
    }
  },
  beforeCreate() {
    console.log('Hello beforeCreate');
  },
  created() {
    console.log('Hello created');
  },
  beforeMount() {
    console.log('Hello beforeMounted');
  },
  mounted() {
    console.log('Hello mounted');
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
