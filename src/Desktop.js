import React, { useState } from 'react';
import styled from 'styled-components';
import Folder from './fileBrowse/Folder';
import fileStructure from './data/fileStructure';
import MenuBar from './menuBar/MenuBar';
import Dock from './dock/Dock';

const StyledDesktop = styled.div`
    background-color: whitesmoke;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    & #desktop-area {
        display: flex;
        padding: 10px;
        flex: 1;
        position: relative;
    }
`;

export default function Desktop() {
    const [activeWindow, setActiveWindow] = useState('2');
    return (
        <StyledDesktop>
            <MenuBar />
            <div id='desktop-area'>
                {fileStructure.map(folder => (
                    <Folder
                        name={folder.name}
                        activeWindow={activeWindow}
                        setActiveWindow={id => setActiveWindow(id)}
                        folder={folder}
                    />
                ))}
            </div>
            <Dock />
        </StyledDesktop>
    );
}
