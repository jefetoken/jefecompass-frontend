import { useState } from 'react'
import { dataResponse } from '../interfaces/data.interface'

const apiUrl = 'http://51.195.202.219:8010/api/private'
const apiUrlPublic = 'http://51.195.202.219:8010/api/public'



export const useFetch = () => {
  const [state, setState] = useState<dataResponse>({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async (url: string, method: string, payload?: object) => {
    setState({
      ...state,
      isLoading: true,
    })

    const storedToken = localStorage.getItem('token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`
    }

    const body = payload && JSON.stringify(payload)

    const resp = await fetch(`${apiUrl}${url}`, {
      method,
      headers,
      body
    })
    const data = await resp.json()

    setState({
      data,
      isLoading: false,
      hasError: null,
    })

    if (storedToken === null) {
      window.location.href="/login"
    }
    return {
      data,
      hasError: null,
    }
  }

  const getFetchPublic = async (urlPublic: string, method: string, payload?: object) => {
    setState({
      ...state,
      isLoading: true,
    })

    const headers = {
      'Content-Type': 'application/json',
    }

    const body = payload && JSON.stringify(payload)

    try{
      const resp = await fetch(`${apiUrlPublic}${urlPublic}`, {
        method,
        headers,
        body
      })
      
      if(!resp.ok) throw Error('Request Error') 

      const data = await resp.json()
  
      setState({
        data,
        isLoading: false,
        hasError: null,
      })
  
      return {
        data,
        hasError: false,
      }

    }catch(e){
      return {
        data: null,
        hasError: true,
      }
    }

  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    getFetch,
    getFetchPublic,
  }
}
