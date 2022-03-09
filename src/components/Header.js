import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeLocation } from '../store/actions'

export default function Header(props) {
    const [keyword, setKeyword] = useState('')
    const locationName = useSelector(store => store.locationName);
    const dispatch = useDispatch();
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${keyword}&appid=8f7b5a75a51ff28a018c566e1da35cff`;

    const toggleTheme = (theme) => {
        document.getElementById('html').className = theme;
    }

    const setCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getLocation)
        }
    }

    function getLocation(position) {
        dispatch(changeLocation({ lat: position.coords.latitude, lon: position.coords.longitude }))
    }

    async function getLatLonFromSearch(e) {
        e.preventDefault();
        if (keyword.length < 1) { return; }
        try {
            const rawData = await fetch(apiUrl);
            const data = await rawData.json();
            dispatch(changeLocation({ lat: data.city.coord.lat, lon: data.city.coord.lon }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar expand="lg" bg='primary' variant='dark' className='p-2'>
                <Navbar.Brand href="#home">Weather Forecasts</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav>

                        <NavDropdown title={locationName} id="dark-nav-dropdown">
                            <NavDropdown.Item onClick={() => setCurrentLocation()}>Current Location</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Change Theme" id="theme-nav-dropdown">
                            <NavDropdown.Item href="#" onClick={() => toggleTheme('dark-theme')}>Dark Theme</NavDropdown.Item>
                            <NavDropdown.Item href="#" onClick={() => toggleTheme('light-theme')}>Light Theme</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex" onSubmit={(e) => getLatLonFromSearch(e)}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            aria-label="Location..."
                        />
                        <Button variant="outline-success" type='submit'>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
