import { motion } from "framer-motion"
import { FiCheckCircle } from "react-icons/fi"
import { FaTrash, FaEdit } from "react-icons/fa"

const List = ({ items, deleteItem, editItem }) => {
  return (
    <>
      <h3>You have {items.length} items in your Todo list</h3>
      <article>
        {items.map(({ id, title }) => (
          <div className="article">
            <motion.ul
              initial={{ y: "-100px" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            >
              <li key={id}>{title}</li>
            </motion.ul>
            <motion.div
              className="article-inner"
              initial={{ y: "-100px" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 120 }}
            >
              <button className="btnCheck" onClick={() => deleteItem(id)}>
                <FiCheckCircle />
              </button>
              <button className="btnEdit" onClick={() => editItem(id)}>
                <FaEdit />
              </button>
              <button className="btnDelete" onClick={() => deleteItem(id)}>
                <FaTrash />
              </button>
            </motion.div>
          </div>
        ))}
      </article>
    </>
  )
}

export default List
