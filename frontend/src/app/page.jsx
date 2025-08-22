"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default function Home() {
  const [formData , setFormData] =useState([])
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
      [name]:value,
      }))
}
  
  const HandleSubmit = (e) => {
    e.preventDefault(); 
    setFormData((prev)=>[...prev ,data])
    // alert(JSON.stringify(data,null,2))
      setData   ({    name: "",
    date: "",
    password: "",})          
  }
  return (
    <section className="flex justify-center items-center h-[100%] w-full">
      <div className="p-[30px]  w-[600px] h-[auto]">
        <form  className="grid grid-cols-2 gap-[20px]  text-[#000]" >
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
          <button onClick={HandleSubmit}>Submit</button>
        </form>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
          <TableBody>
            {Array.isArray(formData) && formData.map((data, index) => (
  <TableRow key={index}>
    <TableCell className="font-medium">{data.name}</TableCell>
    <TableCell>{data.date}</TableCell>
    <TableCell>{data.password}</TableCell>
  </TableRow>
))}
  </TableBody>
</Table>
      </div>
    </section>
  );
}
