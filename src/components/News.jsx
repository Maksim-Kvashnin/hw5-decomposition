// Основной контент секции новостей, отображает категории, статьи, и доп. информацию

const News = ({ newsList, burseList }, index) => {
  return (
    <div className="news">
      <div className="categories">
        <span className="category">Сейчас в СМИ</span>
        <span className="category">в Германии</span>
        <span className="category">Рекомендуем</span>
      </div>
      <div className="news-prew">
        {newsList.map(news => <div className="news-item" key={index}>
            <img className="news-icon" src={news.icon} alt="***" />
            <a key={index} className="news" href={news.link}>{news.prew}</a>
          </div>)}
      </div>
      <div className="burse">
        {burseList.map(item => <div key={index}>
          <span><span className="burse-item">{item.item}</span> {item.price} {item.changes}</span>
        </div>)}
      </div>
    </div>
  )
}

export default News;
