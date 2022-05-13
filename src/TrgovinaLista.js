import React from "react";
import PopisArtikla from "./TrgovinaArtikl";

function TablicaArtikla(props){
    return(
    <>
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Naziv</th>
                <th scope="col">Proizvođač</th>
                <th scope="col">Model</th>
                <th scope="col">Cijena</th>
                <th scope="col">Količina</th>
                <th scope="col">#</th>
                </tr>
            </thead>
            <tbody>
                <PopisArtikla/>
            </tbody>
            </table>
    </>
    )
}
export default TablicaArtikla;