// Секция виджетов

const AllWidget = ({ count }) => {
  const arr = [];
  for (let i = 1; i <= count; i++){
    arr.push(`widget ${i}`);
  }
  return (
    <div className="widgetes">
      {arr.map(item => <div className="widget" key={item}>{item}</div>)}
    </div>
  )
}

export default AllWidget;