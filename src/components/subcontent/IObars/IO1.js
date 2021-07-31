import React, { useState, useEffect } from 'react';

const IO1 = () => {
    function Input() {

        let [input1, setInput] = useState(0);
        let [input2, setInput2] = useState(0);
        let [output, setOutput] = useState(0);

        function Calculate(input1, input2) {
            let k = (input1 / 0.026);
            let Id = ((2.718 ** k) - 1) * input2;
            setOutput(Id);
        }
        useEffect(() => {
            Calculate(input1, input2);
        }, [input2, input1])

        return (
            <div className="Input">
                <form>
                    <label>
                        Vd :
                        <input type="number" name="Input1"
                            onChange={
                                e => {
                                    setInput(e.target.value);
                                    console.log("Entered text:", input1);
                                }
                            } />
                    </label>
                    <br></br>
                    <label>
                        Is :
                        <input type="number" name="Input2" onChange={
                            e => {
                                setInput2(e.target.value);
                                console.log("Entered text:", input2);
                            }
                        } />
                    </label>
                </form>

                <h3>Output : {output}</h3>
            </div>
        )
    }


    return (
        <div>
            <Input />
        </div>
    )
}



export default IO1
