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
import { useState,useEffect } from "react";
// import { URL } from ".././";

interface Record{
  status:string,
  date:string
  entryNo:number,
}
// const data: {status:string,date:string,entryNo:number,}[]=[
//   {entryNo:1,status:"Out of Stock",date:"10/08/24"},
//   {entryNo:2,status:"Out of Stock",date:"11/08/24"},
//   {entryNo:3,status:"Out of Stock",date:"12/08/24"},
// ]

export default function Home() {
  const[myData,setmyData]=useState<Record[]>([])
  let apiURL=process.env.NEXT_PUBLIC_URL
  

  useEffect(() => {
    const fetchData= async()=>{
      if (apiURL){
        console.log(`The url is ${apiURL}`);
        
        try {
           const rawData=await fetch(apiURL)
           const data:[string, string, number][]=await rawData.json()
          //  console.log(data);
          const transformedData:Record[] = data.map(item => ({
            status: item[0],
            date: item[1],
            entryNo: item[2]
          }));
          setmyData(transformedData)
        } catch (error) {
          throw new Error(`${error}`)
        }
      } else{
        console.error('Not loading');
        
      }
    }  
    fetchData()
  
  }, [])

  const displayData=myData.slice(0,5)
  
  return (
    <main className=" flex flex-col justify-evenly items-center h-screen border-solid border-black border-2 m-2.5">
     <div className=" flex justify-evenly flex-row  w-full flex-wrap">
      <div className="flex flex-col justify-center align-center border-solid border-black border-2 h-20 w-36 italic" >
        <h2 className="text-xl">ITEM STATUS</h2>
        <p className="text-lg">{myData[0]?.status || "No data"}</p>
        {/* <p className="text-lg">{myData.length>0? JSON.stringify(myData[0]): "No data"}</p> */}

      </div>
      <div className=" flex flex-col justify-center align-center border-solid border-black border-2 h-20 w-60 italic shadow-lg">
        <h2 className="text-xl">TOTAL NO OF CHECKS</h2>
        <p className="text-lg">{myData.length}</p>
      </div>
  
     </div>
      {myData.length!=0?  <><table>
      <tr>
        <th>Entry No</th>
        <th>Status</th>
        <th>Date Entered</th>
      </tr>
      {displayData.map((rec,key)=>{
        return  <tr
       key={key}>
        <td>{rec.status}</td>
        <td>{rec.date}</td>
        <td>{rec.entryNo}</td>
       </tr>
      })}
     </table></> :  <div>No data</div>}
     
    </main>
    
  );
}
