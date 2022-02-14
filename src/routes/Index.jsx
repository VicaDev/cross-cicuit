import img from '../img/circuito.jpg'
import '../styles/index.css'
import '../styles/mediaQuery.css'

export default function Index() {
    return(
        <div className='content'>            
            <h1>Welcome to VicaDev Circuits</h1>
            <div className='content-index'>
                <img className='image' src={img} alt={img} />
                <p className='info-index'>
                    Circuito de motocross situado en un entorno totalmente natural, dentro de una zona boscosa como ya no quedan.
                    <br/>
                    <br/>
                    El circuito “El Carbonet”, en funcionamiento desde 1979 con diversas reformas a lo largo de los años, es de dificultad media.
                    <br/>
                    <br/>

                    <strong>Alargada:</strong> 1200m<br/>
                    <strong>Ancho mínimo:</strong> 6 a 7 metros<br/>
                    <strong>Capacidad para entrenamientos:</strong> 50 pilotos<br/><br/>
                    Consta de 12 saltos, terreno una parte dura y la otra blanda que absorbe muy bien la lluvia.
                </p>
            </div>
        </div>
    )
}