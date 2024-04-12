import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { Button, InputForm, InputRadio } from '..'
import { useForm } from 'react-hook-form'
import { apiRegister, apiSignIn } from '~/apis/auth'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'
import { useAppStore } from '~/store/useAppStore'

const Login = () => {
    const [variant, setVariant] = useState('LOGIN')
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const { setModal } = useAppStore()
    useEffect(() => {
        reset()
    }, [variant, reset])
    const onSubmit = async (data) => {
        if (variant === 'REGISTER') {
            const formData = {
                name: data.your_name,
                phone: data.phone_number,
                password: data.password,
                role: data.role
            }
            const response = await apiRegister(formData)
            if (response.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Congrats!',
                    text: response.message,
                    showConfirmButton: true,
                    confirmButtonText: 'Go sign in',
                }).then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        setVariant('LOGIN')
                    }
                })
            }
            else {
                toast.error(response.mes)
            }
        }
        else {
            const formData = {
                phone: data.phone_number,
                password: data.password
            }
            const response = await apiSignIn(formData)
            console.log(response);
            if (response.success) {
                setModal(false, null)
            }
            else {
                toast.error(response.mes)
            }
        }
    }
    return (
        <div className='bg-white rounded-md py-8 px-6 flex flex-col items-center gap-2 min-w-[500px]'
            onClick={e => e.stopPropagation()}
        >
            <h3 className='text-3xl font-josefin font-semibold tracking-tight'>
                Welcome to July20th
            </h3>
            <div className='flex gap-6 w-full justify-start border-b'>
                <span
                    className={clsx(
                        variant === 'LOGIN' && 'border-b-4 border-main-700', 'cursor-pointer'
                    )}
                    onClick={() => setVariant('LOGIN')}
                >Login</span>
                <span
                    className={clsx(
                        variant === 'REGISTER' && 'border-b-4 border-main-700', 'cursor-pointer'
                    )}
                    onClick={() => setVariant('REGISTER')}
                >New account</span>
            </div>
            <form className='flex flex-col w-full gap-4 px-4'>
                {variant === 'REGISTER' && <InputForm
                    register={register}
                    id='your_name'
                    label='Your name'
                    inputClassname='rounded-md'
                    placeholder='Type your name here'
                    validate={{ required: 'This field can not empty' }}
                    errors={errors}
                />}
                <InputForm
                    register={register}
                    id='phone_number'
                    label='Phone number'
                    inputClassname='rounded-md'
                    placeholder='Type your phone number here'
                    validate={{
                        required: 'This field can not empty',
                        pattern: {
                            value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                            message: 'Phone number invalid'
                        }
                    }}
                    errors={errors}
                />
                <InputForm
                    register={register}
                    id='password'
                    label='Password'
                    inputClassname='rounded-md'
                    placeholder='Type your password here'
                    validate={{ required: 'This field can not empty' }}
                    type='password'
                    errors={errors}
                />
                {variant === 'REGISTER' && <InputRadio
                    register={register}
                    id='role'
                    validate={{ required: 'This field can not empty' }}
                    errors={errors}
                    label='Type account'
                    options={[
                        { label: 'User', value: 'user' },
                        { label: 'Agent', value: 'agent' }
                    ]}
                />}
                <Button
                    buttonClassname='py-2 my-2'
                    handleOnClick={handleSubmit(onSubmit)}
                >{variant === 'LOGIN' ? 'Sign in' : 'Register'}</Button>
                <span className='cursor-pointer text-main-500 hover:underline duration-100 text-center'>
                    Forgot your password?
                </span>
            </form>
        </div>
    )
}

export default Login