import React, { useState } from 'react'
import Head from 'next/head'
import Client from 'Client'
import { Variables } from 'Types'
import { urlFor } from 'Client'


const UseCallback = ({usecallback}:any) => {
    const [react,setReact]=useState(usecallback)
  return (
    <>
    <Head>
        <title>useRef</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="  max-md:ml-0  ml-56 px-4  pr-4 pt-20 pb-8">
        {react?.map((value: Variables) => (
          <div className="flex flex-col gap-4" key={value?.id}>
            <h4 className=" text-[#0EA5E9] text-xl font-semibold ">
              {value.name}
            </h4>
            <p className="text-justify text-sm ">{value?.content}</p>

            <img
              className="w-full  h-[360px] object-contain rounded-lg"
              src={urlFor(value?.image.asset._ref).url()}
              alt="code "
            />
            <p className="text-justify text-sm ">{value?.ending}</p>
           
          </div>
        ))}
      </div>
    </>
  )
}

export default UseCallback

export async function getServerSideProps(context: any) {
    const query = `*[_type == "About" && name=="useCallback"]`;
    const usecallback = await Client.fetch(query);
  
    return {
      props: {
        usecallback,
      },
    };
  }