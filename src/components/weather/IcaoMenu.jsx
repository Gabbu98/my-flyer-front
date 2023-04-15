import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "./IcaoMenu.css";

function IcaoMenu(props) {
    const [icao, setIcao] = useState("");
    return (
        <div class="container">
            <form>
                <div class="weather_form_row">
                    <div class="col_2">
                        <input type="text" className="form_control" placeholder="Icao Code" value={icao} onChange={(e) => setIcao(e.target.value)}></input>
                    </div>
                    <div class="col_1">
                        <button type="button" className="submit_btn" onClick={() => props.updateWeather(icao)}>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default IcaoMenu;