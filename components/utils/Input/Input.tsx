import React, {
    useState,
} from "react";
import Image from "next/image";

type InputTytpeList = "text"
    | "email"
    | "tel"
    | "password"
    | "number"
    | "date"
    | "checkbox"
    | "radio"

export interface InputProps {
    eyeIcon?: boolean
    type: InputTytpeList,
    name: string
    id?: string
    placeholder?: string
    labelVisible: boolean
}

export const Input: React.FC<InputProps> = ({
    eyeIcon,
    type,
    name,
    id,
    placeholder,
    labelVisible,
}) => {

    const [showPassword, setShowPassword] = useState(false)
    
    const typeSelection = (value: InputTytpeList) => {
        if (value === 'text') {
            return <input type="text" name={name} id={id} placeholder={placeholder} />
        }
        if (value === 'email') {
            return <input type="email" name={name} id={id} placeholder={placeholder} />
        }
        if (value === 'tel') {
            return <input type="tel" name={name} id={id} placeholder={placeholder} />
        }
        if (value === 'password') {
            return (
                <div className="flex rounded-full py-2 px-4 border-1 border-red-500">
                    <input className="outline-none" type={showPassword?'text':'password'} name={name} id={id} placeholder={placeholder} />
                    <button onClick={()=>setShowPassword(!showPassword)}>
                        <Image
                            src="/assets/img/icons/eyeIcon.svg"
                            alt="Bouton afficher ou  cacher le texte"
                            width={53}
                            height={24}
                        />
                    </button>
                </div>

            )
        }
        if (value === 'number') {
            return <input type="number" name={name} id={id} placeholder={placeholder} />
        }
        if (value === 'date') {
            return <input type="date" name={name} id={id} />
        }
        if (value === 'checkbox') {
            return <input type="checkbox" name={name} id={id} />
        }
        if (value === 'radio') {
            return <input type="radio" name={name} id={id} />
        }
    }

    return (
        <div className="flex flex-col">
            {
                labelVisible
                    ? (
                        <label htmlFor={name}>{name}</label>
                    )
                    : (
                        <label className='hidden' htmlFor={name}>{name}</label>
                    )
            }
            {
                typeSelection(type)
            }
        </div>
    )
}

export default Input