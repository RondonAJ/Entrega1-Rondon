import gato from './assets/gato2.jpg'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='container-banner'>
            <img src={gato} alt="banner" className='banner'/>
            <h1 className='title-banner'>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer