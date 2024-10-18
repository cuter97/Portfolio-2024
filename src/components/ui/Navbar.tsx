import { ButtonMode } from "./Button-mode"
import { ButtonLen } from "./ButtonLen"
import { NavMenu } from "./NavMenu"

export const Navbar = () => {
    return (
        <nav className="scroll-m-1 sticky top-0 2xl:hidden flex items-center justify-between p-3 bg-card z-10">
            <NavMenu />
            <div className="flex space-x-2">
                <ButtonMode />
                <ButtonLen />
            </div>
        </nav>
    )
}
