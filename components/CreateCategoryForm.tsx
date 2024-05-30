'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const CreateCategoryForm = () => {
  const [catName, setCatName] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch('api/categories', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ catName }),
      })

      if (res.ok) {
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      console.log('Category not created')
    }
  }

  return (
    <div>
      <div>
        <h2>Create Category</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" placeholder="category" />
        {/* <select>
          <option value="encours">en cours</option>
          <option value="production">production</option>
          <option value="distribution">distribution</option>
          <option value="programmation">programmation</option>
        </select> */}
        <button className="primary-btn">Add a category</button>
      </form>
    </div>
  )
}

export default CreateCategoryForm
