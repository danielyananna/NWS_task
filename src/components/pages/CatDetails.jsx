
import React, { useEffect } from 'react'
import '../assets/CatPage.css';
import { useParams } from 'react-router-dom';
import { setDetails } from '../redux/actions';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';


const CatDetails = ()=>{

    const {categoryId} = useParams();
    const details = useSelector((state)=>state.cat);
    console.log(details)

    const dispatch = useDispatch();

    const fetchCats = async()=>{
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryId}`).catch(err=>{
            console.error(err);
        });

        dispatch(setDetails(response.data));

    }

    useEffect(()=>{
        fetchCats();
    }, [categoryId])

    
    return(
        <div>
            <p>In the console.log we can see the object containg cat info, but could not render them =  {categoryId} </p> 
            {/* <img src={details.url} /> */}
            
        </div>
        
    )
}

export default CatDetails;