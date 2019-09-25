import ImageGroup from './src/main.vue'

ImageGroup.install = function (Vue) {
  Vue.component(ImageGroup.name, ImageGroup)
}
export default ImageGroup