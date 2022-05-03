import React, { useState, useEffect } from 'react';
import '../IfoodCounter/IfoodCounter.css';

export default function IfoodCounter() {
    const [value, setValue] = useState(1);
    const [buttonStyle, setButtonStyle] = useState("counter-button-minus-active");

    // useEffect(() => {
    //     console.log(`O estilo do botao atual é: ${buttonStyle}`)
    // }, [buttonStyle]);

    useEffect(() => {
        document.getElementById("moeda").innerHTML = 2.00 * value;
    }, [value]);

    // useEffect(() => {
    //     alert('Você não pode mais diminuir itens')
    // }, [buttonStyle]);

    function down() {
        if (value <= 1) {
            // Mudar o css
            setButtonStyle("counter-button-minus-desactive");
        }
        if (value > 0) {
            setValue(value - 1);
        }
    }
    function up() {
        setValue(value + 1);
        setButtonStyle("counter-button-minus-active");
    }

    return (
        <div className="countex-wrapper">
            <button
                className="counter-button-minus-active"
                onClick={down}>
                -
            </button>
            <p>{value}</p>
            <button
                className="counter-button-plus-active"
                onClick={up} >
                +
            </button>
            <button id="moeda">12,00</button>

        </div>
    )
}
