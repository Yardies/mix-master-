import SearchBar from '../components/SearchBar'
import { useLoaderData, useLocation, useOutletContext } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Drinks from '../components/Drinks'
import { useQuery } from '@tanstack/react-query'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const fetchQuery = (searchTerm) => {
  return {
    queryKey: [searchTerm],
    queryFn: async () => {
      const response = await axios.get(`${url}${searchTerm}`)
      return response.data.drinks
    },
  }
}

export const loader =
  (queryclient) =>
  async ({ request }) => {
    const pageUrl = new URL(request.url)
    const searchText = pageUrl.searchParams.get('search')
    const searchTerm = searchText || ''
    await queryclient.ensureQueryData(fetchQuery(searchTerm))
    return { searchTerm }
  }

const Landing = () => {
  const { searchTerm } = useLoaderData()

  const response = useQuery(fetchQuery(searchTerm))
  const drinks = response.data

  // ### resolved in loader
  // if (response.isLoading) {
  //   return <h4>LOading aaa</h4>
  // }

  return (
    <>
      <SearchBar searchTerm={searchTerm} />
      <Drinks drinks={drinks} />
    </>
  )
}
export default Landing
