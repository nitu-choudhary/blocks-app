import React, { useState } from 'react';
import { ethereumAddresses, ethereumBlocks } from '../mockData';
import BlockDetails from './BlockDetails';

// update it using mui

function Blocks() {
    const [selectedAddress, setSelectedAddress] = useState('');
    const [selectedBlock, setSelectedBlock] = useState({});

    const handleSelection = (event) => {
        // Capture the selected address
        const addressValue = event.target.value;

        // Set the address and block details
        setSelectedAddress(addressValue);
        setSelectedBlock(ethereumBlocks.find((block) => block.address === addressValue));
    };

    return(
        <div>
            <div>
                <label htmlFor='dropdown'>Select the address:</label>
                <select id='dropdown' value={selectedAddress} onChange={handleSelection}>
                <option>---Select---</option>
                {ethereumAddresses.map((address) => (
                    <option key={address}>
                        {address}
                    </option>
                ))}
                </select>

                {/* handle empty inputs */}
                {selectedAddress === '' || selectedAddress === '---Select---'? (
                    <h2>Ethereum address is required.</h2>
                ) : (
                    <BlockDetails {...selectedBlock} />
                )}
            </div>
        </div>
    );
}

export default Blocks;