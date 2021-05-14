import './styles.css';

function Card({data}) {
    return (
        <div className='card' style={{backgroundColor: data.color.value}}>
            <div>
                <h1>{data.title}</h1>
                <h3>{data.subTitle}</h3>
            </div>
        </div>
    )
}

export default Card;
