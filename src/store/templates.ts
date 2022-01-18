import { Module } from 'vuex'
import { GlobalDataProps } from './index'

export interface TemplateProps {
  id: number;
  title: string;
  coverImg: string;
  author: string;
  copiedCount: number;
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

export interface TemplatesProps {
  data: TemplateProps[];
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: testData,
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      return state.data.find((t) => t.id === id)
    },
  },
}

export default templates