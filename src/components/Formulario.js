import React, { Component } from 'react'
import { CategoriasConsumer } from '../context/CategoriasContext';
import { EventosConsumer } from '../context/EventosContext';

export default class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }
    // usuario agrega evento o categoria
    obtenerDatosEvento = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {

        return (
            <EventosConsumer>
                {(value)=> {
                    console.log('value: ', value);
                }}
                <form>
                    <fieldset className="uk-fieldset uk-margin">
                        <legend className="uk-legend uk-text-center">
                            Busca tu evento por Nombre o Categoría
                        </legend>
                    </fieldset>
                    <div className="uk-column-1-3@m" >
                        <div className="uk-margin" uk-margin="true">
                            <input 
                                type="text" name="nombre" 
                                className="uk-input" placeholder="Nombre de Evento o Ciudad" 
                                onChange= {this.obtenerDatosEvento}
                            />
                        </div>
                        <div className="uk-margin" uk-margin="true">
                            <select 
                                type="text" name="categoria" 
                                className="uk-select" placeholder="" 
                                onChange= {this.obtenerDatosEvento}
                            >
                                <option value="">Selecione</option>
                                <CategoriasConsumer>
                                    {
                                        (value)=> {
                                            return value.categorias.map(categoria => (
                                                <option 
                                                    key={categoria.id} value={categoria.id}
                                                    data-uk-form-select
                                                >
                                                    {categoria.name_localized}
                                                </option>
                                            ))
                                        }
                                    }
                                </CategoriasConsumer>
                            </select>
                        </div>
                        <div>
                            <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
                        </div>                                         
                    </div>            
                </form>
            </EventosConsumer>
        )
    }
}
