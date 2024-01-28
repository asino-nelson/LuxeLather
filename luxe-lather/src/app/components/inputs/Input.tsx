"use client"

import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface InputProps{
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

const Input:React.FC<InputProps> = ({
    id,
    label,
    type,
    disabled,
    required,
    register,
    errors
}) => {
  return (
    <div className="w-full relative">
      <input className=""/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
