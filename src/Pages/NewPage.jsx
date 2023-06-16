import React from 'react';

const NewPage = () => {
    const {mode} = useContext(AuthContext)
    return (
        <div>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default NewPage;