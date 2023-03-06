import React from 'react'
import WorldStatistic from './WorldStatistic'
import CountryStatistic from './CountryStatistic'


export default function Home() {
  return (
    <div style={{padding :"5%"}}>
        
        <WorldStatistic/>
        <CountryStatistic/>

    </div>
  )
}
