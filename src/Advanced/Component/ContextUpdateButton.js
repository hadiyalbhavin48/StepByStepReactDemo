//ContextUpdateButton.js

import React from 'react';
import { ContextApi } from './ContextApi';

function UpdateButton() {
    return (

        <ContextApi.Consumer >
            {
                ({ updateColor }) => (
                    <div>
                        <button
                            onClick={() => updateColor('yellow')}>Update Color yellow</button>
                        <button
                            onClick={() => updateColor('blue')}>Update Color blue</button>
                        <button
                            onClick={() => updateColor('red')}>Update Color Red</button>

                    </div>
                )

            }
        </ContextApi.Consumer>

    )
}


export default UpdateButton;