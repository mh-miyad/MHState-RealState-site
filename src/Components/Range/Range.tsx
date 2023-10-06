'use client'
import React,{useState} from 'react'
import Slider from '@mui/material/Slider';
function valuetext(value: number) {
  return `${value}`;
}
const RangeComp = () => {
    const [value, setValue] = useState<number[]>([20, 37]);
    const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  }; 
  return (
      <>
          <Slider
        className=''
        getAriaLabel={() => 'Range Of '}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={
                  {color:'red',}
              }
      />
      </>
  )
}

export default RangeComp