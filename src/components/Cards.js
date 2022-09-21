import Card from './Card'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

import React, {Component} from "react";
//import axios from 'axios';
const axios = require('axios');
let url2 = 'http://192.168.4.221:82/api/dashboardinsideouts/fil';

let data = {
    id:1,
    id_place:1,
    fecha1: "2022-09-12",
    fecha2: "2022-09-12"
}
const cards = [
    {
        id: 1,
        title: "Tarjeta 1",
        image: image1,
        url: "https://google.com"
        
        
        
     
    },
    
    {
        id: 2,
        title: "Tarjeta 2",
        image: image2,
        url: "https://youtube.com"
    },

    {
        id: 3,
        title: "Tarjeta 3",
        image: image3,
        url: "https://facebook.com"
    }
]

class Cards extends Component{

    constructor(props){
        super(props)

        this.state = {
            pokemonDescription: '',
            descriptionProtocol: ''
        }
        
    }

   componentDidMount(){
       axios.get('https://pokeapi.co/api/v2/pokemon-species/1')
        .then(result => {
            this.setState({
                pokemonDescription: result.data.flavor_text_entries[42].flavor_text
            });
            console.log(this.state.pokemonDescription)
        }).catch(console.log(""))

        axios.post(url2,data)
        .then(response => {
            this.setState({
            descriptionProtocol: response.data.message
            });
                console.log(this.state.descriptionProtocol)
                //console.log("El protocolo es", response.data)   
        });


    }
    
    render(){
    
        
        const {pokemonDescription} = this.state;
        const {descriptionProtocol} = this.state
    
      return (
    
        
        <div className='container d-flex justify-content-center h-100 align-items-center'>
            <div className='row'>
                 {
                    cards.map(card => (
                        <div className='col-md-4' key={card.id}>
                            <Card title1={card.title} imageUrl={card.image} url={card.url} description={descriptionProtocol} description2= {pokemonDescription}/>
                        </div>
                    ))
                 }
            </div>
            
        </div>
      )
    }

    
}




export default Cards;