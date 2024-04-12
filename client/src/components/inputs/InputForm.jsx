import clsx from 'clsx'
import React from 'react'
import { twMerge } from 'tailwind-merge'

const InputForm = ({
    style = 'form-input placeholder:text-sm',
    containerClassname,
    label,
    id,
    type = 'text',
    register,
    errors = {},
    inputClassname,
    validate,
    errorClassname,
    placeholder = 'Enter here...',
}) => {
    return (
        <div className={twMerge(clsx('flex flex-col gap-2 w-full', containerClassname))}>
            {label && <label htmlFor={id} className='font-medium text-main-700'>{label}</label>}
            <input
                type={type}
                id={id}
                name={id}
                className={twMerge(clsx(style, inputClassname))}
                {...register(id, validate)}
                placeholder={placeholder}
            />
            {errors && errors[id] && <small
                className={twMerge(clsx('text-red-500 font-medium text-[11px] h-2 leading-2', errorClassname))}>
                {errors[id]?.message}
            </small>}
        </div>
    )
}

export default InputForm