import React, { Component } from 'react'
import axios from 'axios';

// Crear Context
const EventosContext = React.createContext();
export const  EventosConsumer = EventosContext.Consumer;

export default class EventosProvider extends Component {
    token = 'UPJOEBSQQMG63QCPD2A7';
    ordenar= 'date';
    state = { 
       eventos: []
    }

    obtenerEventos = async (busqueda) => {
        let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=${this.ordenar}&token=${this.token}&locale=es_ES`;    
        let eventos = await axios.get(url);
        console.log(eventos);
        return eventos;
        
    }        
    render() {
        return (
            <EventosContext.Provider
                value = { 
                    {
                        eventos: this.state.eventos,
                        obtenerEventos: this.obtenerEventos
                    } 
                }
            >
                {this.props.children}
            </EventosContext.Provider>
        )
    }
}
