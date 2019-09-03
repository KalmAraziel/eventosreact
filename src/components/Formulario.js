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
                <div className="uk-column-1-3@m " uk-margin="true">
                    <input 
                        type="text" name="nombre" 
                        className="uk-input" placeholder="Nombre de Evento o Ciudad" 
                    />
                    
                </div>
                <div className="uk-column-1-3@m " uk-margin="true">
                    <select 
                        type="text" name="categoria" 
                        className="uk-select" placeholder="" 
                    >

                    </select>
                    
                </div>
                <div>
                    <button type="button" className="uk-button uk-button-danger"></button>
                </div>
            </form>
        )
    }
}
