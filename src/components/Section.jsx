// Обертка секций, отвечает за расположение детей

const styleByType = {
  news: 'news-section',
  search: 'search-section',
  info: 'info-section',
}

const Section = ({ style, children }) => {
  return (
    <section className={styleByType[style]}>
      {children}
    </section>
  )
}

export default Section;