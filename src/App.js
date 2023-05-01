

import { useState } from 'react';
import './App.css';
import Form from './Compontent/Forms/Form';
import Profile from './Compontent/Profile/Profile';
import Header from './Compontent/Header/Header';




function App() {
    const [formData, setFormData] = useState({
        name:'',
        phone:'',
        age:'',
        country:'',
        image:'',
        role:'',
    });
    // console.log(formData)
    
    return (
    <div className='App'>
            <Header></Header>
            
            <Form formData={formData} setFormData={setFormData}></Form>
    
        
            <Profile formData={formData}></Profile>
        
    </div>
  );
}

export default App;
