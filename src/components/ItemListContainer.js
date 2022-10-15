import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import prodJson from "../prod.json"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState ([])
  /*
    const getProduct = (data, time) => 
      new Promise ((resolve, reject) => {
        setTimeout(() => {
          if(data){
            resolve(data)
          }else {
            reject("Error")
          }
        }, time);
      })
  */

      const getProduct = () => {
        const db = getFirestore()
        const itemCollection = collection( db, 'items' )
        getDocs( itemCollection ).then( snapshot => {
            setProducts( snapshot.docs.map( d => ({id: d.id, ...d.data()}) ) );
        })
      }

    useEffect(() => {
      getProduct()
    }, [])

  return (
    <div>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer