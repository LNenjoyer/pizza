import React from "react";
import './pizza.css';
import koszyk from './koszyk.png'

const Pizza = (props) => (
  <table>
      <tr>
          <td id="lewa">
              <img src={props.photo} alt={props.name}/>
          </td>
          <td id="reszta">
              <h1> {props.name}</h1>
              <p><b>Rozmiar:{props.size}</b></p>
              <p id="ok">Opis: {props.desc}</p>
          </td>
          <td id="koszyk">
              <a href="kup.com" target="_blank"><img src={koszyk}/></a>
          </td>
      </tr>
  </table>
);
export default Pizza;