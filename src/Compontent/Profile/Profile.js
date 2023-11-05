import React from 'react';
// import imagePreview from '../../Utilities/imagePreview';
const Profile = ({formData}) => {
    const {name, age, phone, country, image, role} = formData || {};
    console.log(formData)
    return (
        <div>
            <div class="font-sans leading-tight min-h-screen bg-grey-lighter p-8">
                <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                    <div class="bg-cover h-40"></div>
                    <div class="border-b px-4 pb-6">
                        <div class="text-center sm:text-left sm:flex mb-4">
                            {/* <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4" src={imagePreview(image)} alt=""/> */}
                            <div class="py-2">
                                {/* <h3 class="font-bold text-2xl mb-1">{name}</h3> */}
                                <div class="inline-flex text-grey-dark sm:flex items-center text-2xl font-semibold">
                                    Name:{name}
                                    <br/>
                                   Age:{age}
                                   <br/>
                                   Phone:{phone}
                                   <br/>
                                   Country:{country}
                                   <br/>
                                   Role:{role}
                                </div>
                            </div>
                        </div>
                    <h1>test</h1>
                    <h1>test</h1>
                    <p>abar likhsi</p>
                    <span>
                        new
                    </span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;