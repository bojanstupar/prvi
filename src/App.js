
 import React,{Component} from 'react';
 import Tabela from './tabela/tabela';
 import Form from './form/form';

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

  handleSubmit=(podatak)=>{

     this.setState({

      podaci:[this.state.podaci,podatak]
     })
  }
  render(){

    const{podaci}=this.state
    return (

          <div className="container">

         <Tabela tb={podaci} obrisiRemove={this.obrisiRemove}/>
         <Form handleSubmit={this.handleSubmit}/>
          </div>
    )
  }
}




export default App;
