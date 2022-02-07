import img from '../img/circuito.jpg'
import '../styles/index.css'

export default function Index() {
    return(
        <div className='content'>            
            <h1>Welcome to VicaDev Circuits</h1>
            <div className='content-index'>
                <img className='image' src={img} alt={img} />
                <p className='info-index'>
                Nullam auctor dictum ipsum nec dictum. Vestibulum nisl est, efficitur sit amet euismod ac, porta eu mauris. Cras consectetur nulla vitae nulla feugiat, et rhoncus ligula pellentesque. Suspendisse neque libero, consectetur vel aliquet in, tempus id est. Proin id aliquet dolor, eget fringilla leo. Etiam faucibus felis id aliquet tincidunt. Duis semper, purus eget tempus elementum, est mi congue purus, vel facilisis nisl leo sagittis velit. Praesent ultricies dolor arcu, sit amet luctus leo elementum vel. Aenean cursus rutrum ligula, a varius enim tincidunt at. Nam porta felis a quam varius malesuada.
                </p>
            </div>
        </div>
    )
}