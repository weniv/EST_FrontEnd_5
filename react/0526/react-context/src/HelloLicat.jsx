import UserInfo from './UserContext'

const HelloLicat = () => {
    return (
        <UserInfo.Consumer>

            {(value) => (
                <div>
                    <h2>{value.name}</h2>
                    <strong>{value.id}</strong>
                    <HelloLicatTwo />
                </div>
            )}

        </UserInfo.Consumer>
    );
};

const HelloLicatTwo = () => {
    return (
        <UserInfo.Consumer>
            {(value) => (
                <div>
                    <h2>{value.name}</h2>
                    <strong>{value.id}</strong>
                </div>
            )}
        </UserInfo.Consumer>
    );
};

export { HelloLicat, HelloLicatTwo };
