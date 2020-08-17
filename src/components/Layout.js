import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import "./Layout.css";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
