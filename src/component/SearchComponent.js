import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const SearchComponent = () => {
    const [term,setTerm]=useState('');
    useEffect(()=>{},[term])
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter search term</label>
                    <input 
                    className="input"
                    value={term}
                    onChange={(e)=>{setTerm(e.target.value)
                    console.log(e.target.value)}}
                    />
                </div>
            </div>
        </div>
    );
};
export default SearchComponent;