import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [form, setForm] = useState(1);
    const [country, setCountry] = useState([]);
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        age:'',
        country:'',
        image:'',
        role:'',
    });

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data.map(item=>item?.name?.common)))
    },[])


  const nextBtn = () =>{
    if(form<3){
        setForm(form + 1);
    }
  }
  const preBtn = () =>{
    if(form > 1){
    setForm(form - 1);
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formData);
  }
  return (
    <div className="App bg-sky-900">
        {/* nav */}

        <div className="navbar bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
       
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Logo</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div>


     <h1 className='text-5xl text-white font-semibold pt-10'>Multi-step-form</h1>
        <div class="p-5">
            <form onSubmit={handleSubmit} class="mt-8 p-4">
                {
                    form === 1 &&
                    <div>
                    
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <div 
                       
                        class="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Name</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input  value={formData?.name} onChange={(e)=>setFormData(state=>{
                            return{
                                ...state,
                                name:e.target.value
                            }
                        })} placeholder="Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                        </div>
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <div 
                        class="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Phone</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input value={formData?.phone} onChange={(e)=>setFormData(state=>{
                            return{
                                ...state,
                                phone:e.target.value
                            }
                        })} placeholder="Phone No" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                        </div>
                    </div>
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full mx-2 flex-1 svelte-1l8159u">
                        <div class="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Age</div>
                            
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input  value={formData?.age} onChange={(e)=>setFormData(state=>{
                            return{
                                ...state,
                                age:e.target.value
                            }
                        })} placeholder="Your Age" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                        </div>
                        <div class="w-full mx-2 flex-1 svelte-1l8159u">
                            <div class="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase">Country</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                {/* <input placeholder="jhon@doe.com" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/>  */}
                                <select value={formData?.country} onChange={(e)=>setFormData(state=>{
                            return{
                                ...state,
                                country:e.target.value
                            }
                        })} id="countries" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required>
                                    <option selected>Choose a country</option>
                                    {
                                        country?.map(item=><option>{item}</option>)
                                    }
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                }
                {
                    form === 2 &&
                    <div>
                    
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        <div class="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Upload Image</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                <input
                                onChange={(e)=>setFormData(state=>{
                                    return{
                                        ...state,
                                        image:e.target.files[0]
                                    }
                                })}
                                 type="file" placeholder="Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                        </div>
                        
                    </div>
                    
                </div>
                }
                {
                    form === 3 &&
                    <div>
                    
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full flex-1 mx-2 svelte-1l8159u">
                        {/* <div class="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Select Option</div> */}
                        <div class="w-full mx-2 flex-1 svelte-1l8159u">
                            <div class="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase">Country</div>
                            <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                
                                <select value={formData?.role} onChange={(e)=>setFormData(state=>{
                                    return{
                                        ...state,
                                        role:e.target.value
                                    }
                                })} id="countries" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" required>
                                    <option selected hidden>Choose a Option</option>
                                    <option>Seller</option>
                                    <option>Buyer</option>
                                </select>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
                }
                <div class="flex p-2 mt-4">
                    <button onClick={preBtn} class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-gray-200  
                bg-gray-100 
                text-gray-700 
                border duration-200 ease-in-out 
                border-gray-600 transition">Previous</button>
                    <div class="flex-auto flex flex-row-reverse">
                        <button onClick={nextBtn} class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                hover:bg-teal-600  
                bg-teal-600 
                text-teal-100 
                border duration-200 ease-in-out 
                border-teal-600 transition">Next</button>
                        <button type="submit" class={`text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold  
                hover:bg-teal-200  
                bg-teal-100 
                text-teal-700 
                border duration-200 ease-in-out 
                border-teal-600 transition ${formData?.role==="" && "hidden"}`}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
