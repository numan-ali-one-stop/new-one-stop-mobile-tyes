'use client'

import { useState, FormEvent } from 'react'

export default function QuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [reg, setReg] = useState('')
  const [postcode, setPostcode] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const text =
      `*New Quote Request — One Stop Mobile Tyres 24/7*%0A` +
      `%0A*Name:* ${encodeURIComponent(name)}` +
      `%0A*Phone:* ${encodeURIComponent(phone)}` +
      `%0A*Vehicle Reg:* ${encodeURIComponent(reg)}` +
      `%0A*Postcode:* ${encodeURIComponent(postcode)}` +
      `%0A*Message / Tyre Size:* ${encodeURIComponent(message)}`

    window.open(`https://wa.me/447759708646?text=${text}`, '_blank')
  }

  const inputClass =
    'w-full border border-slate-200 rounded-xl p-3 sm:p-4 bg-white focus:outline-none focus:ring-2 focus:ring-[#b70011] focus:border-[#b70011] transition text-sm'

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
    >
      <div>
        <label className="block text-sm font-bold text-[#0f172a] mb-2">Full Name</label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0f172a] mb-2">Phone Number</label>
        <input
          type="tel"
          placeholder="07XXX XXXXXX"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0f172a] mb-2">
          Vehicle Registration
        </label>
        <input
          type="text"
          placeholder="AB12 CDE"
          value={reg}
          onChange={(e) => setReg(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-bold text-[#0f172a] mb-2">Postcode</label>
        <input
          type="text"
          placeholder="M1 1AA"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label className="block text-sm font-bold text-[#0f172a] mb-2">
          Message / Tyre Size
        </label>
        <textarea
          placeholder="Tell us what you need..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} h-28 sm:h-32`}
        />
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full bg-[#0f172a] text-white py-4 sm:py-5 rounded-xl hover:bg-slate-800 shadow-lg transition-all uppercase tracking-wider text-sm font-bold"
          style={{ fontFamily: 'var(--font-work-sans)' }}
        >
          Submit Request
        </button>
      </div>
    </form>
  )
}
