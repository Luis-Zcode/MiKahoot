import { useContext} from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MiKahootContext } from '../../context';

const LayoutAdmin = () => {
    const {preguntas, copyLink} = useContext(MiKahootContext)
    
    return (
        <>
        
            <div className='container pt-5'>
                <div className='d-flex justify-content-end'>
                    <Link to={'/create'} className='btn btn-primary mb-4'>Crear test</Link>
                </div>
                <div className='d-flex flex-column justify-content-center' >
                    <Table responsive  bordered className="text-center" variant='secondary' >
                        <thead className='table-dark'>
                            <tr className='border'>
                                <th>#</th>
                                <th>Nombre de la prueba</th>
                                <th>Duracion</th>
                                <th>Autor</th>
                                <th>Total de preguntas</th>
                                <th>Codigo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {preguntas?.map((prueba, index) => (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{prueba.nombreTest}</td>
                                    <td>{prueba.time}</td>
                                    <td>{prueba.autor}</td>
                                    <td>{prueba.preguntasCreate.length}</td>
                                    <td>{prueba.codigo}</td>
                                    <td> <Button variant='secondary' onClick={() => copyLink(prueba.codigo)} >Copy link</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default LayoutAdmin;