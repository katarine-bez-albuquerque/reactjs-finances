import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IFinanca } from "./financa";
import { IOpcao } from "./opcoes";

export interface IContext {
    data: IFinanca[];
    setData?: Dispatch<SetStateAction<IFinanca[]>>;
    getTotalReceita: () => void;
    getTotalDespesa: () => void;
    getTotal: () => void;
    opcoes: IOpcao[];
    nome: string;
    getNome: (e:ChangeEvent<HTMLSelectElement>) => void;
    show?: boolean;
}