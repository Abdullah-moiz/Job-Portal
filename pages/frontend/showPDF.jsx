import { PDFViewer } from '@react-pdf/renderer';
import React from 'react'

export default function showPDF() {
    return (
        <PDFViewer>
            <MyDocument />
        </PDFViewer>
    )
}
