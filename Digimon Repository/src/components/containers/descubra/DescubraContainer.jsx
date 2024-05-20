import './DescubraContainer.css';

export function DescubraContainer({titulo, imgDestaque, imgSombra, isSelecionado, onClick}) {
    return (
        <div onClick={onClick} className={isSelecionado ? 'descubra-container-selecao-selecionado' : 'descubra-container-selecao'}>
            <img hidden={isSelecionado ? false : true} className='descubra-img-destaque' src={imgDestaque} />
            <img hidden={isSelecionado ? true : false} className='descubra-img' src={imgSombra} />
            <h3 className='descubra-container-titulo'>{titulo}</h3>
        </div>
    )
}