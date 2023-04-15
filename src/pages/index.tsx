import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Client, { urlFor } from "Client";
import { useState } from "react";
import { Variables } from "Types";
import Skeleton from "Components/Skeleton";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: any) {
 
  const [react, setReact] = useState(data);
  const [copied1,setCopied1]=useState(false)
  const [copied,setCopied]=useState(false)
   const yarn=" yarn create vite  your-app-name "
   const npm="npm create vite@latest   your-app-name "
  const copy = (value: any) => {
    navigator.clipboard.writeText(value);
    setCopied(true)
    setCopied1(true)
  };
  
  return (
    <>
      <Head>
        <title>React.js</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-md:ml-0  ml-56 pr-4 pt-20 pb-8 px-4 ">
          {react?react.map((value: Variables) => (
            <div className="flex flex-col gap-6" key={value?.id}>
              <h4 className="text-[#0EA5E9] text-xl font-semibold ">
                {value.name}
              </h4>
              <p className="text-justify text-sm ">{value?.content}</p>
              <p className="text-justify text-sm ">{value?.ending}</p>
              <img
                className="w-full h-[200px] object-cover rounded-lg"
                src={urlFor(value.image.asset._ref).url()}
                alt="reactlogo"
              />
              <div className="text-justify text-sm flex flex-col gap-4 ">
                <h2 className="text-xl font-bold">
                  create your first react application with Production-grade
                  React frameworks{" "}
                </h2>
                <p>{value?.guide}</p>
                <span className="bg-[#333] text-white h-10 px-4 rounded-lg flex items-center">
                  {value?.npm}
                </span>
              </div>
              <div className="text-justify text-sm flex flex-col gap-4 ">
                <h2 className="text-xl font-bold">
                  {value?.npm_additional_package}{" "}
                </h2>
                <p>{value?.yarn_additional_package}</p>
                <span className="bg-[#333]  text-white h-12  px-4 rounded-lg flex  items-center relative ">
                <span>{npm}</span> 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  onClick={()=>copy(npm)}
                  className="w-6 h-6 absolute right-4 cursor-pointer "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
                
                </span>
                <span className="bg-[#333] relative  text-white h-12  px-4 rounded-lg flex  items-center">
                <span>  {yarn} </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  onClick={()=>copy(yarn)}
                  className="w-6 h-6 absolute right-4 cursor-pointer "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
                
                </span>
                
              </div>
            </div>
          )):<Skeleton/>}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const query = `*[_type == "About" && name=="React.js"]`;
  const data = await Client.fetch(query);

  return {
    props: {
      data,
    },
  };
}
