import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Fragment, useState } from 'react';
import Header from '../header/Header';
import { mockTransactions } from '../mockData';
import Receipt from './Receipt';

const Transaction = () => {
    const [expandedTransaction, setExpandedTransaction] = useState(null);

    const handleExpand = (index) => {
        setExpandedTransaction(expandedTransaction === index ? null : index);
    };

    return (
        <div>
            <Header title="Transaction History" />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Source</TableCell>
                            <TableCell>Destination</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockTransactions.map((transaction, index) => (
                            <Fragment key={index}>
                                <TableRow>
                                    <IconButton
                                        aria-label="expand row"
                                        size="small"
                                        onClick={() => handleExpand(index)}
                                    >
                                        {expandedTransaction === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                    </IconButton>
                                    <TableCell>{transaction.source}</TableCell>
                                    <TableCell>{transaction.destination}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                    <TableCell>{transaction.status}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={5}>
                                        <Collapse in={expandedTransaction === index} timeout="auto" unmountOnExit>
                                            <Receipt
                                                fromAddress={transaction.source}
                                                toAddress={transaction.destination}
                                                amount={transaction.amount}
                                                gasUsed={transaction.gasUsed}
                                                receiptHash={transaction.receiptHash}
                                                created={transaction.created}
                                                updated={transaction.updated}
                                                label="Transaction History"
                                            />
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Transaction

// sx={{'&:last-child td, &:last-child th': { border: 0 }}