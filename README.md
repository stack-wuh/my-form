# my-form

> ui component for vue base on element-ui, json 2 form

## Preview
```bash 
# clone
git clone git@github.com:stack-wuh/my-form.git

cd example

npm install 

npm run dev
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 使用
### WForm
#### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| fieldList | form表单的JSON配置列表 | Array | none |
| model | 双向绑定对象 | Object | none |

### FieldList 配置
> 二维数组, 小数组代表行, 小数组内的对象代表列        
> 满足了单行多列的需求
```javascript
[
  [
    {
      label: 'first name', // -- 表单项目的Label
      field: 'firstName', // -- 表单项目绑定的key
      props: {}, // 深度配置对象, 同element配置
    },
    {
      label: 'last name',
      field: 'lastName'
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
        }
      ]
    },
    {
      label: 'birth',
      field: 'birth',
      type: 'date',
      props: {
        type: 'date',
        placeholder: '出生日期'
      }
    }
  ],
  [
    {
      label: 'smart',
      field: 'smart',
      type: 'switch'
    }
  ],
  [
    {
      label: 'avatar',
      field: 'avatar',
      type: 'upload',
      props: {
        type: 'image', // image: 单张图片, images: 多张图片, file: 上传文件
        action: 'https://www.baidu.com'
      }
    }
  ]
]
```

### type List
| name |  说明 | 默认值 |
| :-- | :-- | :-- |
| default, normal, undefined, null | 全部默认为Input输入框 | input |
| select | el-select, 下拉框 | -- |
| date, daterange | 日期, 日期区间 | date |
| switch | switch组件 | -- |
| upload | 文件上传组件 | file, 文件类型的上传 |
| custom | 自定义区域 | component |

### Feature custom
> 功能性属性配置, 用于FieldList中需要多级联动的处理

| name | 说明 | 类型 |
| :-- | :-- | :-- |
| handle | 处理表单项目中, disbaled属性的设置 | Function, Boolean |
| ifRender | 处理表单项目中, 选择了A才能出现B或者是选择B的情况 | Function, Boolean |
| validator | 表单项目Rules的配置项 | Function, Array |



### ImageGroup 图片展示
#### Props
| 参数 | 说明| 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| list | 所有图片的数组 | Array | none |
| show-close | 是否展示右上角Close图标 | true |

#### image list option
> 图片的进出场动画要求_id值唯一
```javascript
{
  _id: String, Number, // 值唯一
  mini: src, // 缩略图
  default: src // 原图
}
```

### ImageItem 
#### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| width | 图片宽度 | String | 220px |
| height | 图片高度 | String | 220px |
| show-close | 是否展示右上角Close图标 | Boolean | true |
| url | 每一张Image的地址对象 | Object | none | 