import React, { useState, useEffect } from "react";
import '../styles/TinderCards.css'
import TinderCard from "react-tinder-card";
import axios from "axios"

const TinderCards = () => {
    const [people, setPeople] = useState([]);


    useEffect(() => {
        async function fetchdata() {
            await axios.get('/tinder/card').then((res) => {
                const data = res.data.cardItem;
                setPeople(data);
            }).catch((error) => {
                console.log(error.message);
            })
        }
        fetchdata();
    }, []);


    const swipe = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen");
    }

    return (
        <div className="tinderCards">
            <div className="tindercards_cardcontainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => {
                            swipe(dir, person.name)
                        }}
                        onCardLeftScreen={() => { outOfFrame(person.name) }}
                    >
                        <div className="card" style={{
                            backgroundImage: `url(${person.imgUrl})`,
                        }}>
                            <h2>{person.name}</h2>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>)
};

export default TinderCards;
