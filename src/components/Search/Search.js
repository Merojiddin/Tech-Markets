import React from 'react'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from './Search.module.css'
import { Input, InputAdornment } from '@mui/material'

const Search = () => {


  return (
    <div>
      <Input
        placeholder="Search ...."
        className={styles.searchField}
        disableUnderline
        endAdornment={
          <InputAdornment position="start">
            <SearchRoundedIcon className={styles.searchIcon} />
          </InputAdornment>
        }

      />
    </div>
  )
}

export default Search