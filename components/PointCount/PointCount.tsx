import Image from "next/image";
import React from "react";

export interface PointCountProps {
    firstValue: number
    lastValue: number
}


export const PointCount: React.FC<PointCountProps> = ({
    firstValue,
    lastValue,
}) => {
    return (
        <div className='flex justify-between items-center font-accent text-8xl min-w-full'>
            <span
                className="inline-block relative mr-7"
            >
                {firstValue}
                <span className="inline-block absolute w-6 afterIcon">
                    <Image
                        src='/assets/img/icons/pointValueIcon.svg'
                        alt="image euro"
                        width={30}
                        height={30}
                    />
                </span>
            </span>
            <span className='inline-block rotate-90'>ll</span>
            <span className='inline-block pl-7'>
                {lastValue}
                <span className="text-6xl">pts</span>
            </span>
        </div>
    )
}

export default PointCount