import { ITotals } from "../../model/tatals";

const Info = ({titulo, valor}:ITotals) => (
    <section id="header-section">
        <article id="titles">
            <h1>Finanças Pessoais</h1>
            <span></span>
            <h4>Exemplar</h4>
        </article>
        <article id="total">
            <h2>{titulo}</h2>
            <h3>R$ {valor}</h3>
        </article>
    </section>
)

export default Info;