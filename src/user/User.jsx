import {  useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

export default function User(){
   const {isLoading, error, user}=useSelector(state=>state.user)

const {getUserById}=useActions()

return(
   <div>
   {isLoading ? (
      <div>Loading...</div>
   ):error ? (
      <div>{error.message}</div>
   ):user?.name?(
      <h1 className='header'>User:{user.name}</h1>
   ):(
      <h1 className='header'>USER NOT FOUND</h1>
   )}
      <button onClick={()=>getUserById(1)} className='bta'>Get user</button>

   </div>
)

}