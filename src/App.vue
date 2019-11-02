<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyForm ref="MyForm" v-model="search" :fieldList="fieldList"></MyForm>

    <my-image-item :show-close="false"></my-image-item>
    <my-image-group :max="10" :list="images"></my-image-group>
    <el-button @click="handleImage">addImage</el-button>
  </div>
</template>

<script>
import MyForm from './components/form/src/main'
import MyImageItem from './components/image/src/image-item'
import MyImageGroup from './components/image/src/main'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      fieldList: [
        [{
          label: 'name',
          field: 'name',
          type: 'normal',
          props: {
            placeholder: '请编辑姓名'
          },
          handle: (form) => {
            return false
          },
          validator: [
            {
              required: false,
              message: '请编辑姓名',
              trigger: ['blur']
            }
          ]
        }],
        [
          {
            label: 'city',
            field: 'city',
            type: 'normal',
            handle: false,
            validator: () => [
              {
                required: true,
                message: '请编辑城市',
                trigger: ['blur', 'change', 'fouce']
              }
            ]
          },
          {
            label: 'address',
            field: 'address',
            type: 'normal',
            handle: (form) => {
              let { city } = form
              if (!city) {
                return true
              }
              return false
            },
            validator: (form) => {
              let { city } = form
              if (city) {
                return [
                  {
                    required: true,
                    message: '请编辑地址',
                    trigger: ['blur']
                  }
                ]
              }
            }
          }
        ],
        [
          {
            label: 'sex',
            field: 'sex',
            type: 'select',
            list: [
              {
                label: 'AAA',
                value: 1
              },
              {
                label: 'BBB',
                value: 2
              }
            ]
          },
        ],
        [
          {
            label: 'base in sex for 1',
            field: 'baseinsex',
            type: 'normal',
            ifRender: (form) => {
              let { sex } = form
              return sex === 1
            }
          }
        ],
        [
          {
            label: 'date',
            field: 'date',
            type: 'date',
            props: {
              type: 'date'
            }
          }
        ],
        [
          {
            label: 'daterange',
            field: 'daterange',
            type: 'daterange',
            props: {
              type: 'daterange',
              startPlaceholder: 'AA',
              endPlaceholder: 'BB'
            }
          }
        ],
        [
          {
            label: 'state',
            field: 'state',
            type: 'switch',
            handle: (form) => {
              return false
            }
          }
        ],
        [
          {
            label: 'avatar',
            field: 'avatar',
            type: 'upload',
            props: {
              type: 'file',
              action: 'https://www.baidu.com',
              tipText: '这里是tip'
            }
          }
        ],
        [
          {
            label: 'imgs',
            field: 'imgs',
            type: 'upload',
            props: {
              type: 'image',
              action: 'https://www/baidu.com',
              width: '100',
              height: '120'
            }
          }
        ]
      ],
      search: {},
      images: []
    }
  },
  components: {
    MyForm,
    MyImageItem,
    MyImageGroup
  },
  methods: {
    handleImage(){
      var obj = {
          _id: Math.random(),
          mini: 'https://c.pxhere.com/photos/27/76/cat_ma_czy_tomcat_kitten_animal_charming-987621.jpg!d',
          default: 'https://c.pxhere.com/photos/27/76/cat_ma_czy_tomcat_kitten_animal_charming-987621.jpg!d'
        }
      this.images.push(obj)
    }
  },
  created () {
    console.log(this, 'this is app.vue this')
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
