import Image from "next/image"
import Logo from '../../../public/images/cv.jpg';

export const ImgContent = () => {
    return (
        <figure className="w-fit relative mb-5 p-1">
            <Image src={Logo} alt="Logo" width={128} className="rounded-3xl m-4 shadow-[0_0_300px_20px_rgba(255,255,255,0.2)]" />
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -inset-y-5 right-0 w-px bg-custom-gradient-h"></div>
                <div className="absolute -inset-y-5 left-0 w-px bg-custom-gradient-h"></div>
                <div className="absolute -inset-x-5 bottom-0 h-px bg-custom-gradient-v"></div>
                <div className="absolute -inset-x-5 top-0 h-px bg-custom-gradient-v"></div>
            </div>
        </figure>
    )
}
