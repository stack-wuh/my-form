<template>
  <section class='c-image'>
    <transition-group name="fade" tag="div">
      <div 
        class="c-image__outer"
        v-for="(item, index) in list.slice(0, max)"
        :key="item._id || index">
          <div class="c-image__inner">
              <my-image-item
                :width="width"
                :height="height"
                :key="'image-group' + index" 
                @on-delete="handleDel(index)" 
                :url="item" 
                :show-close="true">
              </my-image-item>
          </div>
      </div>
    </transition-group>
  </section>
</template>

<script>
 import MyImageItem from './image-item'
 export default{
  name: 'WImage',
  components: {
    MyImageItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    max: [String, Number],
    width: String,
    height: String
  },
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {
    handleDel(index){
      this.list.splice(index, 1)
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.fade-enter-active {
  animation: fade-in .4s ease forwards;
}
.fade-leave-active {
  animation: fade-out .4s ease forwards;
}
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fade-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10%);
  }
}
.c-image {
  width: 100%;
  height: 100%;

  &>div{
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .c-image__outer {
      margin: 0 15px 15px 0;
    }
  }
}
</style>