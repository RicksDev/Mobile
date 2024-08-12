const Header = () => {
    
    const headerStyle = {
        backgroundColor: "gray",
        padding: '20px',
        textAlign:'center',
        borderBottom: '2px solid #000'
    };

    const titleStyle = {
        margin: 0,
        fontSize: '30px',
        color: '#0000CD'
    };
    
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>First System</h1>
        </header>
    );
};

export default Header;