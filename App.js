import React, { useState } from 'react'

function App() {
  const [Buds, setBuds] = useState([])
  const [value, setValue] = useState(0)
  const [sharedAmount, setSharedAmount] = useState(0)
  const handleAmount = (e) => {
    e.preventDefault()
    let amount = value
    let length = Buds.length
    setSharedAmount(amount / (length + 1))
  }
  const handleCheck = (e) => {
    let value = e.target.value
    let item = Buds.includes(value)
    if (!item) {
      if (Buds.length === 0) {
        setBuds([value])
      } else if (Buds.length > 0) {
        Buds.push(value)
        setBuds(Buds)
      }
    } else {
      let Buddies = Buds.filter((item) => item !== value)
      setBuds(Buddies)
      console.log(Buds)
    }
  }

  return (
    <div>
      <form onSubmit={handleAmount}>
        <h1>enter the amount you want to share </h1>
        <input
          type="number"
          placeholder="amount"
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit">submit</button>
      </form>
      <form>
        <input
          type="checkbox"
          id="Friend1"
          name="Firend1"
          value="A"
          onChange={handleCheck}
        />
        <label for="Firend1"> A</label>
        <br />
        <input
          type="checkbox"
          id="Friend2"
          name="Friend2"
          value="B"
          onChange={handleCheck}
        />
        <label for="Friend2"> B</label>
        <br />
        <input
          type="checkbox"
          id="Friend3"
          name="Friend3"
          value="C"
          onChange={handleCheck}
        />
        <label for="Friend3"> C</label>
        <br />
        <input
          type="checkbox"
          id="Friend4"
          name="Friend4"
          value="D"
          onChange={handleCheck}
        />
        <label for="Friend4"> D</label>
        <br />
        <input
          type="checkbox"
          id="Friend5"
          name="Friend5"
          value="E"
          onChange={handleCheck}
        />
        <label for="Friend5"> E</label>
        <br />
      </form>
      <h1>the amount each person should pay is {sharedAmount}</h1>
    </div>
  )
}

export default App
