import {useEffect} from 'react'
const Logout = (props) => {
    useEffect(()=>{
        localStorage.clear()
        props.history.push('/login')
    },[])


    return (  <></>);
}
 
export default Logout;