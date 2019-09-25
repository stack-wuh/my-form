import ImageItem from '../image/src/image-item'

ImageItem.install = function (Vue) {
  Vue.component(ImageItem.name, ImageItem)
}

export default ImageItem