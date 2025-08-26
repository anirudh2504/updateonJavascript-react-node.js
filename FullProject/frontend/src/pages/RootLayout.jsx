import React from 'react'

import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
const RootLayout = () => {
  return (
    <>
    <MainNavigation/>
    <main>
      <Outlet/>
        {/* <Link to='/events'>Event Page</Link>
        <Link to='/events/:id'>Event Detail</Link>
        <Link to='/events/new'>New Event Page</Link>
        <Link to='/events/:id/edit'>Edit Event Page</Link> */}
    </main>
    </>
    
    
  )
}

export default RootLayout