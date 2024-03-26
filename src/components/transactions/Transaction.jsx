import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Collapse, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Fragment, useState, useEffect } from 'react';
import Header from '../header/Header';
import Receipt from './Receipt';

const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [expandedTransaction, setExpandedTransaction] = useState(null);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3000/transactions/history');
            if (!response.ok) {
                throw new Error('Failed to fetch transactions');
            }
            const transactions = await response.json();
            console.log('Transactions:', transactions);
            setTransactions(transactions);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        }
    };

    const handleExpand = (index) => {
        setExpandedTransaction(expandedTransaction === index ? null : index);
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div>
            <Header title="Transaction History" />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{backgroundColor: '#e6892d', fontSize: '1.2em'}}/>
                            <TableCell style={{backgroundColor: '#e6892d', fontSize: '1.2em'}}>Source</TableCell>
                            <TableCell style={{backgroundColor: '#e6892d', fontSize: '1.2em'}}>Destination</TableCell>
                            <TableCell style={{backgroundColor: '#e6892d', fontSize: '1.2em'}}>Amount</TableCell>
                            <TableCell style={{backgroundColor: '#e6892d', fontSize: '1.2em'}}>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {transactions.map((transaction, index) => (
                            <Fragment key={index}>
                                <TableRow>
                                    <TableCell>
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => handleExpand(index)}
                                        >
                                            {expandedTransaction === index ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{transaction.source}</TableCell>
                                    <TableCell>{transaction.destination}</TableCell>
                                    <TableCell>{transaction.amount}</TableCell>
                                    <TableCell>{transaction.status}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                                        <Collapse in={expandedTransaction === index} timeout="auto" unmountOnExit>
                                            <Receipt
                                                fromAddress={transaction.source}
                                                toAddress={transaction.destination}
                                                amount={transaction.amount}
                                                gasUsed={transaction.gasUsed}
                                                receiptHash={transaction.receiptHash}
                                                created={transaction.createdAt}
                                                updated={transaction.updatedAt}
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