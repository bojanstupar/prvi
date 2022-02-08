
import React from 'react';


const TabelaBody=(props)=>{

  const rows=props.tbb.map((row,index)=>{

    return (

        <tr key={index}>

            <td>{row.ime}</td>
            <td>{row.job}</td>
            <td><button onClick={()=>props.obrisiRemove(index)}>Remove</button></td>
        </tr>
    )
  })

  return <tbody>{rows}</tbody>

}


export default TabelaBody;