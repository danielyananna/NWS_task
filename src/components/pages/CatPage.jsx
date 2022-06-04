import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCats } from '../redux/actions';
import '../assets/CatPage.css';
import { Link } from 'react-router-dom';


const CatPage = ()=>{

    const cats = useSelector((state)=>state.allCats.cats);
    const dispatch = useDispatch();

    const fetchCats = async()=>{
        const response = await axios.get("https://api.thecatapi.com/v1/categories");
        dispatch(setCats(response.data));
     
    }


    useEffect(()=>{
        fetchCats();
    }, [])

    return(
        <div className="block">
            {cats.map((cat)=>{
                const {name, id} = cat;
                return (
                    <div className="block__container" key={id}>
                        <Link to={`/categories/${cat.id}`} className="block__container-item"> {name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CatPage;