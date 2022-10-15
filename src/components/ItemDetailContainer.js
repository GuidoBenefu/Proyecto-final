import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import prodJson from "../prod.json"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from 'react-router-dom'
//import { data } from 'autoprefixer'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {slug} = useParams()
    useEffect(() => {
      getItem()
      .then( data =>{
        if (data) {
            setItem(data)
        }
      })
    }, [])
    
    
    const getItem = () => { 
        return new Promise( resolve => {
            setTimeout(() => {
                resolve(prodJson.find(p => p.slug == slug))
            }, 2000);
        })
    }
  
/*  
    const getItem = () => {
      const db = getFirestore()
      const itemCollection = collection( db, 'items' )
      getDocs( itemCollection )
      .then( snapshot => {
          setItem( snapshot.docs.map( p => ({slug: p.slug, ...p.data()}) ) );
      })
    }
*/ 
  
  
    return (
    <ItemDetail item ={item}/>
  )
}

export default ItemDetailContainer