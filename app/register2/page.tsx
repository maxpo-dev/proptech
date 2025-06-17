"use client"
import RegisterPage from "./register-page"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="mt-6">
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterPage />
      </Suspense>
    </div>
  )
}

