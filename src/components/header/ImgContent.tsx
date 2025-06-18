import Image from "next/image"
import Logo from '../../../public/images/portfolio_img.webp';

export const ImgContent = () => {
    return (
        <figure className="w-fit relative mb-5 border-2 rounded-xl border-orange-700">
            <Image src={Logo} alt="Logo" width={148} className="rounded-xl shadow-[0_0_300px_20px_rgba(255,255,255,0.2)]" />
        </figure>
    )
}
