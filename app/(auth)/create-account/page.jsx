import Image from 'next/image'
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const CreateAccount = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center p-10 bg-slate-100 border-gray-200'>
                <Image src="/logo.png" width={200} height={200} alt='logo' />
                <h2 className='font-bold text-3xl'>Create an Account</h2>
                <h2 className='text-gray-500'>Enter your Email and Password to Create an account</h2>
                <div className='w-full flex flex-col gap-5 mt-7'>
                    <Input placeholder="Username" />
                    <Input placeholder="email@gmail.com" />
                    <Input type="password" placeholder="Password" />
                    <Button>Create an Account</Button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount