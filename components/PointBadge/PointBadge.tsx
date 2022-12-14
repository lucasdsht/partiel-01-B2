import React from "react";
import Image from "next/image";

export interface PointBadgeProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    points: number
}

export const PointBadge: React.FC<PointBadgeProps> = ({
    src,
    alt,
    width,
    height,
    points,
}) => {
    return (
        <div className="text-center">
            <div className="rounded-full overflow-hidden">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            </div>
            <h4 className="font-accent text-primary text-2xl">
                {points}
                <span className="text-lg">
                    pts
                </span>
            </h4>
        </div>
    )
}

export default PointBadge;