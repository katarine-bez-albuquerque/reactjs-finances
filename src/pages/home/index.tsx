import { useContext } from "react";
import Article from "../../components/article";
import Container from "../../components/container";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Info from "../../components/info";
import Main from "../../components/main";
import Navbar from "../../components/navbar";
import Section from "../../components/section";
import { IContext } from "../../model/context";
import { Context } from "../../contexts/context";

const Home = () => {

    const {
        data,
        getTotalReceita,
        getTotalDespesa,
        getTotal,
        opcoes,
        nome,
        getNome,
    } = useContext<IContext>(Context);

    return (
        <Container>
            <Header>
                <Navbar />
                <Info titulo="Total" valor={String(getTotal())} />
            </Header>
            <Main>
                <Section id="totals">
                    <Article classname="main-total" nome="Receitas" valor={String(getTotalReceita())} />
                    <Article classname="main-total" nome="Despesas" valor={String(getTotalDespesa())} />
                </Section>
                <Section id="form" nome="Escolha uma opção">
                    <form>
                        <select name="nome" onChange={e => getNome(e)}>
                            <option value="">Selecione...</option>
                            {
                                opcoes.map(item => (
                                    <option key={item.nome} value={item.nome}>{item.nome}</option>
                                ))
                            }
                        </select>
                    </form>
                </Section>
                <Section id="values">
                    <Article classname="list" nome="Receitas">
                        <ul className="list-items">
                            {
                                nome === '' ?
                                    data.map(item =>
                                        (item.tipo === 'receita') &&
                                        <li key={item.id} className="list-item">
                                            <span>{item.data}</span>&nbsp;
                                            <span>{item.nome}</span>&nbsp;
                                            <span>R$ {item.valor}</span>
                                        </li>)
                                    :
                                    data.map(item =>
                                        (item.nome === nome && item.tipo === 'receita') &&
                                        <li key={item.id} className="list-item">
                                            <span>{item.data}</span>&nbsp;
                                            <span>{item.nome}</span>&nbsp;
                                            <span>R$ {item.valor}</span>
                                        </li>)
                            }
                        </ul>
                    </Article>
                    <Article classname="list" nome="Despesas">
                        <ul className="list-items">
                            {
                                nome === '' ?
                                    data.map(item =>
                                        (item.tipo === 'despesa') &&
                                        <li key={item.id} className="list-item">
                                            <span>{item.data}</span>&nbsp;
                                            <span>{item.nome}</span>&nbsp;
                                            <span>R$ {item.valor}</span>
                                        </li>)
                                    :
                                    data.map(item =>
                                        (item.nome === nome && item.tipo === 'despesa') &&
                                        <li key={item.id} className="list-item">
                                            <span>{item.data}</span>&nbsp;
                                            <span>{item.nome}</span>&nbsp;
                                            <span>R$ {item.valor}</span>
                                        </li>)
                            }
                        </ul>
                    </Article>
                </Section>
            </Main>
            <Footer />
        </Container>
    )
}

export default Home;