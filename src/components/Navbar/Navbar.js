import { useState, useEffect } from 'react'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { query, collection, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../../services/firebase';


const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      const collectionRef = query(collection(db, 'categories'), orderBy('order')) 
  
      getDocs(collectionRef).then(response => {
  
        const categoriesAdapted = response.docs.map(doc => {
          const data = doc.data()
          const id = doc.id
  
          return { id, ...data}
        })
        setCategories(categoriesAdapted)
        console.log(categories)
      })
    }, [])

    return (
    <nav className='navbar'>
        <div className='logo-container'>
            <Link to={`/`} className='navbar-logo titles' href='http://localhost:3000/'>Kaizoku</Link>
            
        </div>
        <div className='navbar-container'>
        {
            categories.map(cat => (
              <NavLink key={cat.id} to={`/category/${cat.slug}`} className='navbar-cat-component'>{cat.label} </NavLink>
            ))
          }
        </div>
        <CartWidget/>
    </nav>

);
}

export default Navbar;