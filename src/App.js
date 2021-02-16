import React, {useEffect, useState} from "react";
import "./App.scss";
import {Route} from "react-router-dom";
import {Home} from "./components/Home/Home";
import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {RightBar} from "./components/RightBar/RightBar";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";


function App() {

    const [questions, setQuestions] = useState({})

    useEffect(() => {
        const getDB = async () => {
            try {
                const response = await axios.get('https://weather-app-9ee4f-default-rtdb.europe-west1.firebasedatabase.app/city.json')
                console.log(response.data)
            } catch (e) {
                console.log('ОШИБКА!', e)
            }
        }

        getDB()
    }, [])

    const changeHandler = (itemName) => {
        return (e) => {
            setQuestions(prevState => ({
                ...prevState,
                [itemName]: e.target.value
            }))
            console.log(questions)
        }
    }

    const a = ['give', 'me', 'question'].map(i => <input type="text" key={i} onChange={changeHandler(i)}/>)

    const postData = async () => {
        try {
           const response = await axios.post('https://weather-app-9ee4f-default-rtdb.europe-west1.firebasedatabase.app/userNames.json', questions)
            return await response
        } catch (e) {
            console.log(e)
        }
    }

    const getData = async () => {
        try {
            const response = await axios.get('https://weather-app-9ee4f-default-rtdb.europe-west1.firebasedatabase.app/userNames.json')
            const result = await response
            console.log(result)

            return await response
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="App">

            <div>
                {a}
                <input type="submit" onClick={postData}/>
                <input type="submit" onClick={getData}/>
            </div>

            <Header/>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/favorites"} component={Favorites}/>
            {/*<Home />*/}
            <RightBar/>
            <Footer/>
        </div>
    );
}

export default App;
