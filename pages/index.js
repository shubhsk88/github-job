import Nav from "@/components/nav";
import Header from "@/components/header";
import Card from "@/components/card";
import Sidebar from "@/components/sidebar";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchApi } from "utils";


export default function IndexPage() {
  
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(`page-${page}`, () =>
     fetchApi.get(`/positions.json`)
   
  );
  if (isLoading)
  {
    return <div>Loading</div>
  }
  if (isError)
  {
    return <div>{error.message}</div>
    }

  

  return (
    <div className="max-w-screen-xl w-full mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 space-y-8">
          {data.data.map(job=><Card job={job} key={job.id}/>)}
        </div>
      </div>
    </div>
  );
}
