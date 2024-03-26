import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import BlockDetails from './BlockDetails';

function Blocks() {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState({});
    const [ethereumAddresses, setEthereumAddresses] = useState([]);

    useEffect(() => {
        // fetch ethereum address from backend
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch('http://localhost:3000/blocks/addresses');
            if (!response.ok) {
                throw new Error('Failed to fetch addresses');
            }
            const addresses = await response.json();
            setEthereumAddresses(addresses);
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    };

    const handleSelection = async (event) => {
        // Capture the selected address
        const addressValue = event.target.value;

        // Set the address and block details
        setSelectedAddress(addressValue);

        // fetch the block details for selected ethereum address from backend
        try {
            const response = await fetch(`http://localhost:3000/blocks/details/${addressValue}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch block details for address ${addressValue}`);
            }
            const blockDetails = await response.json();
            setSelectedBlock(blockDetails);
        } catch (error) {
            console.error(error);
            setSelectedBlock({});
        }
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