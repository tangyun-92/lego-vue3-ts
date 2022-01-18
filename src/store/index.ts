import { createStore } from 'vuex'

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
}

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplateProps[];
}

const testData: TemplateProps[] = [
  {
    id: 1,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-889755.png',
  },
  {
    id: 2,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg: 'http://static-dev.imooc-lego.com/imooc-test/sZHlgv.png',
  },
  {
    id: 3,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-323204.png',
  },
  {
    id: 4,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-677311.png',
  },
  {
    id: 5,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-726751.png',
  },
  {
    id: 6,
    title: '测试标题',
    author: 'ty',
    copiedCount: 2,
    coverImg:
      'https://static.imooc-lego.com/upload-files/screenshot-682056.png',
  },
]

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    templates: testData
  }
})

export default store