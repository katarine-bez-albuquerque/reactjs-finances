import { ReactNode } from "react";

export interface IText {
    nome?: string;
    valor?: string;
    id?: string;
    classname?: string;
    children?: ReactNode;
}