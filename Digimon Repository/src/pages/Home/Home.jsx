import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { DescubraContainer } from '../../components/containers/descubra/DescubraContainer'
import { RostoContainer } from '../../components/containers/rosto/RostoContainer'
import '../Home/Home.css'
import { DescubraInfoContainer } from '../../components/containers/descubra/DescubraInfoContainer'

export function Home() {

    const [indexDescubra, setIndexDescubra] = useState(0);


    function hyperlink(url) {
        window.open(url, '_blank').focus();
    }

    return (
        <div>
            <Header />
            <body>
                <div className='apresentacao1'>
                    <div className='container_background'>
                        <img className='img_background' src="/src/assets/inicio_background.jpg" />
                        <img className='img_background_celular' src="/src/assets/inicio_background_celular.jpg" />
                    </div>
                    <div className='texto_apresentacao'>
                        <div className='container_opacidade'>
                            <h2>Digimon Repository</h2>
                            <br />
                            <span>Bem-vindo ao Digimon Repository! Um site feito por fãs para fãs.</span>
                            <br />
                            <br />
                            <span> Aqui, oferecemos o que há de melhor no Digimon. Explore nosso repositório digital e descubra uma riqueza de informações sobre essas criaturas digitais fascinantes.</span>
                            <br />
                        </div>
                    </div>
                </div>
                <div className='curva_imagem'>
                    <div className="curva1">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <section className='section1'>
                    <div className='recursos_apresentacao'>
                        <h3 style={{ marginBottom: "25px" }}>Descubra</h3>
                        <div className='descubra-home'>
                            <DescubraContainer onClick={() => setIndexDescubra(0)} isSelecionado={indexDescubra === 0 ? true : false} titulo={"Data"} imgSombra={"/src/assets/data_preto.png"} imgDestaque={"/src/assets/data.png"} />
                            <DescubraContainer onClick={() => setIndexDescubra(1)} isSelecionado={indexDescubra === 1 ? true : false} titulo={"Vacina"} imgSombra={"/src/assets/vacina_preto.png"} imgDestaque={"/src/assets/vacina.png"} />
                            <DescubraContainer onClick={() => setIndexDescubra(2)} isSelecionado={indexDescubra === 2 ? true : false} titulo={"Vírus"} imgSombra={"/src/assets/virus_preto.png"} imgDestaque={"/src/assets/virus.png"} />
                        </div>
                        <div style={{ backgroundColor: "var(--color-azul2)" }}>
                            <DescubraInfoContainer isVisible={indexDescubra === 0 ? false : true} img={"/src/assets/data_digimons_home.jpg"} descricao={'Sua origem está relacionada ao tráfego de informações pela rede. Em geral são pacíficos se não provocados. São fortes contra o tipo Vacina mas são muito fracos quando comparados ao tipo Vírus.'} />
                            <DescubraInfoContainer isVisible={indexDescubra === 1 ? false : true} img={'/src/assets/vacina_digimons_home.jpg'} descricao={'Possuem forte instinto de ataque contra Espécies de Vírus, agindo contra esses atributos para proteger o ambiente ao redor e seu próprio território. Em geral, os Digimons Vacina são normalmente bons, dão grande importância à justiça e à moral, e lutam contra o mal.'} />
                            <DescubraInfoContainer isVisible={indexDescubra === 2 ? false : true} img={'/src/assets/virus_digimons_home.jpg'} descricao={'Digimons que devoram dados. Procuram modificar o ambiente ao redor de acordo com seus desejos. Como resultado, anomalias acabam aparecendo no sistema. Os Digimons Vírus desejam poder e frequentemente podem se tornar gananciosos, egoístas, selvagens ou malignos na busca por isso.'} />
                        </div>
                    </div>
                </section>
                <section className='section2'>
                    <h2>Hall da fama</h2>
                    <div className='maisFamosos'>
                        <RostoContainer imagem='/src/assets/omegamon_rosto.jpg' nome='Omegamon' descricao='Fusão entre Wargreymon e Metalgarurumon' />
                        <RostoContainer imagem='/src/assets/beelzemon_rosto.jpg' nome='Beelzemon' descricao='Um dos Sete Grande Lordes Demônio' />
                        <RostoContainer imagem='/src/assets/gallantmon_rosto.jpg' nome='Gallantmon' descricao='Cavaleiro Real de atributo vírus' />
                        <RostoContainer imagem='/src/assets/blackwargreymon_rosto.jpg' nome='Blackwargreymon' descricao='Versão vírus de WarGreymon' />
                    </div>
                </section>
                <footer className='footer_estrutura'>
                    <div className='footer_row'>
                        <div className='resumo_footer_left'>
                            <h3>Digimon Repository</h3>
                            <br />
                            <span>Digimon Repository é um site criado e mantido por fã para fãs. Todos os direitos autorais e propriedades intelectuais relacionados ao universo de Digimon, incluindo personagens, histórias, imagens e outros conteúdos, pertencem exclusivamente à Bandai e ao criador Akiyoshi Hongo.</span>
                        </div>
                        <div className='resumo_footer_right'>
                            <div className='indice'>
                                <img className='indice_img imagem_preta' src="/src/assets/digitama_preto.png" />
                                <img className='indice_img imagem_cor' src="/src/assets/digitama_cor.png" />
                                <h3>Início</h3>
                            </div>
                            <div className='indice gabumon'>
                                <img className='indice_img imagem_preta' src="/src/assets/gabumon_preto.png" />
                                <img className='indice_img imagem_cor' src="/src/assets/gabumon.png" />
                                <h3>Digimons</h3>
                            </div>
                            <div className='indice digivice'>
                                <img className='indice_img imagem_preta' src="/src/assets/digivice_preto.png" />
                                <img className='indice_img imagem_cor' src="/src/assets/digivice.png" />
                                <h3>Categorias</h3>
                            </div>
                        </div>
                    </div>
                    <div className='footer_links'>
                        <div className='icon_circle' onClick={() => hyperlink('https://github.com/0Karoline0')}>
                            <img className='footer_icons' src="/src/assets/github.png" />
                        </div>
                        <div className='icon_circle' onClick={() => hyperlink('https://www.youtube.com/channel/UCbXadpZ5OB-j7i6UYzeCJdA')}>
                            <img className='footer_icons' src="/src/assets/youtube.png" />
                        </div>
                        <div className='icon_circle' onClick={() => hyperlink('https://www.linkedin.com/in/karolinevitoriam/')}>
                            <img className='footer_icons' src="/src/assets/linkedin.png" />
                        </div>
                    </div>
                </footer>
            </body>
        </div>
    )
}