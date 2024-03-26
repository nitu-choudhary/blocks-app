import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Receipt from './Receipt';

const Transfer = () => {
    const [amount, setAmount] = useState(0);
    const [receipt, setReceipt] = useState({});
    const [showReceipt, setShowReceipt] = useState(false);

    const [addresses, setAddresses] = useState([]);
    const [selectedToAddress, setSelectedToAddress] = useState('');
    const [selectedFromAddress, setSelectedFromAddress] = useState('');

    // fetch address from backend
    useEffect(() => {
        fetchAddresses();
    }, []);

    const fetchAddresses = async () => {
        try {
            const response = await fetch('http://localhost:3000/blocks/addresses');
            if (!response.ok) {
                throw new Error('Failed to fetch addresses');
            }
            const addresses = await response.json();
            setAddresses(addresses);
        } catch (error) {
            console.error('Error fetching addresses:', error);
        }
    };

    const handleSelection = (event, inputType) => {
        event.preventDefault();
        const { value } = event.target;

        // capture and set the selected address
        if (inputType === "toAddress") {
            setSelectedToAddress(value);
        } else if (inputType === "fromAddress") {
            setSelectedFromAddress(value);
        } else if (inputType === "amount") {
            setAmount(Number(value));
        }
    };

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // make a post request to send transaction to the backend server and get the receipt back
        fetch('http://localhost:3000/transactions/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "source": selectedFromAddress,
                "destination": selectedToAddress,
                "amount": amount
            })
        })
        .then(response => response.json())
        .then(data => {
            // set the receipt
           const { gasUsed, transactionHash, blockHash, blockNumber } = data.createTransactionDto;
            const submittedReceipt = {
                fromAddress: selectedFromAddress,
                toAddress: selectedToAddress,
                amount: amount,
                gasUsed: gasUsed,
                transactionHash: transactionHash,
                blockHash: blockHash,
                blockNumber: blockNumber
            };

            setReceipt(submittedReceipt);
            setShowReceipt(true);
        })
        .catch(error => {
            console.error('Error:', error);
        });

        setShowReceipt(true);
    }

    // handle cancel
    const handleCancel = () => {
        // clear fields
        setAmount('');
        setSelectedToAddress('');
        setSelectedFromAddress('');
        
        // hide receipt
        setShowReceipt(false);
    }

    return (
        <div>
            <Header title="Transfers" />
            <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel id="to-address-select-label" sx={{color: "white"}}>To Address</InputLabel>
                <Select
                labelId="to-address-select-label"
                id="outlined-adornment-to"
                value={selectedToAddress}
                label="toAddress"
                onChange={(event) => handleSelection(event, "toAddress")}
                sx={{
                    color: "white",
                    '&.MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white',
                    }}
                }}
                className="left-aligned-select"
                >
                    {
                        addresses.map((address, index) => {
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
                sx={{
                    color: "white",
                    '&.MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white', // Set the border color to white
                    }}
                }}
                className="left-aligned-select"
                >
                    {
                        addresses.map((address, index) => {
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
                type="number"
                className="left-aligned-select"
                />
            </FormControl>
            <ButtonGroup color="primary" variant="solid" aria-label="solid button group" orientation="vertical" spacing={2}>
                <Button fullWidth={true} onClick={handleSubmit}>SUBMIT</Button>
                <Button sx={{ backgroundColor: "purple", color: "white" }} fullWidth={true} onClick={handleCancel}>CANCEL</Button>
            </ButtonGroup>
            { showReceipt && (
            <Receipt
                fromAddress= {receipt.fromAddress}
                toAddress= {receipt.toAddress}
                amount= {receipt.amount}
                gasUsed= {receipt.gasUsed}
                blockHash= {receipt.blockHash}
                blockNumber= {receipt.blockNumber}
                transactionHash= {receipt.transactionHash}
            />
            )
            }
        </div>
    )
};

export default Transfer;