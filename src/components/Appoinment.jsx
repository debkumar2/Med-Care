// Appointment.jsx
import React, { useState } from 'react'
import { CiCalendar } from 'react-icons/ci'
import { doctorsList } from '../assets/assets'
import assets from '../assets/assets'
import ButtonComp from './ButtonComp'
import SubHeading from './SubHeading'

const Appointment = () => {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        doctor: '',
        message: '',
        date: '01-01-2023',
        time: '09:12',
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className='px-12 py-20 bg-white'>
            <div className="grid grid-cols-6 grid-rows-1 gap-4">
                <div className="col-span-2">
                    <div className="">
                        <h2 className='text-[#303334] font-extrabold text-6xl tracking-tighter mb-6'>
                            Request an appointment.
                        </h2>
                        <p className='text-[#848587] text-lg font-normal mb-7'>Your information will be forwarded to a scheduling specialist who will contact you.</p>
                    </div>
                </div>
                <div className='col-span-4 col-start-3'>
                    <div className='grid grid-cols-2 gap-4'>
                        <input
                            name='fullName'
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Patient's full name*"
                            className='border border-[#dee2e6] rounded-lg px-4 py-4 text-[#303334] outline-none focus:border-[#18bcc7] transition-colors placeholder:text-[#848587]'
                        />
                        <select
                            name='doctor'
                            value={form.doctor}
                            onChange={handleChange}
                            className='border border-[#dee2e6] rounded-lg px-4 py-4 text-[#848587] outline-none focus:border-[#18bcc7] transition-colors appearance-none bg-white cursor-pointer'
                        >
                            <option value=''>Select doctor</option>
                            {doctorsList.map((doc, i) => (
                                <option key={i} value={doc.docName}>{doc.docName}</option>
                            ))}
                        </select>
                        <input
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Patient's email*"
                            className='border border-[#dee2e6] rounded-lg px-4 py-4 text-[#303334] outline-none focus:border-[#18bcc7] transition-colors placeholder:text-[#848587]'
                        />
                        <textarea
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Your message'
                            rows={4}
                            className='border border-[#dee2e6] rounded-lg px-4 py-4 text-[#303334] outline-none focus:border-[#18bcc7] transition-colors placeholder:text-[#848587] resize-none row-span-2'
                        />
                        <div className='flex gap-4'>

                            <input
                                type='date'
                                name='date'
                                value={form.date}
                                onChange={handleChange}
                                className='border border-[#dee2e6] rounded-lg px-4 py-4 text-[#848587] outline-none focus:border-[#18bcc7] transition-colors'
                            />
                            <input
                                type='time'
                                name='time'
                                value={form.time}
                                onChange={handleChange}
                                className='border border-[#dee2e6] w-full rounded-lg px-4 py-4 text-[#848587] outline-none focus:border-[#18bcc7] transition-colors'
                            />
                        </div>
                        <p className='text-[#848587] font-normal text-sm col-span-1'>
                            We are committed to protecting your privacy. We will never collect information about you without your explicit consent.
                        </p>
                        <div className='max-w-[220] ml-auto'>
                            <ButtonComp icon={<CiCalendar fontSize='20px' color='#fff' />} primary={true} text='Book appointment' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Appointment