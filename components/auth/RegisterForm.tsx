"use client";

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { useCallback, useEffect, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
    const session = useSession();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    if (session?.status === 'loading') {
        return (
        <div className='flex items-center justify-center h-screen z-10'>
            <span className="loading loading-spinner text-primary"></span>  
        </div>
        );
    }

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [session?.status, router])

  return (
    <div className='justify-center items-center flex'>
        <Button variant="outline" type="button" disabled={isLoading} className='gap-2' onClick={() => signIn('google', { callbackUrl: '/dashboard' })}> 
            {isLoading ? (
                <CgSpinner className={`animate-spin ${isLoading ? 'block' : 'hidden'}`} />
            ) : (
                <FcGoogle />
            )}{" "}
            Register with Google
        </Button>
    </div>
  )
}

export default RegisterForm