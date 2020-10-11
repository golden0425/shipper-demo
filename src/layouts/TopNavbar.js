import React, { useEffect } from 'react'

function TopNavbar() {
  useEffect(() => {
    console.log(window.location)
  })

  return (
    <>
      <div>标题栏</div>
    </>
  )
}

export default TopNavbar
