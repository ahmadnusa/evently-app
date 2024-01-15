'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'
import { formUrlQuery } from '@/lib/utils'

type PaginationProps = {
  page: number | string
  totalPages: number
  urlParamName?: string
}

export default function Pagination({
  page,
  totalPages,
  urlParamName,
}: PaginationProps) {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  function onClick(btnType: string) {
    const pageValue = btnType === 'next' ? Number(page) + 1 : Number(page) - 1

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || 'page',
      value: pageValue.toString(),
    })

    push(newUrl, { scroll: false })
  }

  return (
    <div className="flex gap-2">
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) <= 1}
        onClick={() => onClick('prev')}
      >
        Previous
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="w-28"
        disabled={Number(page) >= totalPages}
        onClick={() => onClick('next')}
      >
        Next
      </Button>
    </div>
  )
}
