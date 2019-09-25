<template>
  <div id="app">
    <img src="./assets/logo.png">
    <w-form :fieldList="fieldList" v-model="form"></w-form>
    <WImage :list="images"></WImage>
  </div>
</template>

<script>
const Remark = {
  template: `
    <div class="c-wrap">
      <h3>this's my remark</h3>
    </div>
  `
}
const fieldList = [
  [
    {
      label: 'first name',
      field: 'firstName',
      handle: () => true
    },
    {
      label: 'last name',
      field: 'lastName',
      validator: () => [
        {
          required: true,
          message: '请编辑姓氏',
          trigger: ['blur', 'change']
        }
      ]
    }
  ],
  [
    {
      label: 'sex',
      field: 'sex',
      type: 'select',
      list: [
        {
          label: '男',
          value: 1
        },
        {
          label: '女',
          value: 0
        }
      ]
    },
    {
      label: 'birth',
      field: 'birth',
      type: 'date',
      props: {
        placeholder: '出生日期'
      }
    },
    {
      label: 'mary',
      field: 'mary',
      type: 'select',
      list: [
        {
          label: '是',
          value: 1
        },
        {
          label: '否',
          value: 0
        }
      ]
    }
  ],
  [
    {
      label: 'smart',
      field: 'smart',
      type: 'switch',
      props: {
        activeText: '是',
        inactiveText: '否'
      },
      ifRender: (form) => {
        let { lastName } = form
        if (!/[a-z]{4}/.test(lastName)) {
          return true
        }  
      }
    }
  ],
  [
    {
      label: 'avatar',
      field: 'avatar',
      type: 'upload',
      props: {
        type: 'image',
        action: 'https://www.baidu.com'
      }
    }
  ],
  [
    {
      label: 'remark',
      field: 'remark',
      type: 'custom',
      component: Remark
    }
  ]
]
export default {
  name: 'app',
  data () {
    return {
      fieldList,
      form: {},
      images: [
        {
          _id: 1,
          mini: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg?ve=1&tl=1',
          default: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg?ve=1&tl=1'
        },
        {
          _id: 2,
          mini: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg?ve=1&tl=1',
          default: 'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/07/931/524/creepy-cat.jpg?ve=1&tl=1'
        }
      ],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
