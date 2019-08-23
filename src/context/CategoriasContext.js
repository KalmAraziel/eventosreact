import React, { Component } from 'react'
import axios from 'axios';

// Crear Context
const CategoriasContext = React.createContext();
export const  CategoriasConsumer = CategoriasContext.Consumer;

export default class CategoriasProvider extends Component {
    token = 'UPJOEBSQQMG63QCPD2A7';
    state = { 
        categorias: []
    }

    componentDidMount() {
        this.obtenerCategorias();
    }
    // https://www.eventbrite.com/v3/categories?PSWVLRYFPSYTDGNSGNDY&locale=es_ES

    obtenerCategorias = async () => {
        let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        let categotias = await axios.get(url);
        this.setState({
            categorias: categotias.data.categories
        });
    }

    render() {
        return (
            <CategoriasContext.Provider
                value = { 
                    {
                        categorias: this.state.categorias
                    } 
                }
            >
                {this.props.children}
            </CategoriasContext.Provider>
        )
    }
}
