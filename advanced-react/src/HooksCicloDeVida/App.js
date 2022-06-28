import React, {Component} from 'react'
import Twitter from './TwitterHooks';



class App extends Component{

  state={
    loading: false,
    actived: true
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = ()=>{
    this.setState({
      actived: false
    })
  }

  render (){

    const post =[{
      title: 'xpto',
      description: 'exemplo'
    },{
      title:'opa',
      description: 'segue'
    }]
    return (
      <div>
        <button onClick={this.onRemove}>Remover componente</button>
        {this.state.actived && (
           <Twitter post={post}  loading={this.state.loading}/>
        )}
       

      </div>
      
    )
  }
}

export default App;