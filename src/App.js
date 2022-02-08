
 import React,{Component} from 'react';
 import Tabela from './tabela/tabela';

class App extends Component {

   state={


    podaci:[{

       ime:'Boki',
       job:'It'
    },
    {
      ime:'Jovan',
      job:'dataAnalyser'
    }
  ]
  }

  obrisiRemove=(index)=>{


     const{podaci}=this.state

     this.setState({

        podaci:podaci.filter((podatak,i)=>{

          return i!==index
        })  
     })
  }
  render(){

    const{podaci}=this.state
    return (

          <div className="container">

         <Tabela tb={podaci} obrisiRemove={this.obrisiRemove}/>
          </div>
    )
  }
}




export default App;
