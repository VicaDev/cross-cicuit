import '../styles/timetable.css'

export default function Expenses() {
    return(
        <div style={{paddingTop: '20rem'}}>
            <h1>Aqui van los precios</h1>
            <table>
                <tr>
                    <td>Lunes</td>
                    <td>Martes</td>
                    <td>Miercoles</td>
                    <td>Jueves</td>
                    <td>Viernes</td>
                    <td>Sábado</td>
                    <td>Domingo</td>
                    
                </tr>
                <tr>
                    <td>Abiert</td>
                    <td>Abiert</td>
                    <td>Abiert</td>
                    <td>Abiert</td>
                    <td>Abiert</td>
                    <td>Cerrado</td>
                    <td>Cerrado</td>
                </tr>
            </table>
        </div>
    )
}