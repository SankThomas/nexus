import { FiCheckCircle } from "react-icons/fi"
import { FaTrash, FaEdit } from "react-icons/fa"

const List = ({ items, setItems }) => {
  const deleteItem = (id) => {
    const remainingItems = items.filter((item) => item.id !== id)
    setItems(remainingItems)
  }

  return (
    <>
      <h3>You have {items.length} items in your Todo list</h3>
      <article>
        {items.map(({ id, title }) => (
          <div className="article">
            <ul>
              <li key={id}>{title}</li>
            </ul>
            <div className="article-inner">
              <button className="btnCheck">
                <FiCheckCircle />
              </button>
              <button className="btnEdit">
                <FaEdit />
              </button>
              <button className="btnDelete" onClick={(id) => deleteItem(id)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </article>
    </>
  )
}

export default List
