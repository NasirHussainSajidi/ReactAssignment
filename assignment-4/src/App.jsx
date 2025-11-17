import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<div className="min-h-screen bg-white px-4 py-10">
{/* Header Section */}
<div className="text-center mb-10">
<h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
Registration Form - SMIT
</h1>
<p className="text-gray-500 mt-2">Services - Education - Registration</p>
</div>


{/* Tabs */}
<div className="flex justify-center mb-10">
<div className="flex gap-4 border rounded-lg overflow-hidden shadow-sm">
<button className="px-6 py-3 text-green-600 font-semibold bg-gray-100">
Registration
</button>
<button className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-100">
Download ID Card
</button>
<button className="px-6 py-3 text-gray-600 font-semibold hover:bg-gray-100">
Results
</button>
</div>
</div>


{/* Form Container */}
<div className="max-w-5xl mx-auto bg-white p-6 sm:p-10 rounded-lg shadow-lg border">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
{/* Select Country */}
<div>
<label className="text-blue-700 font-semibold">Select country</label>
<select className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none">
<option>Select country</option>
<option>Pakistan</option>
<option>Turkea</option>
<option>Yamen</option>
</select>
</div>


{/* Select Class Preference */}
<div>
<label className="text-blue-700 font-semibold">Select class preference</label>
<select className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none">
<option>Select class preference</option>
<option>Online</option>
<option>Onsice</option>
</select>
</div>


{/* Select Gender */}
<div>
<label className="text-blue-700 font-semibold">Select gender</label>
<select className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none">
<option>Select gender</option>
<option>Male</option>
<option>Female</option>
</select>
</div>


{/* Select City */}
<div>
<label className="text-blue-700 font-semibold">Select city</label>
<select className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none">
<option>Select city</option>
</select>
</div>


{/* Select Course */}
<div>
<label className="text-blue-700 font-semibold">Select course or event</label>
<select className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none">
<option>Select course or event</option>
</select>
</div>


{/* Full Name */}
<div>
<label className="text-blue-700 font-semibold">Full name</label>
<input
type="text"
placeholder="Full name"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

{/* Father name */}
<div>
<label className="text-blue-700 font-semibold">Father name</label>
<input
type="text"
placeholder="Father name"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

{/* email */}
<div>
<label className="text-blue-700 font-semibold">Email</label>
<input
type="text"
placeholder="Email"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>
{/* 
Phone */}
<div>
<label className="text-blue-700 font-semibold">Phone</label>
<input
type="text"
placeholder="Phone"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>


{/* CNIC */}
<div>
<label className="text-blue-700 font-semibold">CNIC</label>
<input
type="text"
placeholder="CNIC"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

{/* father's cnic */}
<div>
<label className="text-blue-700 font-semibold">Father's CNIC</label>
<input
type="text"
placeholder="Father's CNIC"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

{/* date of birth */}
<div>
<label className="text-blue-700 font-semibold">Date of birth</label>
<input
type="date"
placeholder="mm/dd/yyyy"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

<div>
<label className="text-blue-700 font-semibold">Select your computer proficiency</label>
<input
type="text"
placeholder="Select your computer proficiency"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

<div>
<label className="text-blue-700 font-semibold">Do you have a Laptop</label>
<input
type="text"
placeholder="Do you have a Laptop"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>

<div>
<label className="text-blue-700 font-semibold">Last qualification</label>
<input
type="text"
placeholder="Last qualification"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>
<div>
<label className="text-blue-700 font-semibold">Address</label>
<input
type="text"
placeholder="Address"
className="w-full mt-2 p-3 border border-green-400 rounded focus:outline-none"
/>
</div>
</form>
</div>
</div>
<div>

<button className='w-full mt-2 p-3 border border-green-400 focous:outline-none bg-green-500'>Submit</button>
</div>
    </>
  )
}

export default App
