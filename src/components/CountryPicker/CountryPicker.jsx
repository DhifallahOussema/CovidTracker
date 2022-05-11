import React,{useEffect,useState} from 'react';
import { NativeSelect,FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchcountries} from '../../api';


const CountryPicker = ({handleCountryChange}) => {
  const [fetchedcountries, setFetchedcountries] = useState([]);
  useEffect(() =>{
    const fetchAPI = async() => {
      setFetchedcountries(await fetchcountries());

    }
    fetchAPI();
  },[setFetchedcountries]);

  


  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
        <option value="global">Global</option>
        {fetchedcountries.map((country,i)=><option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  );
}

export default CountryPicker;
