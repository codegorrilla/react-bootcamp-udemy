import {useState} from 'react'

export default function Items(){
    const [input, setInput] = useState("")
    const [items, setItems] = useState([])

    console.log(items)

    // {
    //     name: 'Banana',
    //     quantity: 1,
    //     completed: true
    // }

    const handleInputVal = (e)=>{
        setInput(e.target.value)
    }

    const handleAddItems = (e)=>{
       if(e.key === "Enter"){
        if(input){
            const updatedItemsList = [...items]
            const itemIndex = updatedItemsList.findIndex(
                (item) => item.name === input
            )

            if(itemIndex === -1){
                updatedItemsList.push({
                    name: input,
                    quantity: 1,
                    completed: false,
                })
            }else{
                updatedItemsList[itemIndex].quantity++
            }

            setItems(updatedItemsList)
            setInput("") //clear input on pressing enter key
        }
       }          

            //console.log("called")
    }

    
    console.log(input)

    const handleRemoveItem = (name)=>{
        setItems([...items].filter((item) => item.name !== name))
        //console.log("removing an item")
    }

    const renderItemsList = ()=>{
        return items.map((item)=>(
            <li key={item.name}>
                <div className="container">
                    <input type="checkbox" />
                    <p>
                        {item.name}
                        {item.quantity > 1 && <span> <small>x</small>{item.quantity}</span>}

                    </p>
                </div>
                <div>
                    <button className="remove-button" onClick = {() => handleRemoveItem(item.name)}>x</button>
                </div>
            </li>
        ))
    }

    return(
        <>
            <input 
            type="text" 
            placeholder="Add an item" 
            className="add-item" 
            value={input}
            onChange={handleInputVal}
            onKeyDown={handleAddItems}
            />
            
            {/* {JSON.stringify(items)} */}
            <ul className="item-list">
                {renderItemsList()}
            </ul>
        </>
    )
}