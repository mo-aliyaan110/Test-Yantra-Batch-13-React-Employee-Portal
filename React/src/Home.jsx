import React from 'react';
import './styles/home.css';

const Home = () =>{
    return(
        <div>
                <div id="parent">
                    <div className="secondchild">
                        <div className="containerr">
                            <h3>Learning to Code</h3>
                            <h4>Opening a door to the future</h4>
                            <img className="img" src="./img/green-line.png" alt="green-line"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio cumque quaerat iste atque aspernatur similique non, nisi facilis totam consectetur, modi eaque, esse harum nesciunt fugiat voluptas doloribus! Quas?</p>
                        </div>
                        <span>Read more</span>
                    </div>
                    <div className="firstchild">

                        <div className="containerr2">
                            <h3>Learning to Code</h3>
                            <h4>Opening a door to the future</h4>
                            <img className="img" src="./img/green-line.png" alt="green-line"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio cumque quaerat iste atque aspernatur similique non, nisi facilis totam consectetur, modi eaque, esse harum nesciunt fugiat voluptas doloribus! Quas?</p>
                        </div>
                        <span>Read more</span>
                    </div>
            </div>
    </div>
    )
}
export default Home;