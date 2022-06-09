import React ,{useState} from 'react';
import axios from 'axios'
import "./addProduct.scss"

function AddProduct() {
    const[name,setName] =useState('')
    async function postName(e){
        e.preventDefault()
        console.log(name)
            await axios.post('http://localhost:3001/addproduct',{name}).then((res)=>{
                console.log(res.body)
            })
            
        
    }

    return (
        <div className='formContainer'>
            <form onSubmit={postName} className="addProduct">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddProduct;