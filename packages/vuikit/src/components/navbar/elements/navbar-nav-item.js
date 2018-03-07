import mergeData from 'vuikit/src/util/vue-data-merge'
import ElementIcon from 'vuikit/src/components/icon/elements/icon'

export default {
  functional: true,
  props: {
    icon: {},
    href: String,
    target: String,
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  render (h, { props, data, children }) {
    const { active, title, subtitle, icon, href, target } = props

    const Icon = icon && h(ElementIcon, {
      class: 'uk-margin-small-right'
    }, [ icon ])

    const Subtitle = subtitle && h('div', [ title, h('div', {
      class: 'uk-navbar-subtitle'
    }, subtitle) ])

    return h('li', mergeData(data, {
      class: { 'uk-active': active }
    }), [
      h('a', {
        attrs: { href, target }
      }, [
        Icon,
        Subtitle || title
      ]),
      children
    ])
  }
}