import React, { useState } from 'react'
import { useStateValue } from '../Store/StateProvider';

function ContactUs() {
    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");
    const [reference, setReference] = useState("")
    return (
      <div>
        <div className="contactUs">
          <h2 className="section-heading">Drop us a question!!</h2>

          <div className="contactUs__phone">
            <i class="fas fa-mobile-alt contactUs__icon"></i>
            <div className="contactUs__phone__numbers">
              <p>+1(647) 829-4835</p>
              <p>+1(647) 830-4835</p>
            </div>
          </div>
          <div>
            <img
              src={require("../images/female-cook-clipart-free-clipart-811033.png")}
              className="contactUs__image"
            />
          </div>
          <form className="contactUs__form" action="#">
            <div className="contactUs__row">
              <div className="contactUs__label">
                <label>Name</label>
              </div>
              <div className="contactUs__input">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Tell us your name!"
                  onChange={e=> setName(e.target.value)}
                />
              </div>
            </div>
            <div className="contactUs__row">
              <div className="contactUs__label">
                <label>Email</label>
              </div>
              <div className="contactUs__input">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Where to email you"
                  onChange={e=>setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="contactUs__row">
              <div className="contactUs__label">
                <label>How did you find us?</label>
              </div>
              <div className="contactUs__input">
                <select className="form__select" onSelect={e=>setReference(e.target.value)}>
                  <option value="friend" selected>
                    Heard from a friend
                  </option>
                  <option value="socialmedia">Social media, Of course!!</option>
                  <option value="other">Not listed here</option>
                </select>
              </div>
            </div>
            <div className="contactUs__row">
              <div className="contactUs__label">
                <label>Your question</label>
              </div>
              <div className="contactUs__input">
                <textarea
                  className="form__textarea"
                  placeholder="Ask your heart out..."
                  onChange={e=>setQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="contactUs__row">
              <div className="contactUs__label"></div>
              <div className="contactUs__input">
                <button className="form__submit">Ask Us!</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ContactUs
