import './bookmark.css'
import { BsBookmarkHeartFill } from "react-icons/bs";
import { useFavorites } from '../hooks/usefavorites';


export default function Header(){
   const {favorites}=useFavorites()
return(
   <header >
<BsBookmarkHeartFill className='bookmark'/>
<span>{favorites.length}</span>
   </header>
)
}
