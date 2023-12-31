import React from 'react'
import LoginFormTeacher from '../../components/LoginFormTeacher'

const page = () => {
  return (
    <div>
      <LoginFormTeacher/>
    </div>
  )
}

export default page

// 'use client'
// import React, { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// function Page() {
//     const [formData, setFormData] = useState({
//         name: '',
//         subject: '',
//         dob: '',
//         email: '',
//         password: '',
//         address: '',
//         username: '',
//         fees: '',
//         institutionName: ''
//     });

//     const router = useRouter();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log(formData);
//         let res = await fetch('http://localhost:3000/api/forms', {
//             method: 'POST',
//             body: JSON.stringify(formData)
//         });
//         res = await res.json();
//         if(res.success) {
//             alert('Teacher added successfully');
//         }

//         // Redirect to /teacher/submitpage
//         router.push('/teacher/submitpage');
//     };

//     return (
//         <form className='flex flex-col text-center p-10 outline-dashed m-10 w-60' onSubmit={handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" name="name" value={formData.name} onChange={handleChange} autoComplete="name" />
//             </label>
//             <br />
//             <label>
//                 DOB:
//                 <input type="text" name="dob" value={formData.dob} onChange={handleChange} autoComplete="bday" />
//             </label>
//             <br />
//             <label>
//                 Email:
//                 <input type="text" name="email" value={formData.email} onChange={handleChange} autoComplete="email" />
//             </label>
//             <br />
//             <label>
//                 Password:
//                 <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" />
//             </label>
//             <br />
//             <label>
//                 Subject:
//                 <input type="text" name="subject" value={formData.subject} onChange={handleChange} autoComplete="subject" />
//             </label>
//             <br />
//             <label>
//                 Address:
//                 <input type="text" name="address" value={formData.address} onChange={handleChange} autoComplete="address" />
//             </label>
//             <br />
//             <label>
//                 Username:
//                 <input type="text" name="username" value={formData.username} onChange={handleChange} autoComplete="username" />
//             </label>
//             <br />
//             <label>
//                 Fees:
//                 <input type="text" name="fees" value={formData.fees} onChange={handleChange} autoComplete="off" />
//             </label>
//             <br />
//             <label>
//                 Institution Name:
//                 <input
//                     type="text"
//                     name="institutionName"
//                     value={formData.institutionName}
//                     onChange={handleChange}
//                     autoComplete="organization"
//                 />
//             </label>
//             <br />
//             <button className='bg-red-400 bg-blend-screen text-center' type="submit">Submit</button>
//         </form>
//     );
// }

// export default Page;
