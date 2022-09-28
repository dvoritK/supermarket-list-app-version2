import "./App.css";
import ListItem from "./components/ListItem";
import { useState } from "react";
import Counter from "./components/Counter";
// bjklnhjkl

function App() {
  let [inputText, setInputText] = useState({
    productName: "",
    productBrand: "",
    productAmount: "",
    productUnit: "",
  });
  let [items, setItems] = useState([]);

  const listItem = document.querySelector(".list-item");
  let newItem = `${inputText.productName} ${inputText.productBrand} ${inputText.productAmount} ${inputText.productUnit}`;

  function handleChange(event) {
    let inputValue = event.target.value;
    let inputName = event.target.name;
    setInputText({
      ...inputText,
      [inputName]: inputValue,
    });
  }

  function handleClick() {
    if (
      inputText.productName === "" &&
      inputText.productBrand === "" &&
      inputText.productAmount === "" &&
      inputText.productUnit === ""
    ) {
      alert("בבקשה רשום את פרטי המוצר על מנת שנוכל להוסיפו לרשימה🔤");
    } else if (inputText.productAmount <= 0) {
      alert("הכמות שהגדרת אינה תקינה🤨 אנא בחר את כמות הפריטים הרצויה");
    } else {
      setItems((prevItem) => [...prevItem, newItem]);
      setInputText({
        productName: "",
        productBrand: "",
        productAmount: "",
        productUnit: "",
      });
      listItem.classList.add("item-list-added");
    }
  }

  return (
    <div className="App">
      <header>
        <Counter numberOfItems={items.length} />
      </header>
      <div className="Form">
        <input
          type="text"
          placeholder="שם המוצר"
          className="input-box input-name"
          name="productName"
          value={inputText.productName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="שם החברה"
          className="input-box input-brand"
          name="productBrand"
          value={inputText.productBrand}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="כמות"
          className="input-box input-amount"
          name="productAmount"
          value={inputText.productAmount}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="יחידה או משקל"
          className="input-box input-unit"
          name="productUnit"
          value={inputText.productUnit}
          onChange={handleChange}
        />
        <button type="submit" className="btn-submit" onClick={handleClick}>
          הוסף פריט לרשימה
        </button>
      </div>
      <div className="List">
        <ul className="list-item">
          <span className="product-description">
            {items.map((item, index) => (
              <ListItem item={item} key={index} id={index} />
            ))}
          </span>
        </ul>
      </div>
    </div>
  );
}
export default App;
