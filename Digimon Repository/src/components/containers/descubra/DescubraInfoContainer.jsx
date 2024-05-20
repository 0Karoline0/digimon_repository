import './DescubraInfoContainer.css';

export function DescubraInfoContainer({isVisible, img, descricao}) {
    return (
        <div>
            <div hidden={isVisible}>
                <img className='descubra_digimons_img' src={img} />
                <div className='descubra-info-descricao'>
                    <span>{descricao}</span>
                </div>
            </div>
        </div>
    )
}