'use client';

import { Pagination } from 'flowbite-react';
import { useState } from 'react';

export function PreviousAndNextWithIcons({ pagination }: any) {
  console.log(pagination)
  const {page} = pagination
  
  const onPageChange = (page: number) => {

    location.href=`?page=${page}`
  }

  return (
    <Pagination
      currentPage={page}
      layout="navigation"
      onPageChange={page=>{onPageChange(page)}}
      showIcons
      totalPages={100}
    />
  )
}


