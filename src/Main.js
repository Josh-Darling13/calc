import React, {Component, useState} from 'react';


function Main(){

    const [inputvalue, setinputvalue] = useState('');

    function display(value){
        /**
         * takes value from buttons and passed it to 
         * the text window
         */
        setinputvalue(inputvalue + value)
    }

    function calculate(){
        let answer = eval(inputvalue);
        setinputvalue(answer);
    }

    return(
        <div className='container'>
            <div className ='row'>
                <div className='.col-md-5'>
                    <h1>A Calculator!</h1>
                    <table className='table'>
                        <tr>
                        <td colSpan={3}><input type='text' value={inputvalue} /></td>
                        <td><button onClick=''>
                                C
                            </button></td>
                        </tr>
                        <tr>
                        <td><button onClick={()=>{display('1')}}>
                                1
                            </button></td>
                            <td><button onClick={()=>{display('2')}}>
                                2
                            </button></td>
                            <td><button onClick={()=>{display('3')}}>
                                3
                            </button></td>
                            <td><button onClick={()=>{display('/')}}>
                                /
                            </button></td>
                        </tr>
                        <tr>
                            <td><button onClick={()=>{display('4')}}>
                                4
                            </button></td>
                            <td><button onClick={()=>{display('5')}}>
                                5
                            </button></td>
                            <td><button onClick={()=>{display('6')}}>
                                6
                            </button></td>
                            <td><button onClick={()=>{display('-')}}>
                                -
                            </button></td>
                        </tr>
                        <tr>
                            <td><button onClick={()=>{display('7')}}>
                                7
                            </button></td>
                            <td><button onClick={()=>{display('8')}}>
                                8
                            </button></td>
                            <td><button onClick={()=>{display('9')}}>
                                9
                            </button></td>
                            <td><button onClick={()=>{display('+')}}>
                                +
                            </button></td>
                        </tr>
                        <tr>
                            <td><button onClick={()=>{display('.')}}>
                                .
                            </button></td>
                            <td><button onClick={()=>{display('0')}}>
                                0
                            </button></td>
                            <td><button onClick={()=>{calculate()}}>
                                =
                            </button></td>
                            <td><button onClick={()=>{display('*')}}>
                                *
                            </button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Main