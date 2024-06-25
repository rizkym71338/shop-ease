import axios from 'axios'

export const fetcher = async (url: string) => {
  try {
    return await axios.get(url)
  } catch (error: any) {
    return error.response
  }
}
