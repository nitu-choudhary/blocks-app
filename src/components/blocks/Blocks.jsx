import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';
import Header from '../header/Header';
import { ethereumAddresses, ethereumBlocks } from '../mockData';
import BlockDetails from './BlockDetails';

function Blocks() {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState({});

    const handleSelection = (event) => {
        // Capture the selected address
        const addressValue = event.target.value;

        // Set the address and block details
        setSelectedAddress(addressValue);
        setSelectedBlock(ethereumBlocks.find((block) => block.address === addressValue));
    };

    return(
        <div>
            <Header title="Blocks" />
            <FormControl fullWidth sx={{m: 1}}>
                <InputLabel id="address-select-label" sx={{color: "white"}}>Ethereum Block</InputLabel>
                <Select
                labelId="address-select-label"
                id="outlined-adornment-address"
                value={selectedAddress}
                label="ethereumBlock"
                onChange={handleSelection}
                sx={{
                    color: "white",
                    '&.MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white'
                        }}
                    }}
                className="left-aligned-select"
                >
                    {
                        ethereumAddresses.map((address, index) => {
                            return (<MenuItem key={index} value={address}>{address}</MenuItem>);
                        })
                    }
                </Select>
                {!selectedAddress && (
                    <span style={{ color: 'red', fontSize: '18px', margin: '5px 5px', textAlign: 'left'}}>
                        Please select Ethereum Address from the dropdown
                    </span>
                )}
            </FormControl>
            {selectedAddress && (
                <BlockDetails {...selectedBlock} />
            )}
        </div>
    );
}

export default Blocks;