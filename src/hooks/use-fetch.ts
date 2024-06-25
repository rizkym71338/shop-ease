import { useCallback, useEffect, useState } from 'react'
import { fetcher } from '@/libs'

interface UseFetchProps<T> {
  path: string
  initialData: T
}

export const useFetch = <T>({ path, initialData }: UseFetchProps<T>) => {
  const [data, setData] = useState<T>(initialData)

  const fetchData = useCallback(async () => {
    const response = await fetcher(path)
    setData(response.status === 200 ? response.data : initialData)
  }, [path])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, reFetch: fetchData }
}
