export default {
  functional: true,

  props: {
    components: Array,
    importList: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  render (c, context) {
    function getComponent (item) {
      // const key = Object.keys(context.props.importList).find(x => x === `${item.name}-${item.id}`)
      return context.props.importList[item.name]
    }
    const childs = context.props.components.map(item => c(getComponent(item), {
      props: {
        ...item.props
      }
    }))

    return c('div', {
      'class': {
        'components': true
      },
      attrs: {
        'data-id-sort': context.props.components.map(x => x.id).join(',')
      }
    }, childs)
  }
}
