import React, {useEffect, useState} from 'react'
import firebase from "firebase";

export const Auth = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        hasAccount: false,
        name: ''
    });

    useEffect(() => {
        const db = firebase.database();

        const name = db.ref('name')


        name.on('value', (elem) => setUserData(prevState => ({
            ...prevState,
            name: elem.val()
        })))

    }, []);

    const handleChange = (e) => {
        setUserData(prevState => ({
                    ...prevState,
                    [e.target.id]: e.target.value
                }
            )
        )
    }

    const createAccount = () => {
        const {email, password} = userData

        // firebase.auth().createUserWithEmailAndPassword(email, password).catch(e => console.log(e))

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => setUserData(prevState => ({...prevState, hasAccount: true})))
            .catch(e => console.log(e))
    }

    return(
        <div>
            {!userData.hasAccount &&
            <div>
                <input
                    type={"text"}
                    id={"email"}
                    placeholder={"email..."}
                    onChange={handleChange}
                />

                <input
                    type={"password"}
                    id={"password"}
                    placeholder={"password..."}
                    onChange={handleChange}

                />

                <input
                    type={"submit"}
                    onClick={createAccount}
                />
            </div>
            }
        </div>
    )
}