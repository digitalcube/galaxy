const createContext = (initialValue) => {
  return {
    name: `Context.i18n`,
    props: ["value"],
    watch: {
      value: function (newValue, oldValue) {
        this.$root._i18n.locale = newValue.locale
      },
    },
    template: `<div><slot /></div>`,
  }
}

const i18nContext = createContext({
  locale: "en",
})

export const contexts = [
  {
    icon: "globe",
    title: "Languages",
    components: [i18nContext],
    params: [
      {
        name: "English",
        props: {
          value: { locale: "en" },
        },
      },
      {
        name: "Japanese",
        props: {
          value: { locale: "ja" },
        },
      },
    ],
  },
]
