import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import "./IcaoMenu.css";

function IcaoMenu(props) {
    // The forwardRef is important!!
    // Dropdown needs access to the DOM node in order to position the Menu
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);   
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );

    return (
        <div class="container">
            <button className="btn btn-primary">
                <Dropdown>
                    <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                        <div className='icao-dropdown-title'>Icao Codes</div>
                    </Dropdown.Toggle>

                    <Dropdown.Menu as={CustomMenu}>
                        <Dropdown.Item onClick={(e) =>props.handleToUpdate(e)} eventKey="1">LMML</Dropdown.Item>
                        <Dropdown.Item onClick={(e) =>props.handleToUpdate(e)} eventKey="2">LICB</Dropdown.Item>
                        <Dropdown.Item onClick={(e) =>props.handleToUpdate(e)} eventKey="3">
                            LICC
                        </Dropdown.Item>
                        <Dropdown.Item onClick={(e) =>props.handleToUpdate(e)} eventKey="1">LICR</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </button>
        </div>
        // <div className="btn btn-primary" >

        // </div>

    );
}

export default IcaoMenu;