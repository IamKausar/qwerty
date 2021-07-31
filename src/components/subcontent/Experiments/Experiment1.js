import React from 'react'
import './Experiment.css';

const Experiment1 = () => {
    return (
        <div>
            <h2>IV characteristics of PN diode</h2>
            <img className="centre" src="https://qphs.fs.quoracdn.net/main-qimg-d17ccb8be0a976299e08d98fb6c94d6d"></img>
            <p>The IV curve of a solar cell is the superposition of the IV curve of the solar cell
                diode in the dark with the light-generated current.1 The light has the effect of shifting
                the IV curve down into the fourth quadrant where power can be extracted from the diode.
                Illuminating a cell adds to the normal "dark" currents in the diode so that the diode law becomes.
            </p>
            <p>Forward Current Equation of PN Junction Diode
                The diode equation is given as

                ID = IS(eqVD/NkT – 1)<br></br>

                Here,<br></br>

                ID = diode current in amps<br></br>

                IS = Saturation current in amps (1 x 10-12 amps)<br></br>

                e = Euler’s constant (∼ 2.718281828)<br></br>

                q = charge of electron (1.6 x 10-19 coulombs)<br></br>

                VD = Voltage applied across diode in volts<br></br>

                N = emission coefficient ( between 1 and 2)<br></br>

                k = Boltzmann,s constant (1.38 x 10-23)<br></br>

                T = Junction Temperature<br></br>

                The term kT/q is the voltage produced within the PN junction due to the temperature and this temperature is called the thermal voltage. The value of kT/q is equal to 26 millivolts at room temperature. Let us assume N to be equal to 1. Then the diode equation can be written as<br></br>

                ID = IS(eVD/0.026 – 1)

            </p>
        </div>
    )
}

export default Experiment1
