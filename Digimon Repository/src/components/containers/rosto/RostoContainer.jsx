import './RostoContainer.css';

export function RostoContainer(props){
    return (
        <div className='estrutura'>
            <div className="container_img">
                <img className='img_rosto_container' src={props.imagem}/>
            </div>
            <div className='container_info'>
                <span className='nome_rosto_container'>{props.nome}</span>
                <span className='descricao_rosto_container'>{props.descricao}</span>
            </div>
            <button className='btn_rosto_container'>VER MAIS</button>
        </div>
    )
}