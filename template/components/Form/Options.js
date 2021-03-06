import Base from './Base'

export default {
  mixins: [Base],
  props: {
    items: {
      type: Array,
      required: true
    },
    value: {
      //
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    normalizedItems () {
      if (Object.isObject(this.items)) {
        return this.items.reduce((items, label, value) => [...items, { label, value }], [])
      }

      if (Array.isArray(this.items)) {
        return this.items.map(item => {
          if (Object.isObject(item)) {
            return item
          }

          return { label: item, value: item }
        })
      }

      return []
    }
  },
  methods: {
    handleChange (e) {
      return this.$emit('change', e.target.value)
    }
  }
}
