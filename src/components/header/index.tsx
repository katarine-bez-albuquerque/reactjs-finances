import { ILayout } from "../../model/layout";

const Header = ({children}:ILayout) => (
    <header id="header">
        {children}
    </header>
)

export default Header;