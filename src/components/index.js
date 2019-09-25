import Form from './form/index.js'
import Upload from './upload/index.js'
import ImageGroup from './image/index.js'
import ImageItem from './image-item/index.js'

const components = [
  Form,
  Upload,
  ImageGroup,
  ImageItem
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: '0.0.1',
  install,
  WForm: Form,
  WUpload: Upload,
  WImageGroup: ImageGroup,
  WImageItem: ImageItem
}