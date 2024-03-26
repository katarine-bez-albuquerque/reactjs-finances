import { IText } from "../../model/text";

const Section = ({nome, valor, id, children}:IText) => (
    <section id={id}>
        { nome && ( <h4>{nome}</h4> ) }
        { valor && ( <h4>R$ {valor}</h4> )}
        {children}
    </section>
)

export default Section;