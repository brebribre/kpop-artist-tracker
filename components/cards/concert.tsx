
import Image from 'next/image'
import { Button } from "@material-tailwind/react";

interface Concert {
    eventName:string,
    startDate:string,
    venue:string,
    city:string,
    country:string,
    image:string,
    offer:string
  }

export default function ConcertCard(props:any) {
    return (
      <div className = "flex bg-slate-900 rounded-md border-white mt-4 xl:w-1/2">
        <div className = "my-auto flex-none hidden md:block">
            <Image
                src={props.concert?.image}
                alt={'concert image'}           
                width={230}
                height={100}
                className = "rounded-xl mx-auto p-2"
            />
        </div>
        <div className = "flex-auto p-5 md:p-4">
            <p className ="font-bold pb-1 text-slate-400 text-sm">{props.concert?.eventName}</p>
            <p className = "text-sm text-slate-400">Start date: {props.concert?.startDate}</p>
            <p className = "text-sm text-slate-400">Venue: {props.concert?.venue}</p>
            <p className = "text-sm text-slate-400">{props.concert?.city}, {props.concert?.country}</p>
            {
              props.concert.offer===""?<p className = "pt-3 text-red-500 text-sm">No ticket found</p>:<a href={props.concert?.offer} target="_blank">
              <button className="border-solid border-2 border-purple-600 px-2 text-sm mt-3 py-1 text-white bg-purple-600 rounded transform transition duration-200 hover:bg-black hover:border-white" >
                      Find Offer 
              </button>
            </a>
            }
           
        </div>
      </div>
    )
  }