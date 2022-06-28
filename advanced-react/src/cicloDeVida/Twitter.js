import React, {Component} from "react";

class Twitter extends Component{

    state = {
        tweet: 'tuitado'
    }

    componentDidMount(){
        const {post, loading} = this.props
        console.log('componentDidMount', post)
        console.log('componentDidMount:loading', loading)
    }

    componentDidUpdate(prevProps){
        const {loading} = this.props
        if(this.props.loading !== prevProps.loading){
            console.log('ComponentDidUpdate:loading', loading)
        }
    }

    componentWillUnmount(){
        console.log('componentWillUnmount:')
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.tweet !== nextState.tweet 
    }

    tweet = ()=>{
        this.setState({
            tweet: true
        })
    }

    render(){

        const {post} =this.props
        console.log('render', post)

        return(
            <div>
                <button onClick={this.tweet} >Re-render</button>
                opa eai vei blz?
            </div>
        )
    }
}

export default Twitter;