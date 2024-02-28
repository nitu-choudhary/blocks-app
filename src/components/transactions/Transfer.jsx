import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import React, { useState } from 'react';
import Header from '../header/Header';
import { ethereumAddresses } from '../mockData';
import Receipt from './Receipt';

const Transfer = () => {

    // state management
    const [amount, setAmount] = useState(0);
    const [receipt, setReceipt] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);

    const [selectedToAddress, setSelectedToAddress] = useState('');
    const [selectedFromAddress, setSelectedFromAddress] = useState('');

    const handleSelection = (event, inputType) => {
        const { value } = event.target;
        // Capture the selected address
        if (inputType === "toAddress") {
            // Set the address
            setSelectedToAddress(value);
        } else if (inputType === "fromAddress") {
            // Set the address
            setSelectedFromAddress(value);
        } else if (inputType === "amount") {
            event.preventDefault();
            setAmount(value);
        }
        // setSelectedBlock(ethereumBlocks.find((block) => block.address === addressValue));
    };

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        event.preventDefault();

        // set the receipt state
        const submittedReceipt = {
            transactionHash: 'yourTransactionHash',  // Replace with actual data
            blockHash: 'yourBlockHash',
            blockNumber: 'yourBlockNumber',
            fromAddress: selectedFromAddress,  // Assuming selectedFromAddress is set
            toAddress: selectedToAddress,  // Assuming selectedToAddress is set
            amount: amount,  // Assuming amount is set
            gasUsed: 1000 * Math.floor(Math.random() * 5) + 1,
        };

        setReceipt(submittedReceipt);
        setShowReceipt(true);
    }

    // handle cancel
    const handleCancel = () => {
        event.preventDefault();
        setShowReceipt(false);
    }

    return (
        <div>
            <Header title="Transfers"/>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="to-address-select-label" sx={{color: "white"}}>To Address</InputLabel>
                <Select
                labelId="to-address-select-label"
                id="outlined-adornment-to"
                value={selectedToAddress}
                label="toAddress"
                onChange={(event) => handleSelection(event, "toAddress")}
                sx={{color: "white"}}
                className="left-aligned-select"
                >
                    {
                        ethereumAddresses.map((address, index) => {
                            return (<MenuItem key={index+"to"} value={address}>{address}</MenuItem>);
                        })
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="from-address-select-label" sx={{color: "white"}}>From Address</InputLabel>
                <Select
                labelId="from-address-select-label"
                id="outlined-adornment-from"
                value={selectedFromAddress}
                label="fromAddress"
                onChange={(event) => handleSelection(event, "fromAddress")}
                sx={{color: "white"}}
                className="left-aligned-select"
                >
                    {
                        ethereumAddresses.map((address, index) => {
                            return (<MenuItem key={index+"from"} value={address}>{address}</MenuItem>);
                        })
                    }
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="amount-select-label" htmlFor="outlined-adornment-amount" sx={{color: "white"}}>Amount</InputLabel>
                <OutlinedInput
                id="outlined-adornment-amount"
                label="amount"
                value={amount}
                sx={{color: "white"}}
                onChange={(event) => handleSelection(event, "amount")}
                className="left-aligned-select"
                />
            </FormControl>
            <ButtonGroup color="primary" variant="solid" aria-label="solid button group" orientation="vertical" spacing={2}>
                <Button fullWidth={true} onClick={handleSubmit}>SUBMIT</Button>
                <Button sx={{ backgroundColor: "purple", color: "white" }} fullWidth={true} onClick={handleCancel}>CANCEL</Button>
            </ButtonGroup>
            { showReceipt && (
            <Receipt
            transactionHash ={receipt.transactionHash}
            blockHash= {receipt.blockHash}
            blockNumber= {receipt.blockNumber}
            fromAddress= {receipt.fromAddress}
            toAddress= {receipt.toAddress}
            amount= {receipt.amount}
            gasUsed= {receipt.gasUsed}
            />
            )
            }
        </div>
    )
};

export default Transfer;