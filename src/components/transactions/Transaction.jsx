import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import Header from '../header/Header';
import { mockTransactions } from '../mockData';

const Transaction = () => {

    return (
        <div>
            <Header title="Transaction History"/>
            {/* table to show transaction history
            source, description, amount, status and arrow button to expand*/}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Source</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockTransactions.map((transaction, index) => (
                            <TableRow
                            key={index}
                            >
                                <TableCell>{transaction.source}</TableCell>
                                <TableCell>{transaction.destination}</TableCell>
                                <TableCell>{transaction.amount}</TableCell>
                                <TableCell>{transaction.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Transaction

// sx={{'&:last-child td, &:last-child th': { border: 0 }}