import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"

function Query(a: any) {
  return useQuery<any[], Error>({
    queryKey: ["test", a], // a new query will be made whenever the querykey changes, which depends on a
    queryFn: () => {
      return axios.get("test").then(res => res.data)
    },
    enabled: Boolean(a)
  })
  // useQuery is async, and designed to return fetch state condition values to help manage component display
  // use setQueryData for sync queries that only need to return data
}

function QueryWrapper(props) {
  const queryclient = new QueryClient()

  return <QueryClientProvider client={queryclient}></QueryClientProvider>
}

export default Query
