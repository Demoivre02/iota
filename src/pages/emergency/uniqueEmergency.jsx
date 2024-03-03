import React from 'react'
import { useParams, Link } from 'react-router-dom'

export  function UniqueEmergency() {

    const {uniqueId} = useParams()

  return (
    <div>UniqueEmergency {uniqueId}</div>
  )
}
