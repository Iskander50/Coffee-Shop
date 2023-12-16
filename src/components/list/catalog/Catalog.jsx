import cappuccino3 from '../../../assets/cappuccino3.png'
import cappuccino4 from '../../../assets/cappuccino4.png'
import coffee from '../../../assets/coffee.png'
import { CiHeart } from "react-icons/ci";

import './catalog.css'
import { useState } from 'react';
import RecipeItem from '../../../recipe-item/RecipeItem';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import Header from '../../../bookmark/Bookmark';
import { useGetCoffeesQuery } from '../../../store/api/api';


function Catalog ()  {

   const [isLiked,setLiked]=useState(false)
    const handleClick=()=>{
      setLiked(!isLiked)
    }
  // const { isLoading ,data} = useGetCoffeesQuery()



  return (


<div className='catalog'> 
{/* <div>
          {isLoading ?
          <div>Loaidng...</div> :
          data ? data.map(coffee => <RecipeItem
          key={coffee.id}
          coffee={coffee}
          />
          ):(
            <div>Not Found</div>
          )}        
        </div>     */}

{/* <Header  className='icon'/> */}
{/* <h2 className='name'>Cappuccino</h2> */}
        
  <RecipeItem 
  coffee={{
    name:'Cappuccino',
    id:1,
  }}
  />

   <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:2,
  }}
  />
  <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:3,
  }}
/> 
        
<RecipeItem
  coffee={{
    name:'Cappuccino',
    id:4,
  }}
  />

   <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:5,
  }}
  />
  <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:6,
  }}
/> 
        
<RecipeItem
  coffee={{
    name:'Cappuccino',
    id:7,
  }}
  />

   <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:8,
  }}
  />
  

  {/* <h2>Coffee</h2> */}

  
  <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:9,
  }}
  />
  <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:10,
  }}
/> 
        
<RecipeItem
  coffee={{
    name:'Cappuccino',
    id:11,
  }}
  />

   <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:12,
  }}
  />
  <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:13,
  }}
/> 
        
<RecipeItem
  coffee={{
    name:'Cappuccino',
    id:14,
  }}
  />

   <RecipeItem
  coffee={{
    name:'Cappuccino',
    id:15,
  }}
  />
    <RecipeItem 
  coffee={{
    name:'Cappuccino',
    id:16,
  }}
  />


{/* <div>
<img src={cappuccino4} alt="Cappuccino" className='coffee' />
 <h1  className='header'>Cappuccino <CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h1>
<p  className='opensans'>With Sugar</p>
<label className='price'>$50.00  <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg></label>

</div>

<div>
<img src={cappuccino3} alt="Cappuccino" className='coffee'/>
 <h1  className='header'> Cappuccino <CiHeart className='heart'  onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h1>
<p  className='opensans'>With Sugar</p>
<label className='price'>$50.00 
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg>
</label>

</div>

<div>
<img src={cappuccino4} alt="Cappuccino" className='coffee'/>
 <h1  className='header'>Cappuccino<CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /> </h1>
<p className='opensans'>With Sugar</p>
<label className='price'>$50.00
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg>
 </label>

</div>




</div>

<div className='mcoffee'>
   <div>
<img src={coffee} alt="Cappuccino" className='coffee'/>
 <h1  className='header'>Coffee<CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /> </h1>
<p  className='opensans'>With Sugar</p>
<label className='price'>$50.00
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none" className='plus' >
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg>
 </label>

 </div>
 <div>
 <img src={coffee} alt="Cappuccino" className='coffee'/>
 <h1 className='header'  >Coffee <CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h1>
<p className='opensans'>With Sugar</p>
<label className='price'>$50.00
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg>
 </label>

 </div>
 <div>
 <img src={coffee} alt="Cappuccino" className='coffee'/>
 <h1  className='header' >Coffee<CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} /></h1>
<p className='opensans'>With Sugar</p>
<label className='price'>$50.00
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"/>
</svg>
 </label>

 </div>
<div>
<img src={coffee} alt="Cappuccino" className='coffee'/>
 <h1  className='header'>Coffee 
 <CiHeart className='heart' onClick={handleClick} style={{color:isLiked?'red':'black'}} onChange={isLiked?'Liked':'Not Liked'} />
 
 
 </h1>

<p  className='opensans'>With Sugar</p>
<label className='price'>$50.00
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 1.375C8.14688 1.375 1.375 8.14688 1.375 16.5C1.375 24.8531 8.14688 31.625 16.5 31.625C24.8531 31.625 31.625 24.8531 31.625 16.5C31.625 8.14688 24.8531 1.375 16.5 1.375ZM17.875 22C17.875 22.3647 17.7301 22.7144 17.4723 22.9723C17.2144 23.2301 16.8647 23.375 16.5 23.375C16.1353 23.375 15.7856 23.2301 15.5277 22.9723C15.2699 22.7144 15.125 22.3647 15.125 22V17.875H11C10.6353 17.875 10.2856 17.7301 10.0277 17.4723C9.76987 17.2144 9.625 16.8647 9.625 16.5C9.625 16.1353 9.76987 15.7856 10.0277 15.5277C10.2856 15.2699 10.6353 15.125 11 15.125H15.125V11C15.125 10.6353 15.2699 10.2856 15.5277 10.0277C15.7856 9.76987 16.1353 9.625 16.5 9.625C16.8647 9.625 17.2144 9.76987 17.4723 10.0277C17.7301 10.2856 17.875 10.6353 17.875 11V15.125H22C22.3647 15.125 22.7144 15.2699 22.9723 15.5277C23.2301 15.7856 23.375 16.1353 23.375 16.5C23.375 16.8647 23.2301 17.2144 22.9723 17.4723C22.7144 17.7301 22.3647 17.875 22 17.875H17.875V22Z" fill="#00512C"  />
</svg>
 </label>
 
</div>
 */}


   </div>






  )
}

export default Catalog
   
// <div className='catalog'>
// { catalog.map((val,index)=>{
//   const{cover,name,category,price,icon}=val
  
//   return(
//     <div className='box' key={index}>
// <div className='coffe'> 
// <img src={cover} alt="coffee" className=''  />
// </div>

// <h4>{name}</h4>

// <p>{category}</p>

// <div className='icon-price'>
   
// <div>
// <label>{price}</label>
// <label className='plus'>{icon}</label>

// </div>


// </div>


// </div>
//   )

// })}

// </div>