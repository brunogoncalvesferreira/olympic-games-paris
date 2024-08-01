import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function LayoutDefault() {
  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  )
}