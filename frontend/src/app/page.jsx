"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState({
    name: "",
    date: "",
    password: "",
  });
  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

  }
  
  const HandleSubmit = () => {
    alert(JSON.stringify(data,null,2))
                   
  }
  return (
    <section className="flex justify-center items-center">
      <div className="p-[30px]  w-[600px] h-[auto]">
        <form action="post" className="grid grid-cols-2 gap-[20px]  text-[#000]" onSubmit={HandleSubmit}>
          <input
            className="text-[#000]  border-1"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <input
            className="text-[#000]  border-1"
            type="date"
            name="date"
            id=""
            placeholder="Date"
                 onChange={handleChange}
        
          />
          <input
            placeholder="Password"
            className="text-[#000]  border-1"
            type="password"
            name="password"
            id=""
                 onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
