import React from 'react'

const Start = () => {

    // handle file input
    const handleFileInput = async (event) => {
        const inputFile = event.target.files[0];
    }

    // file reader / load game
    const loadFromFile = async (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <div>
            Start Screen
            <form onSubmit={loadFromFile}>
                <label htmlFor="file-upload">File Upload</label>
                <input type="file" id="file-upload" onChange={handleFileInput} />
                <button type="submit">Load Game</button>
            </form>
        </div>
    )
}

export default Start;