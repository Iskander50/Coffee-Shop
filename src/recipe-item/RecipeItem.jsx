import cappuccino1 from '../assets/cappuccino1.png'
import cappuccino3 from '../assets/cappuccino3.png'
import cappuccino4 from '../assets/cappuccino4.png'
import { FaPlusCircle } from "react-icons/fa";
import { useActions } from '../hooks/useActions';
import { useFavorites } from '../hooks/usefavorites';
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';

 
function RecipeItem({coffee}){
  const {favorites}=useFavorites()
  
  const {toggleFavorites}=useActions()
  const isExsits = favorites.some(c=>c.id===coffee.id)

  const [isLiked,setLiked]=useState(false)
  const handleClick=()=>{
    setLiked(!isLiked)
  }
return(


<div>

 {/* <img src={coffee.cover} alt='' className='coffee'/> 
  <h2 className='header'> {coffee.name} <CiHeart className='heart' onClick={handleClick} style={{ id:1,color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h2> 
 <p className='opensans'>{coffee.description}</p>  */}
  <img src={cappuccino1} alt="" /> 
<h2 className='header' >Cappuccino <CiHeart className='heart' onClick={handleClick} style={{ id:1,color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h2>
<p className='price'> Price:$50.00  
<button  className='plus' onClick={()=>toggleFavorites(coffee)}>{isExsits ? 'Remove from' :'Add to'} favorites </button>   
</p> 
{/* 
  <img src={cappuccino3} alt="" />
<h2 className='header' >Cappuccino <CiHeart className='heart' onClick={handleClick} style={{ id:1,color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h2>
<p className='price'> Price:$50.00  
<button  className='plus' onClick={()=>toggleFavorites(coffee)}>{isExsits ? 'Remove from' :'Add to'} favorites </button>   
</p>  */}

</div>

   )
}
export default RecipeItem


