// поисковая строка и кнопка

const Search = () => {
  return (
    <div className="search">
      <img src="https://cons-teh.ru/upload/iblock/4f6/x5xor9it6faocy5g4pu0k62nygnlesfy.png" alt="" />
      <input type="text" />
      <button>Найти</button>
      <div className="search-subtitle">Найдется всё. Например, <span>фаза луны сегодня</span></div>
    </div>
  )
}

export default Search;