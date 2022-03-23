import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { client } from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import { searchQuery  } from '../utils/data'

const Feed = () => {
  const [loading, setLoading ] = useState(true);

  const { categoryId } =  useParams();
  useEffect( () => {
    setLoading(true);

    if(categoryId) {
      const query = searchQuery(categoryId);
      
      client.fetch(query)
        .then( (data) => {
          setPins(data);
          setLoading(false);
        } )
    } else {

    }
  }, [categoryId] )


  if (loading) return <Spinner message="We aredding new ideas to your feed!" />



  return (
    <div>Feed</div>
  )
}

export default Feed