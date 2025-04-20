import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <div>
            <h1>Get Connected with our Network</h1>
            <div>
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaTwitter size={30} />
            </div>
        </div>
    )
}