
'use client'

import { createContext, useContext } from 'react'

export default function Page() {
  const theme = useContext(createContext('light'))
  console.log('---theme---', theme)
  return <h1>Hello Next.js</h1>
}