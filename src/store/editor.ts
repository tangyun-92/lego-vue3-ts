import { Module } from 'vuex'
import { GlobalDataProps } from './index'
import { v4 as uuidv4 } from 'uuid'
import { TextComponentProps } from '../defaultProps'

export interface EditorProps {
  // 中间编辑器渲染的数组
  components: ComponentData[];
  // 当前编辑的是哪个元素
  currentElement: string;
}
export interface ComponentData {
  props: { [key: string]: any };
  // 通过 uuid v4 生成
  id: string;
  name: string;
}

export const testComponents: ComponentData[] = [
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello',
      fontSize: '20px',
      color: 'red',
      lineHeight: '1',
      textAlign: 'left',
      fontFamily: '"SimSun","STSong"',
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello1',
      fontSize: '10px',
      fontWeight: 'bold',
      lineHeight: '2',
      textAlign: 'right',
      fontFamily: '"SimHei","STHeiti"',
    },
  },
  {
    id: uuidv4(),
    name: 'LText',
    props: {
      text: 'hello2',
      fontSize: '15px',
      actionType: 'url',
      url: 'https://www.baidu.com',
    },
  },
]

const editor: Module<EditorProps, GlobalDataProps> = {
  state: {
    components: testComponents,
    currentElement: '',
  },
  mutations: {
    addComponent(state, props: Partial<TextComponentProps>) {
      const newComponent: ComponentData = {
        id: uuidv4(),
        name: 'LText',
        props,
      }
      state.components.push(newComponent)
    },
    setActive(state, currentId: string) {
      state.currentElement = currentId
    },
    updateComponent(state, { key, value }) {
      const updateComponent = state.components.find(component => component.id === state.currentElement)
      if (updateComponent) {
        updateComponent.props[key as keyof TextComponentProps] = value
      }
    }
  },
  getters: {
    getCurrentElement: (state) => {
      return state.components.find((com) => com.id === state.currentElement)
    },
  },
}

export default editor
