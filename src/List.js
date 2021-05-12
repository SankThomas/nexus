import { FiCheckCircle } from "react-icons/fi"
import { FaTrash, FaEdit } from "react-icons/fa"

const List = ({ items, deleteItem, editItem }) => {
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
              <button className="btnCheck" onClick={() => deleteItem(id)}>
                <FiCheckCircle />
              </button>
              <button className="btnEdit" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button className="btnDelete" onClick={() => deleteItem(id)}>
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
