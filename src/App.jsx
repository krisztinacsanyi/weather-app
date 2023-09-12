import React from 'react'
import Dashboard from './pages/Dashboard'
import SelectCity from './pages/SelectCity'
import NewCity from './pages/NewCity'
import { Routes, Route } from 'react-router-dom'
import Container from '@mui/material/Container'

export default function App() {
  return (
    <Container maxWidth='sm'>
      <Routes>
        <Route path='/' element={<SelectCity />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/new' element={<NewCity />} />
      </Routes>
    </Container>
  )
}
