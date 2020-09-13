import React, { useState, useEffect } from 'react';
import './Card.css';
import TinderCard from 'react-tinder-card';
import database from '../../firebase';

function Card() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        const unsubscribe = database
            .collection('people')
            .onSnapshot(snapshot => (
                setPeople(snapshot.docs.map(doc => doc.data()))
            ));

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <div className="card">
            <div className="card__container">
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}

                        >
                            <div style={{ backgroundImage: `url(${person.url})` }} className='card__infos'>
                                <h3 className="card__name">{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    )
}

export default Card;
