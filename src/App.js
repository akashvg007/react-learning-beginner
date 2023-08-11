import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const statusInitial = {status:false,idx:-1}
  const [inputVal, setInputVal] = useState(""); 
  const [cartItems, setCartItems] = useState([]);
  const [isEdit, setIsEdit] = useState(statusInitial);
  const handleButtonClick = () => {
    const itemsList = [...cartItems]
    if(isEdit.status) {
      itemsList[isEdit.idx] = inputVal;
      setIsEdit(statusInitial)
    }
    else {
      itemsList.push(inputVal);
    }
    setCartItems(itemsList);
    setInputVal("")
  }
  console.log("list",cartItems)
  const handleDelete = (idx) => {
    const items = [...cartItems];
    items.splice(idx,1);
    setCartItems(items);
  }
  const handleRemoveAll = () => {
    setCartItems([]);
  }
  const handleEdit = (idx) => {
    setIsEdit({status:true,idx});
    setInputVal(cartItems[idx])
  }
  return (
    <div className="App">
      <h1>Add to cart</h1>
      <div className="container">
        <div class="input">
          <input value={inputVal} onChange={e=>setInputVal(e.target.value)} type="text"/>
          <button onClick={handleButtonClick}>{isEdit.status?'UPDATE':'ADD'}</button>
        </div>
        <div className="cart-items">
          {
            cartItems.map((cart,idx)=>(
              <div class="item-container">
                <div className='item'>{cart}</div>
                <button onClick={()=>handleDelete(idx)}>Delete</button>
                <button onClick={()=>handleEdit(idx)}>Edit</button>
              </div>
            ))
          }
        </div>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  );
}

export default App;
