import React from 'react'
import { FaSearch } from "react-icons/fa";


type Props = {}

function Search({}: Props) {
  return (
    <div
      className="bg-gray-200 px-4 py-2 rounded-sm flex gap-3 items-center">
      <FaSearch className="w-4 fill-[#B1B5C3]" />
      <input
        className="focus:outline-none placeholder-[#B1B5C3]"
        placeholder="search tasks"
        // onChange={(e) => {
        // //   handleSearch(e.target.value);
        // }}
        // defaultValue={searchParams.get('query')?.toString()}
      />
    </div>
  )
}

export default Search