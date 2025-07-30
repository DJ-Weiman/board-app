'use client'

import { useSearchStore } from '@/lib/searchStore';
import debounce from 'debounce';
import React from 'react'
import { FaSearch } from "react-icons/fa";

type Props = {}

function Search({}: Props) {
  const {setQuery} = useSearchStore();

  const handleSearch = (query: string) => {
    debounce(() => {
      setQuery(query);
    }, 300)();
  }

  return (
    <div
      className="bg-[#F4F5F6] px-4 py-2 rounded-sm flex gap-3 items-center">
      <FaSearch className="w-4 fill-[#B1B5C3]" />
      <input
        className="focus:outline-none placeholder-[#B1B5C3] text-black"
        placeholder="search tasks"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue=""
      />
    </div>
  )
}

export default Search