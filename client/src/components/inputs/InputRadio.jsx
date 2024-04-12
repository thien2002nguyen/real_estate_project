import React from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const InputRadio = ({
    style = 'form-radio',
    containerClassname,
    label,
    id,
    register,
    errors = {},
    inputClassname,
    validate,
    errorClassname,
    options = []
}) => {
    return (
        <div className={twMerge(clsx('flex flex-col gap-2 w-full', containerClassname))}>
            {label && <span className='font-medium text-main-700'>{label}</span>}
            {options.map(element => (
                <div key={element.value} className='flex items-center gap-2'>
                    <input
                        type='radio'
                        id={element.value}
                        value={element.value}
                        name={id}
                        className={twMerge(clsx(style, inputClassname))}
                        {...register(id, validate)}
                    />
                    <label htmlFor={element.value} className='text-main-700 cursor-pointer'>{element.label}</label>
                </div>
            ))}
            {errors && errors[id] && <small
                className={twMerge(clsx('text-red-500 font-medium text-[11px] h-2 leading-2', errorClassname))}>
                {errors[id]?.message}
            </small>}
        </div>
    )
}

export default InputRadio