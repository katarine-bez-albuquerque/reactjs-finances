import { ChangeEvent, createContext, useState } from "react";
import { ILayout } from "../model/layout";
import { IFinanca } from "../model/financa";
import { IContext } from "../model/context";
import Json from '../data/financas.json';
import JsonOpcoes from '../data/opcoes.json';
import { IOpcao } from "../model/opcoes";

const valorInicial = {
    data: Json.data,
    setData: () => {},
    getTotalReceita: () => {},
    getTotalDespesa: () => {},
    getTotal: () => {},
    opcoes: JsonOpcoes.data,
    nome: '',
    getNome: () => {},
    show: false
}

export const Context = createContext<IContext>(valorInicial);

export const HomeProviderContext = ({children}:ILayout) => {

    const [data, setData] = useState<IFinanca[]>(valorInicial.data);

    const [opcoes] = useState<IOpcao[]>(valorInicial.opcoes);

    const [nome, setNome] = useState(valorInicial.nome);

    const [show,setShow] = useState(valorInicial.show);

    const getTotalReceita = (): string => {
        let soma:number = 0;
        for(let v of data) {
            if(v.tipo === 'receita') {
                soma += Number(v.valor);
            }
        }
        return soma.toFixed(2);
    }

    const getTotalDespesa = (): string => {
        let soma:number = 0;
        for(let v of data) {
            if(v.tipo === 'despesa') {
                soma += Number(v.valor);
            }
        }
        return soma.toFixed(2);
    }

    const getTotal = (): string => {
        let calc:number = 0;
        calc = Number(getTotalReceita()) - Number(getTotalDespesa())
        return calc.toFixed(2);
    }

    const getNome = (e:ChangeEvent<HTMLSelectElement>): void => {
        setNome(e.target.value);
        setShow(false);
        if(nome !== '') {
            setShow(true);
        }
        else {
            setShow(false);
        }
    }
  
    return(
        <Context.Provider value={{
            data, 
            setData, 
            getTotalReceita, 
            getTotalDespesa, 
            getTotal, 
            opcoes, 
            nome,
            getNome,
            show
        }}>
            {children}
        </Context.Provider>
    )
}

