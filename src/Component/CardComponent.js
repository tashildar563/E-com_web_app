import logoImg from '../logo192.png';

const CardComponent = ({ item, index, handleClick, handleBuyClick }) => {
    return (

        <div key={index} style={{ margin: '5px', display: 'flex', flexDirection: "column" }}>
            <div className="card-container" key={index}>
                <div style={{ paddingLeft: '1em' }} onClick={handleClick}>
                    <p>{item.name}</p>
                    <div>
                        <p >Size:{item.size}</p>
                        <p >Color:{item.color}</p>
                        <p >Category:{item.category_id}</p>
                    </div>
                </div>

                <img src={logoImg} alt={"logo"} style={{ minHeight: "15vh", maxHeight: "20vh", maxWidth: "30%" }} />
            </div>
            <button className='card-button' onClick={handleBuyClick}>Buy</button>
        </div>
    );
};

export default CardComponent;