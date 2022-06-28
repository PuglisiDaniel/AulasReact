import React, {useEffect, useState, memo} from "react";

//ShouldComponentUpdate
const areEqual = (prevProps, nextProps)=>{
    return prevProps.loading === nextProps.loading
}

function Twitter (props){
    const {loading} = props
    const [tweet, setTweet] = useState('title')

    // componentDidMount
    useEffect(()=>{
        const {post, loading} = props
        console.log('componentDidMount', post)
        console.log('componentDidMount:loading', loading)
    }, [])

    
    // componentDidUpdate
    useEffect(()=>{
        console.log('ComponentDidUpdate', loading)

    }, [loading])

    //componentWillUnmount
    useEffect(()=>{
        return ()=>{
            console.log('componentWillUnmount: fui removido')

        }
    }, [])


    const handleTweet = ()=>{
      setTweet('Atualizado')
    }

    
     
     console.log('Tweet Atualizado: ', tweet)

    return(
        <div>
            <button onClick={handleTweet} >Re-render</button>
            
            opa eai vei blz?
        </div>
    )
    
}

export default memo(Twitter, areEqual);