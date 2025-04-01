import React, { useState } from 'react';

const TermsOfService: React.FC<{ onAccept: () => void }> = ({ onAccept }) => {
    const [isAccepted, setIsAccepted] = useState(false);

    const handleAccept = () => {
        setIsAccepted(true);
        onAccept();
    };

    return (
        <div>
            <h2>Terms of Service</h2>
            <p>Please read and accept our Terms of Service to proceed with the check-in.</p>
            <textarea readOnly>
                {/* Insert the full Terms of Service text here */}
                Terms of Service content goes here...
            </textarea>
            <div>
                <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={() => setIsAccepted(!isAccepted)}
                />
                <label>I accept the Terms of Service</label>
            </div>
            <button onClick={handleAccept} disabled={!isAccepted}>
                Accept and Continue
            </button>
        </div>
    );
};

export default TermsOfService;