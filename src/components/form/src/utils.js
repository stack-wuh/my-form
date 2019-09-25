const toString = Object.prototype.toString

export const isFunc = target => toString.call(target) === '[object Function]'

export const isBool = target => toString.call(target) === '[object Boolean]'

export const isArray = target => toString.call(target) === '[object Array]'

export default {
  isFunc,
  isBool,
  isArray
}