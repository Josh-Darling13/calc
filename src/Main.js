import React, {Component} from 'react';


function Main(){

    return(
        <div className ='row'>
            <div className='.col-md-5'>
                <h1>project title or whatever</h1>
                <table className='table'>
                    <tr>
                        <input type='text'/>
                        <button>
                            C
                        </button>
                    </tr>
                    <tr>
                        <button>
                            1
                        </button>
                        <button>
                            2
                        </button>
                        <button>
                            3
                        </button>
                        <button>
                            /
                        </button>
                    </tr>
                    <tr>
                        <button>
                            4
                        </button>
                        <button>
                            5
                        </button>
                        <button>
                            6
                        </button>
                        <button>
                            -
                        </button>
                    </tr>
                    <tr>
                        <button>
                            7
                        </button>
                        <button>
                            8
                        </button>
                        <button>
                            9
                        </button>
                        <button>
                            +
                        </button>
                    </tr>
                    <tr>
                        <button>
                            .
                        </button>
                        <button>
                            0
                        </button>
                        <button>
                            =
                        </button>
                        <button>
                            *
                        </button>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Main