/*
* @Author: TangYun
* @Date: 2022/2/18 10:15
* @Description: 导入.vue文件的定义文件
*/
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
