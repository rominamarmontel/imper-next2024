'use client'

import Navbar from '@/components/Navbar'
import React, { ReactNode, Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/Footer'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center pt-40">
        {children}
      </div>
      <Toaster />
      <Footer />
    </Fragment>
  )
}

export default DashboardLayout
