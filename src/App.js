import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import './App.css';
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import APIRequest from "./APIRequest";
function App() {
  const API_URL="http://localhost:3000/items";
  const title='To Do List'
  const [items,setItems]=useState([]);

  const [addItem,setAddItem]=useState('')

  const [searchItem,setSearchItem]=useState('')
  const [fetchError,setFetchError]=useState(null)
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    const fetchItems = async()=>
    {
      try{
        const response=await fetch(API_URL);
        if(!response.ok) throw Error("Data not found")
        const listItem=await response.json();
        setItems(listItem);
        setFetchError(null)
      }
      catch(err)
      {
        setFetchError(err.message)
      }
      finally{
        setIsLoading(false)
      }
    }
    setTimeout(()=>
    {
      (async()=>await fetchItems())()
    } , 3000)
  },[])


  const handleDelete = async(id)=>{
    const listItems = items.filter((item)=>item.id!==id)
    setItems(listItems)
    
    const deleteObj={
      method:'DELETE'
    }
    const apiURL=`${API_URL}/${id}`
    const result=await APIRequest(apiURL,deleteObj)
    if(result) {setFetchError(result)}
  }

  const handleChange = async(id) => {
    const listItems=items.map((item)=> item.id===id ? {...item,checked:!item.checked} : item)
    setItems(listItems)
    const updItem=listItems.filter((item)=>item.id===id)
    const updateObj={
      method:'PATCH',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({checked:updItem[0].checked})
    }

    const apiURL=`${API_URL}/${id}`
    const result=await APIRequest(apiURL,updateObj)
    if(result) setFetchError(result) 
  }

  const addItems = async(addItem) =>{
    const id=items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem={id,checked:false,item:addItem}
    const addNewList=[...items,addNewItem]
    setItems(addNewList)

    const addObj={
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result=await APIRequest(API_URL,addObj)
    if(result) setFetchError(result)

  }
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    addItems(addItem)
    setAddItem('')
   }

  return (
    <div>
      <Header title={title}/>
      <AddItem addItem={addItem} setAddItem={setAddItem} handleSubmit={handleSubmit} />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem}/>
      <main>
        {isLoading && <p> Loading item...</p>}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content items={items.filter((item) => (item.item).includes(searchItem) )} handleChange={handleChange} handleDelete={handleDelete}/>
      }
      </main>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
