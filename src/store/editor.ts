import { Module } from 'vuex'
import { GlobalDataProps } from './index'
import { v4 as uuidv4 } from 'uuid'

export interface EditorProps {
  // 中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素
  currentElement: string;
}
interface ComponentData {
  props: { [key: string]: any };
  // 通过 uuid v4 生成
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [
  { id: uuidv4(), name: 'l-text', props: { text: 'hello' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello1' } },
  { id: uuidv4(), name: 'l-text', props: { text: 'hello2' } },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: ''
  }
}

export default editor