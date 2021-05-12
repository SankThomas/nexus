import { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { FaPlus } from "react-icons/fa"
import List from "./List"
import logo from "./logo.svg"

const App = () => {
  const [text, setText] = useState("")
  const [items, setItems] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Input is empty")
    } else {
      const newList = { id: uuidv4(), title: text }
      setItems([newList, ...items])
      setText("")

      console.log(newList.id)
    }
  }

  return (
    <>
      <div className="container">
        <div>
          <h2 className="heading">
            <img src={logo} alt="" />
          </h2>
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

          <List items={items} setItems={setItems} />
        </section>
      </div>
    </>
  )
}

export default App
