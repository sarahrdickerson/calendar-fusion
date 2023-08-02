"use client";

import axios from 'axios';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@/components/ui/button';
import { useCallback, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import {
    FieldValues,
    SubmitHandler,
    useForm,
} from 'react-hook-form';

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/auth/login', data)
            .then(() => {
                console.log("close login sheet?");
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

  return (
    <div className='justify-center items-center flex'>
        <Button variant="outline" type="button" disabled={isLoading} className='gap-2'> 
            {isLoading ? (
                <CgSpinner className={`animate-spin ${isLoading ? 'block' : 'hidden'}`} />
            ) : (
                <FcGoogle />
            )}{" "}
            Login with Google
        </Button>
    </div>
  )
}

export default LoginForm