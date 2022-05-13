import React from "react";
import Artkl from "./artikli.json";

function Kosarica(props) {
    
    return <button type="button" class="btn btn-success" onClick={()=>kolikoJePreostalo(props.kol)}>Dodaj u košaricu</button>

    
}
function Upit(props) {
    
    return <button type="button" class="btn btn-light" onClick={nemaArtikla}>Pošalji upit</button>
    
}

function kolikoJePreostalo(props){
    alert("Preostalo je " + props + " artikla");
}

function nemaArtikla()
{
    alert("Trenutno vise nemamo taj model artikla, upit je poslan.")
}

function PopisArtikla(props){
    const lista = Artkl.map(x=>
    <tr key = {x.Id}>
        <td>{x.Id}</td>
        <td>{x.Naziv}</td>
        <td>{x.Proizvodac}</td>
        <td>{x.Model}</td>
        <td>{x.Cijena} kn</td>
        <td>{x.Kolicina}</td>
        <td>{ (x.Kolicina > 0) ? <Kosarica kol={x.Kolicina}/> : <Upit/> }</td>
    </tr>);
    return(lista);
}
export default PopisArtikla;

