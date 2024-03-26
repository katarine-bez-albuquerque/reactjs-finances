import { IText } from "../../model/text";

const Article = ({nome, valor, classname, children}:IText) => (
    <article className={classname}>
        {nome && (<h4>{nome}</h4>)}
        {valor && (<h4>R$ {valor}</h4>)}
        {children}
    </article>
)

export default Article;