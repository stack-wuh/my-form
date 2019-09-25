<template>
  <section 
    ref="father"
    class='c-image-item'
    :style="[imageRectStyle]">
      <div class="c-image-item__outer">
        <div class="c-image-item__inner" :style="[imageBackStyle]"></div>
        <div @click="handleClick" class="c-image__preview">
          <span class="el-icon-view e-icon"></span>
        </div>
      </div>
      <span v-if="showClose" @click="$emit('on-delete')" class="b-close el-icon-error"></span>
      <transition name="fade" mode='out-in'>
        <section 
          @click="isShowDialog = false" 
          v-if="isShowDialog" 
          class="b-full-dialog">
            <img :src="url.default" alt="bg-avatar-full">
        </section>
      </transition>
  </section>
</template>

<script>
 export default{
  name: 'WIamgeItem',
  components: {},
  props: {
    width: String,
    height: String,
    url: {
      type: Object,
      default: () => ({
        mini: 'https://c.pxhere.com/photos/27/76/cat_ma_czy_tomcat_kitten_animal_charming-987621.jpg!d',
        'default': 'https://c.pxhere.com/photos/27/76/cat_ma_czy_tomcat_kitten_animal_charming-987621.jpg!d'
      })
    },
    showClose: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
    imageRectStyle(){
      var style = {}
      style.width = this.width + 'px'
      style.height = this.height + 'px'
      return style
    },
    imageBackStyle(){
      var style = {
        backgroundImage: "url("+ this.url.mini +")",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
      return style
    }
  },
  data(){
    return {
      isShowDialog: false
    }
  },
  methods: {
    handleClick(){
      this.isShowDialog = true
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.fade-enter-active {
  animation-name: fade-in;
  animation-duration: .4s;
  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
}
.fade-leave-active {
  animation-name: fade-in;
  animation-duration: .3s;
  animation-timing-function: cubic-bezier(0.55, 0.085, 0.68, 0.53);
  animation-direction: reverse;
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
.c-image-item {
  position: relative;
  width: 220px;
  height: 220px;
  border: 1px solid #e9e9e9;
  border-radius: 4px;

  &__outer,
  &__inner {
    position: relative;
    width: inherit;
    height: inherit;
  }
  &__inner {
    overflow: hidden;
    &:hover {
      cursor: pointer;
    }
  }
  &__outer {
    &:hover {
      & .c-image__preview {
        visibility: visible;
      }
    }
  }
  &__outer {
    .c-image__preview {
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      background-color: rgba(0, 0, 0, .4);
      z-index: 1000;
      &:hover {
        cursor: pointer;
      }
      .e-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 40px;
        color: #fff;
      }
    }
  }
  .b-close {
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%) translateY(-50%);
    z-index: 1000;
    color: rgb(233, 36, 36);
    background-color: #fff;
    border-radius: 50%;
    font-size: 20px;
    &:hover {
      cursor: pointer;
    }
  }
}
.b-full-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2000;

  img[alt="bg-avatar-full"] {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: auto;
    max-width: 100%;
    user-select: none;
  }
}

</style>