'use client'

import { Suspense } from 'react'
import ContactUs from '../components/reg'

export default function Register() {
  return (
    <div>
      <div className="pt-10">
        <Suspense fallback={<div>Loading...</div>}>
          <ContactUs />
        </Suspense>
      </div>
    </div>
  )
}
