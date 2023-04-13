import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "./IcaoMenu.css";

function IcaoMenu(props) {
    const [icao, setIcao] = useState("");
    return (
        <div class="container">
            <form>
                <label>Input ICAO Code:
                    <input
                        type="text"
                        value={icao}
                        onChange={(e) => setIcao(e.target.value)}
                    />
                </label>
            </form>
            <button onClick={() => props.handleToUpdate(icao)} className="btn btn-primary">
                Submit
            </button>
        </div>
    );
}

export default IcaoMenu;