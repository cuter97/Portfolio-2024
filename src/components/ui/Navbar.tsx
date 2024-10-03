import { ButtonMode } from "./Button-mode"
import { NavMenu } from "./NavMenu"

export const Navbar = () => {
    return (
        <nav className="scroll-m-1 sticky top-0 xl:hidden flex items-center justify-between p-3 bg-card z-10">
            <NavMenu />
            <div className="flex">
                <ButtonMode type="darkmode" variant="ghost" />
                <ButtonMode type="language" variant="ghost" />
            </div>
        </nav>
    )
}
