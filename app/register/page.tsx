'use client'

import { Suspense } from 'react'
import RegisterPage from '../components/register/registerPage'

export default function Register() {
  return (
    <div>
      <div className="pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <RegisterPage />
        </Suspense>
      </div>
    </div>
  )
}
