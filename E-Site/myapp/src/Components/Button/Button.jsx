import React from 'react'

export default function Button({text,className}) {
  return (
    <div>
      <button className={`px-8 py-2 bg-blue-500  text-base text-white rounded ${className}`}>{text}</button>
    </div>
  )
}
