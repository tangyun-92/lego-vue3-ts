import { createStore } from 'vuex'
import { TemplatesProps } from './templates'
import user, { UserProps } from './user'
import templates from './templates'

export interface GlobalDataProps {
  user: UserProps;
  templates: TemplatesProps;
}

const store = createStore({
  modules: {
    user,
    templates,
  },
})

export default store
