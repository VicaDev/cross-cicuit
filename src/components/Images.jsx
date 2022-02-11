import { ImageViewer } from 'react-image-viewer-dv'

const motoImages = require.context('../img/gallery', true)

export default function Images() {
    return (
        <>
            <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./1.jpg`)} alt="imagen" />
                </ImageViewer>
                <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./2.jpg`)} alt="imagen" />
                </ImageViewer>
                <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./3.jpg`)} alt="imagen" />
                </ImageViewer>
                <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./4.jpg`)} alt="imagen" />
                </ImageViewer>
                <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./5.jpg`)} alt="imagen" />
                </ImageViewer>
                <ImageViewer>
                    <img className='img-gallery' src={motoImages(`./6.jpg`)} alt="imagen" />
                </ImageViewer>
        </>
    )
}