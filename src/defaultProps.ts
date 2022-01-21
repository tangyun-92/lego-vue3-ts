import { mapValues, without } from 'lodash-es'

export interface CommonComponentProps {
  // actions
  actionType: string;
  url: string;
  // size
  height: string;
  width: string;
  paddingLeft: string;
  paddingRight: string;
  paddingTop: string;
  paddingBottom: string;
  // border type
  borderStyle: string;
  borderColor: string;
  borderWidth: string;
  borderRadius: string;
  // shadow and opacity
  boxShadow: string;
  opacity: string;
  // position and x,y
  position: string;
  left: string;
  top: string;
  right: string;
}
export const commonDefaultProps = {
  // action
  actionType: '',
  url: '',
  // size
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
}

export interface TextComponentProps extends CommonComponentProps {
  text: string;
  fontSize: string;
  fontFamily: string;
  fontWeight: string;
  fontStyle: string;
  textDecoration: string;
  lineHeight: string;
  textAlign: string;
  color: string;
  backgroundColor: string;
}
export const textDefaultProps = {
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps,
}

// 方式一：使用lodash-es
export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'actionType',
  'url',
  'text'
)

// 方式二：通过es6过滤
// const removePropArray = ['actionType', 'url', 'text']
// export const textStylePropNames = Object.keys(textDefaultProps).filter(
//   (item) => !removePropArray.some((ele) => item === ele)
// )

// 方法一
export const transformToComponentProps = <T extends {}>(
  props: T
) => {
  return mapValues(props, (item) => {
    return {
      type: (item as any).constructor as StringConstructor, // 通过constructor可以拿到属性的类型
      default: item,
    }
  })
}

// 方法二
// export const transformToComponentProps = <T extends { [key: string]: any }>(
//   props: T
// ) => {
//   const list = Object.getOwnPropertyNames(props).map((item: string) => {
//     return {
//       type: props[item].constructor,
//       default: props[item],
//       name: item,
//     }
//   })
//   const obj = Object.assign(props)
//   list.map((item) => {
//     for (const o in obj) {
//       if (item.name === o) {
//         obj[o] = item
//       }
//     }
//   })
//   return obj
// }
