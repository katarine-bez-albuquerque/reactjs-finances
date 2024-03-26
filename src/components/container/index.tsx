import { ILayout } from "../../model/layout";

const Container = ({children}:ILayout) => (
    <div id="page">{children}</div>
)

export default Container;