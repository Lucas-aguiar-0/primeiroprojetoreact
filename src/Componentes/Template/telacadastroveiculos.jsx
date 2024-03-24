import { useState } from "react";
import CadastroVeiculo from "./cadastroveiculo";
import TabelaVeiculos from "./tabelaveiculo";
import listaVeiculos from "../../Dados/veiculos";

export default function TelaCadastroVeiculo(props){
    const [exibeTabela,setExibeTabela] = useState(true);
    const [veiculos, setVeiculos] = useState(listaVeiculos);

    function alternarTelas(){
        setExibeTabela(!exibeTabela)
    }

    return(
        exibeTabela ? <TabelaVeiculos veiculos={veiculos} setVeiculos={setVeiculos} chamartelacadastro={alternarTelas}/> : <CadastroVeiculo ChamarTabelaVeiculo={alternarTelas}/>
    );
}