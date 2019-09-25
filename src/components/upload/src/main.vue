<template>
  <section class='c-upload'>
    <template v-if="['file', 'files'].includes(type)">
        <el-upload
          :action='action'>
            <div slot="tip">{{tipText}}</div>
            <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
    </template>
    <template v-else-if="['image', 'images'].includes(type)">
      <el-upload
        class="avatar-uploader"
        :action="action"
        :show-file-list="false">
        <i v-if="Types.isArray(files) ? files.length < max : true" class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
        <my-image-group :width="width" :height="height" v-if="files" :list="files"></my-image-group>
    </template>
  </section>
</template>

<script>
 import MyImageGroup from '../../image/src/main'
 import Types from '../../form/src/utils'
 export default{
  name: 'WUpload',
  components: {
    MyImageGroup
  },
  model: {
    prop: 'files',
    event: 'change'
  },
  props: {
    files: {
      type: [String, Array],
      default: () => []
    },
    disabled: Boolean,
    type: String,
    action: String,
    tipText: String,
    max: [String, Number],
    width: String,
    height: String
  },
  watch: {},
  computed: {},
  data(){
    return {
      Types
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-upload {

}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }
</style>