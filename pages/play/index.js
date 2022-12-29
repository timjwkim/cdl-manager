import React from 'react';
import Menu from '../../components/Menu.js';
import Link from 'next/link';

const Play = () => {
    return (
        <div>
            <Menu />
            <Link href="/">Back</Link>
        </div>
    )
}

export default Play;