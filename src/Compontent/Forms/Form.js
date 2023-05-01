import React from 'react';
import { useEffect, useState } from 'react';

import Swal from 'sweetalert2';

const Form = ({setFormData, formData}) => {
    
    const [form, setForm] = useState(1);
    const [country, setCountry] = useState([]);
   
    // fetching api 
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountry(data.map(item=>item?.name?.common)))
    },[])

    // switch to another form 
    const nextBtn = () =>{
        if(form<3){
            setForm(form + 1);
        }
    }
    //back to previous from
    const preBtn = () =>{
        if(form > 1){
        setForm(form - 1);
        }
    }
    //after submit the form data showing
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(formData);
        
    }
    const handleAlert =() =>{
        Swal.fire({
            title: 'Do you want to proceed?',
            // showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
              
            } 
          })    
    }
    return (
        <div className="bg-sky-900">
       
        <h1 className='text-5xl text-white font-semibold pt-10'>Multi-step-form</h1>
        <div className="p-5">
            <form onSubmit={handleSubmit} className="mt-8 p-4">
                {/* 1st from  */}
                {
                    form === 1 &&
                    <div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div 
                        
                            className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Name</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input  value={formData?.name} onChange={(e)=>setFormData(state=>{
                                return{
                                    ...state,
                                    name:e.target.value
                                }
                            })} placeholder="Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                            </div>
                            <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div 
                            className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Phone</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input value={formData?.phone} onChange={(e)=>setFormData(state=>{
                                return{
                                    ...state,
                                    phone:e.target.value
                                }
                            })} placeholder="Phone No" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Age</div>
                                
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input  value={formData?.age} onChange={(e)=>setFormData(state=>{
                                return{
                                    ...state,
                                    age:e.target.value
                                }
                            })} placeholder="Your Age" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                            </div>
                            <div className="w-full mx-2 flex-1 svelte-1l8159u">
                                <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase">Country</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    {/* <input placeholder="jhon@doe.com" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/>  */}
                                    <select value={formData?.country} onChange={(e)=>setFormData(state=>{
                                return{
                                    ...state,
                                    country:e.target.value
                                }
                            })} id="countries" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required>
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
                {/* 2nd form  */}
                {
                    form === 2 &&
                    <div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-full flex-1 mx-2 svelte-1l8159u">
                            <div className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Upload Image</div>
                                <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                    <input
                                    onChange={(e)=>setFormData(state=>{
                                        return{
                                            ...state,
                                            image:e.target.files[0]
                                        }
                                    })}
                                    type="file" placeholder="Name" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required/> </div>
                            </div>
                            
                        </div>
                    </div>
                }
                {/* 3rd form  */}
                {
                    form === 3 &&
                    <div>
                        <div className="flex flex-col md:flex-row">
                        <div className="w-full flex-1 mx-2 svelte-1l8159u">
                        {/* <div className="font-bold text-white text-xs leading-8 uppercase h-6 mx-2 mt-3">Select Option</div> */}
                        <div className="w-full mx-2 flex-1 svelte-1l8159u">
                            <div className="font-bold h-6 mt-3 text-white text-xs leading-8 uppercase">User</div>
                            <div className="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                                
                                <select value={formData?.role} onChange={(e)=>setFormData(state=>{
                                    return{
                                        ...state,
                                        role:e.target.value
                                    }
                                })} id="countries" className="p-1 px-2 appearance-none outline-none w-full text-gray-800" required>
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
                {/* btn stes  */}
                <div className="flex p-2 mt-4">
                    {/* previous btn  */}
                    <button onClick={preBtn} className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-gray-200  
                    bg-gray-100 
                    text-gray-700 
                    border duration-200 ease-in-out 
                    border-gray-600 transition">Previous
                    </button>

                    <div className="flex-auto flex flex-row-reverse">
                        {/* next btn  */}
                        <button onClick={nextBtn} className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                        hover:bg-teal-600  
                        bg-teal-600 
                        text-teal-100 
                        border duration-200 ease-in-out 
                        border-teal-600 transition">Next
                        </button>

                        {/* submit btn  */}
                        <button onClick={handleAlert} type="submit" className={`text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold  
                        hover:bg-teal-200  
                        bg-teal-100 
                        text-teal-700 
                        border duration-200 ease-in-out 
                        border-teal-600 transition ${formData?.role==="" && "hidden"}`}>Submit
                        </button>
                    </div>
                </div>
            </form>
            
        </div>
    </div>
    );
};

export default Form;