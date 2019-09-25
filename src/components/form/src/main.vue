<template>
  <section class='c-form'>
    <el-form :model="form" ref="myForm" :label-width="labelWidth">
      <template v-for="(item, index) in fieldList">
          <!-- 一行多列布局 -->
          <div 
            v-if="Array.isArray(item)"
            :key="index + 'form-item__gorup'"
            class="b-form-item__group">
              <template v-for="(cc, cid) in item">
                <transition name='fold' mode="in-out" :key="cid + 'form-item__tansition-group'">
                  <div 
                    v-if="cc.ifRender ? (Types.isFunc(cc.ifRender) ? cc.ifRender(form) : cc.ifRender) : true"
                    class="b-form-item__outer" :key="cid + 'form-item__outer'">
                    <el-form-item
                      :label="cc.label"
                      :prop="cc.field"
                      :key="cid + 'form-item'"
                      class="b-form-item"
                      :style="[cc.style]"
                      :rules="Types.isFunc(cc.validtor) ? cc.validtor(form) : cc.validtor">
                        <template v-if="['default', 'normal', undefined, null].includes(cc.type)">
                            <el-input
                              :disabled="itemDisabledBy(cc)" 
                              v-model="form[cc.field]" 
                              v-bind="cc.props">
                            </el-input>
                        </template>
                        <template v-else-if="['select'].includes(cc.type)">
                            <el-select
                              :disabled="itemDisabledBy(cc)" 
                              v-model="form[cc.field]">
                                <el-option 
                                  v-for="(op, od) in cc.list"
                                  :key="'op' + od"
                                  :label="op.label"
                                  :value="op.value">
                                </el-option>
                            </el-select>
                        </template>
                        <template v-else-if="['date', 'daterange'].includes(cc.type)">
                            <el-date-picker
                              :disabled="itemDisabledBy(cc)" 
                              value-format="yyyy-MM-dd hh:mm:ss"
                              v-bind="cc.props"
                              v-model="form[cc.field]">
                            </el-date-picker>
                        </template>
                        <template v-else-if="['switch'].includes(cc.type)">
                            <el-switch
                              v-bind="cc.props"
                              :disabled="itemDisabledBy(cc)"
                              v-model="form[cc.field]">
                            </el-switch>
                        </template>
                        <template v-else-if="['upload'].includes(cc.type)">
                            <my-upload
                              :max="max"
                              :disabled="itemDisabledBy(cc)"
                              v-bind="cc.props"
                              v-model="form[cc.field]">
                            </my-upload>
                        </template>
                        <template v-else-if="['custom'].includes(cc.type)">
                            <component v-if="cc.component" :is="cc.component" v-bind="cc" :scope="{ fields: cc, form }"></component>
                            <slot v-else name="custom" :scope="{ fields: cc, form }"></slot>
                        </template>
                    </el-form-item>
                  </div>
                </transition>
              </template>
          </div>
      </template>

      <el-form-item v-if="!$slots.button" class="b-form-item__outer">
        <el-button @click="$emit('on-submit')" size="small" type="primary">submit</el-button>
        <el-button @click="$emit('on-cancel')" size="small" type="danger">cancel</el-button>
        <el-button @click="$emit('on-keep')" size="small" type="info">keep</el-button>
      </el-form-item>
      <el-form-item class="b-form-item__outer" v-else>
        <slot name='button'></slot>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
 import Types from './utils'
 import MyUpload from '../../upload/src/main'
 export default{
  name: 'WForm',
  components: {
    MyUpload
  },
  model: {
    prop: 'form',
    event: 'change'
  },
  props: {
    fieldList: {
      type: Array,
      default: () => []
    },
    form: Object,
    labelWidth: {
      type: String,
      default: '120px'
    },
    max: {
      type: [String, Number],
      default: 1
    }
  },
  watch: {},
  computed: {},
  data(){
    return {
      Types
    }
  },
  methods: {
    /***
     * @return Boolean
     */
    itemDisabledBy(item){
      return item.handle ?
              (Types.isFunc(item.handle) ? item.handle(this.form) : item.handle)
                : false
    }
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.fold-enter-active {
  animation-name: fold-in;
  animation-duration: .5s;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}
.fold-leave-active {
  animation-name: fold-in;
  animation-duration: .3s;
  animation-direction: reverse;
  animation-timing-function: cubic-bezier(0.47, 0, 0.745, 0.715);
}
@keyframes fold-in {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.c-form {
  .b-form-item__group {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
  }
  .b-form-item__outer{
    flex: 1;
    text-align: left;
  }
  .b-form-item {
  }
}
</style>