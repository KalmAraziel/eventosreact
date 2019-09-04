import React, { Component } from 'react'

export default class Formulario extends Component {
    state = {
        nombre: '',
        categoria: ''
    }
    render() {
        return (
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
                        />
                    </div>
                    <div className="uk-margin" uk-margin="true">
                        <select 
                            type="text" name="categoria" 
                            className="uk-select" placeholder="" 
                        >

                        </select>
                    </div>
                    <div>
                        <input type="submit" className="uk-button uk-button-danger" value="Buscar Eventos"/>
                    </div>                                         
                </div>            
            </form>
        )
    }
}
