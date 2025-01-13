import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import { jsPDF } from 'jspdf';

const InvoiceList = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                const response = await fetch('https://hotel-management-backend-ruby.vercel.app/api/invoice');
                const data = await response.json();
                setInvoices(data);
            } catch (error) {
                console.error("Error fetching invoices:", error);
            }
        };
        fetchInvoices();
    }, []);

    const generatePDF = (invoice) => {
        const doc = new jsPDF();
        const generatedDate = new Date(invoice.generatedDate).toLocaleDateString('en-US');
        const checkInDate = new Date(invoice.checkInDate).toLocaleDateString('en-US');
        const checkOutDate = new Date(invoice.checkOutDate).toLocaleDateString('en-US');

        doc.text(`Invoice ID: ${invoice._id}`, 20, 20);
        doc.text(`Guest Name: ${invoice.guestName}`, 20, 40);
        doc.text(`Room Number: ${invoice.roomNumber}`, 20, 60);
        doc.text(`Total Amount: $${invoice.totalBill}`, 20, 80);
        doc.text(`Generated Date: ${generatedDate}`, 20, 100);
        doc.text(`Check-In Date: ${checkInDate}`, 20, 120);
        doc.text(`Check-Out Date: ${checkOutDate}`, 20, 140);
        doc.text(`Guest Contact: ${invoice.contact}`, 20, 160);
        doc.save(`Invoice_${invoice.guestName}.pdf`);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                Invoice List
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="invoice table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Guest Name</strong></TableCell>
                            <TableCell><strong>Room Number</strong></TableCell>
                            <TableCell><strong>Total Amount</strong></TableCell>
                            <TableCell><strong>Generated On</strong></TableCell>
                            <TableCell><strong>Actions</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {invoices.map((invoice, index) => (
                            <TableRow key={index}>
                                <TableCell>{invoice.guestName}</TableCell>
                                <TableCell>{invoice.roomNumber}</TableCell>
                                <TableCell>${invoice.totalBill}</TableCell>
                                <TableCell>{new Date(invoice.generatedDate).toLocaleDateString()}</TableCell>
                                <TableCell>
                                    <Button 
                                        variant="contained" 
                                        color="primary" 
                                        onClick={() => generatePDF(invoice)}
                                    >
                                        Download Invoice
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default InvoiceList;
