import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';

const Receipt = (props) => {
    const data = {
        'Transaction Hash': props.transactionHash,
        'Block Hash': props.blockHash,
        'Block Number': props.blockNumber,
        'From Address': props.fromAddress,
        'To Address': props.toAddress,
        'Amount': props.amount,
        'Gas Used': props.gasUsed,
    };
    
    // To check if required fields are missing
    console.log(`${props.amount} ----- ${props.toAddress}--------${props.fromAddress}`)
    const areRequiredFieldsMissing = !props.toAddress || !props.fromAddress || !props.amount;

    console.log(areRequiredFieldsMissing);

    if (areRequiredFieldsMissing) {
    return (
        <Typography variant="h6" style={{ marginTop: '16px' }} sx={{backgroundColor: "red"}}>
            Please fill in all required transfer fields.
        </Typography>
    );
    }

    return(
    <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Attribute</TableCell>
                    <TableCell>Value</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.entries(data).map(([key, value]) => (
                    <TableRow key={key}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default Receipt;