'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react";

interface Record{
  entryNo:number,
  status:string,
  date:string
}
const data: {entryNo:number,status:string,date:string}[]=[
  {entryNo:1,status:"Out of Stock",date:"10/08/24"},
  {entryNo:2,status:"Out of Stock",date:"11/08/24"},
  {entryNo:3,status:"Out of Stock",date:"12/08/24"},
]

export default function Home() {
  const[myData,setmyData]=useState<Record[]>(data)
  return (
    <main className=" flex flex-col justify-evenly items-center h-screen border-solid border-black border-2 m-2.5">
     <div className=" flex justify-evenly flex-row  w-full flex-wrap">
      <div className="flex flex-col justify-center align-center border-solid border-black border-2 h-20 w-36 italic" >
        <h2 className="text-xl">ITEM STATUS</h2>
        <p className="text-lg">Out of stock</p>
      </div>
      <div className=" flex flex-col justify-center align-center border-solid border-black border-2 h-20 w-60 italic shadow-lg">
        <h2 className="text-xl">TOTAL NO OF CHECKS</h2>
        <p className="text-lg">67</p>
      </div>
  
     </div>
     <table>
      <tr>
        <th>Entry No</th>
        <th>Status</th>
        <th>Date Entered</th>
      </tr>
      {myData.map((rec,key)=>{
        return  <tr
       key={key}>
        <td>{rec.entryNo}</td>
        <td>{rec.status}</td>
        <td>{rec.date}</td>
       </tr>
      })}
     </table>
    </main>
    
  );
}
