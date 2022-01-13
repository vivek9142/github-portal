import React from 'react';
import { TextField,MenuItem } from '@material-ui/core';
import { useField } from 'formik';

const TextFieldWrapper = ({name,...otherProps}) => {
    const [field,metaData] = useField(name);

    const configTextField = {
        ...field,
        ...otherProps,
        fullWidth:true,
        variant:'outlined'
    }

    if(metaData && metaData.touched && metaData.error){
        configTextField.error =  true;
        configTextField.helperText = metaData.error;
    }
    if(name === 'query' || name === 'per_page')
    return (
        <TextField size='small' id="standard-basic" type={`${name==='per_page'?'number':'text'}`} {...configTextField} />
    )

    if(name=== 'order'){
        const orderList = [
            {
              value: 'Asc',
              label: 'Ascending',
            },
            {
              value: 'Desc',
              label: 'Descending',
            },
          ];

    return (
        <TextField size='small' id="standard-select-currency"
        select {...configTextField}>
            {orderList.map((option) => (
            <MenuItem key={option.value} value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    )
    }
}

export default TextFieldWrapper;