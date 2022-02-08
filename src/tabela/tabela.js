
import React from 'react';
import TabelaHeader from './tabelaheader';
import TabelaBody from './tabelabody';

const Tabela=(props)=>{

   const{tb,obrisiRemove}=props
    return(

        <table>

            <TabelaHeader/>
            <TabelaBody tbb={tb} obrisiRemove={obrisiRemove} />
        </table>
    )
}

export default Tabela;