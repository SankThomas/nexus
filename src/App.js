import { useState, useEffect } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaPlus } from "react-icons/fa"
import List from "./List"
import logo from "./logo.svg"
import DateTime from "./components/Date"

const getLocalStorage = () => {
  let items = localStorage.getItem("items")
  if (items) {
    return JSON.parse(localStorage.getItem("items"))
  } else {
    return []
  }
}

const App = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState(getLocalStorage())
  // eslint-disable-next-line
  const [isEditing, setIsEditing] = useState(false)
  // eslint-disable-next-line
  const [editID, setEditID] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const newList = { id: uuidv4(), title: text }
      setItems([newList, ...items])
      setText("")
    }
  }

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const editingItem = items.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setText(editingItem.title)
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])

  return (
    <>
      <div className="wrapper">
        <div>
          <h2 className="heading">
            <img src={logo} alt="Nexus logo" className="block mx-auto" />
          </h2>
        </div>
        <div>
          <DateTime />
        </div>
        <section className="container-inner">
          <form onSubmit={handleSubmit}>
            <label htmlFor="text">Enter your todo item</label>
            <input
              type="text"
              id="text"
              placeholder="e.g. Make youtube video"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btnAdd">
              <FaPlus style={{ marginRight: 10 }} /> Add item
            </button>
          </form>

          <List
            items={items}
            setItems={setItems}
            deleteItem={deleteItem}
            editItem={editItem}
          />

          <button
            className="btnAdd"
            style={{ marginTop: 20 }}
            onClick={() => setItems([])}
          >
            Clear List
          </button>
        </section>
      </div>
    </>
  )
}

export default App
