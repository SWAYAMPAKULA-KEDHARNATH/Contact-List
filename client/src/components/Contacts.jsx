// import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from './DataTable'
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { getAllData } from '../fetchContact/FetchContact';
import { useQuery} from 'react-query';
const Contacts = () => {
    const navigate=useNavigate();
    const {data,isLoading,isError}=useQuery("contact",getAllData);
  return (
    <div className='contact'>
        <div className="importbtn"><Button onClick={()=>navigate("/add")} variant="outlined" className='import-btn' startIcon={<AddIcon/>}>  Import Contact</Button></div>
        <div className="table"><DataTable data={data}/></div>
      
    </div>
  )
}

export default Contacts
