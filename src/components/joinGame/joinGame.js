import React from 'react'
import img from '../../images/icon.png';

export default function JoinGame() {
    return (
        <div className="join-game__wrapper">
            <div className="join-game__heading">
                <h1>Присоединиться к игре</h1>
            </div>
            <div className="join-game__content">

                <div className="join-game__content-item">
                    <div className="join-game__content-item--heading">
                        <p>
                            Стоимость участия
                        </p>
                    </div>
                    <div className="join-game__content-item--value">
                        <div className="join-game__content-item--value__icon">
                            <img src={img}/>
                        </div>
                        <div className="join-game__content-item--value__value">
                            <p>100</p>
                        </div>
                    </div>
                </div>

                <div className="join-game__content-item">
                    <div className="join-game__content-item--heading">
                        <p>
                          Количество игроков
                        </p>
                    </div>
                    <div className="join-game__content-item--value">
                        <div className="join-game__content-item--value__icon">
                            <p>1/2</p>
                        </div>
                    </div>
                </div>

                <div className="join-game__content-item">
                    <div className="join-game__content-item--heading">
                        <p>
                          Стоимость участия
                        </p>
                    </div>
                    <div className="join-game__content-item--value">
                        <div className="join-game__content-item--value__icon">
                            <img src={img}/>
                        </div>
                        <div className="join-game__content-item--value__value">
                            <p>100</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
