import React from "react";
import { useState } from "react";

const Color = ({ color, active, render }) => {

    return <div onClick={render} className={`pointer bg-${color} rounded-circle p-5 my-2 ${active ? " glow" : ""}`}> </div >
}
/*
se usa la prop color para elegir el bg-color del div(obviamente).
se usa la prop active para saber si se le agrega la clase glow o no, dependiendo del estado del color activo en el componente Home
se activa atraves de "render" la cual contiene una funcion que cambia el estado del activeColor en el componente Home.
si active es true, se agrega la clase glow, si no, no se agrega.
render se activa con el onClick del div.
no estoy seguro si es la mejor forma de hacerlo, pero funciona.
no se si el nombre "render" es el mejor, pero no se me ocurre otro.
*/
export default Color

