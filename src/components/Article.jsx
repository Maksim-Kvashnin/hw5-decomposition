// Элемент справа секции News, разные статьи

const Article = ({ article }) => (<div className="artictle">
  <img src={article.img} alt="#" />
  <a href={article.link}></a>
  <span>{article.title}</span>
  <span>{article.subtitle}</span>
  </div>)

export default Article;
