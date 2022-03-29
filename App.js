import { useEffect,useState } from 'react';
import './App.css';

const App = () => {
  const[selectedOptions,setSelectedOptions]=useState([null,null,null]);
  const[investorsList,setInvestorsList]= useState([]);
  
  useEffect(() =>{
    fetch("http://192.168.1.39:5000/test")
    .then((response) => response.json())
    .then((data ) => {setInvestorsList(data)})
  
},[])

  return (
    <div>
    <h2>LOAN APPLICATION ID:#123</h2>
    
     <div className="container">
          <div className="table-container">
              <div className="table-heading-cell">
                Sl.No
              </div>

              <div className="table-heading-cell">
                Investors
              </div>

              <div className="table-heading-cell">
                Interest Rate
              </div>

              <div className="table-heading-cell">
                Select Preference
              </div>

              {investorsList.map(({id,name,rate},index) =>
                <InvestorRow 
                    key ={id} 
                    id ={id} 
                    name ={name}
                    rate={rate} 
                    index={index}
                    selectedOptions={selectedOptions}
                    setSelectedOptions={setSelectedOptions}
                    />)}
            </div>            
        </div>
    </div>
);
  }
  

  const InvestorRow = ({name,rate,index,id,selectedOptions,setSelectedOptions}) => {
    return(
      <>
        <div className="table-cell">
              {index+1}
        </div>

        <div className="table-cell">
              {name}
        </div>

        <div className="table-cell">
              {rate}
        </div>

        <div className="table-cell">
            <input
            type="radio"
            checked={selectedOptions[0] === id}
            onClick = {() =>{
              let newSelectedOptions = selectedOptions.map(option => option !== id?option:null);
              setSelectedOptions([
                id,
                newSelectedOptions[0] || newSelectedOptions[1],
              (newSelectedOptions[0] && newSelectedOptions[1]) || newSelectedOptions[2]
              ])}}
              onChange = {() =>{}}
              />
            <label htmlFor="">
                1st Option
            </label>


            <input 
            type="radio"
            checked={selectedOptions[1] === id }
            onClick = {() =>{
              let newSelectedOptions = selectedOptions.map(option => option !== id?option:null);
              setSelectedOptions([
                newSelectedOptions[0],
                id,
                newSelectedOptions[1] || newSelectedOptions[2]
              ])}}
              onChange = {() =>{}}
              />
            <label htmlFor="">
                2nd Option
            </label>


            <input 
            type="radio"
            checked={selectedOptions[2] === id }
            onClick = {() =>{
              let newSelectedOptions = selectedOptions.map(option => option !== id?option:null);
              setSelectedOptions([
                newSelectedOptions[0],
                newSelectedOptions[1],
                id,
              ])}}
              onChange = {() =>{}}
              />  
            <label htmlFor="">
                3rd Option
            </label>
        </div>
     </>) 
}    




export default App;
