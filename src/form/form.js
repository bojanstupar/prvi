import React,{Component} from 'react';


class Form extends Component{


    initialState={

        ime:'',
        job:''
    }

    state=this.initialState 

    handleChange=(event)=>{

        const{name,value}=event.target

        this.setState({

            [name]:value,
        })
    }

    submitForm=()=>{

        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    render(){

      const{ime,job}=this.state

        return(
              <form>
             <label htmlFor="ime">Ime</label>
             <input type="text" name="ime" value={ime} onChange={this.handleChange}/>

             <label htmlFor="job">Job</label>
             <input type="text" name="job" value={job} onChange={this.handleChange}/>

             <input type="button" value="Dodaj" onClick={this.submitForm}/>
             </form>

        )
    }
}


export default Form;