import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum'

function header() {
  return (
    <div className="header">
    
    <IconButton>
    <PersonIcon fontSize='large' className='header__icon'/>
    </IconButton>


   
    <img  className="header__logo" 
     src="https://assets.website-files.com/6072096d69322257bcddeb3c/6088c844759e9581ae8354de_tinder.jpeg"
     alt=""
     />

    <IconButton>
    <ForumIcon fontSize='large' className='header__icon'/>
    </IconButton>

    
    </div>
    
  )
}

export default header