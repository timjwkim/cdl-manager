import React from 'react'
import Link from 'next/link'

const Start = () => {

    const [file, setFile] = React.useState('');

    // handle file input
    const handleFileInput = async (event) => {
        const inputFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = event => {
            console.log("event.target.result", event.target.result);
            setFile(event.target.result);
        };
    }

    // file reader / load game
    const loadFromFile = async (event) => {
        event.preventDefault();
        
        const response = await fetch('/api/state', {
            method: "POST",
            body: JSON.stringify({ file }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
    }

    return (
        <div>
            Start Screen
            <form onSubmit={loadFromFile}>
                <label htmlFor="file-upload">File Upload</label>
                <input type="file" id="file-upload" onChange={handleFileInput} />
                <button type="submit">Load Game</button>
            </form>
            {file}
            <Link href="/play">Play</Link>
        </div>
    )
}

export default Start;