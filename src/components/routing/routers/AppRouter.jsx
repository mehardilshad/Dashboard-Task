import React, { Suspense, useState, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SectionLoader from '../../genaral/Loader/SectionLoader'

import Courses from '../../screens/Courses'

const Topbar = lazy(() => import('../../includes/Topbar'))
const DashBoard = lazy(() => import('../../screens/DashBoard'))
const Students = lazy(() => import('../../screens/Students'))

const AppRouter = () => {
  const [isExpand, setExpand] = useState(false)

  return (
    <Suspense fallback={<SectionLoader />}>
      <>
        <Topbar isExpand={isExpand} setExpand={setExpand} />
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard/" />} />

          <Route path="dashboard" element={<DashBoard />} />

          <Route path="/students" element={<Students />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </>
    </Suspense>
  )
}

export default AppRouter
