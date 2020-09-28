import React from 'react'

function HomePage() {
    return (
        <>
            <div className="bliss-text-box">
                {/* <img src="./images/noun_bake_2645541.svg" /> */}
                <i className="fas fa-pizza-slice"></i>
                <p className="logo__top">Baking</p>
                <p className="logo__bottom">Bliss</p>
                <h1>Made with lots of love and cream!</h1>
            </div>
            <div className="section-about-us js--aboutus">
                <h2 className="section-heading">We bake for you!</h2>
                <p>We are commited for your 100% satisfaction!</p>
                <div className="about-us__sections">
                    <div className="about-us__section">
                        <i className="fas fa-pizza-slice icon-big"></i>
                        <h3>Always Fresh</h3>
                        <p>We bake it just for you - from scratch. We make sur your order is fresh and as per your requirements so we make it as per your needs</p>
                    </div>
                    <div className="about-us__section">
                        <i className="fas fa-birthday-cake icon-big"></i>
                        <h3>Customisable</h3>
                        <p>Your order is 100% Customisable - We bake as you want giving the personal touch that you desire.</p>
                    </div>
                    <div className="about-us__section">
                        <i className="fas fa-pizza-slice icon-big"></i>
                        <h3>Taste that you will remeber</h3>
                        <p>We bake it just for you - from scratch. We make sur your order is fresh and as per your requirements so we make it as per your needs</p>
                    </div>
                    <div className="about-us__section">
                        <i className="fas fa-birthday-cake icon-big"></i>
                        <h3>Customisable</h3>
                        <p>Your order is 100% Customisable - We bake as you want giving the personal touch that you desire.</p>
                    </div>
                </div>
                
            </div>
            <div className="gallery__sections">
                <div className="image__row" >
                    <div className="image"><img src={require("../images/1.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/2.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/3.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/4.png")} alt="image" /></div>
                </div>
                <div className="image__row" >
                    <div className="image"><img src={require("../images/5.png")} alt="image" /></div>
                    <div className="image"> <img src={require("../images/6.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/7.png")} alt="image" /></div>
                    <div className="image"> <img src={require("../images/8.png")} alt="image" /></div>
                </div>
                <div className="image__row" >
                    <div className="image"><img src={require("../images/9.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/10.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/11.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/12.png")} alt="image" /></div>
                </div>
                <div className="image__row" >
                    <div className="image"><img src={require("../images/13.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/14.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/15.png")} alt="image" /></div>
                    <div className="image"><img src={require("../images/16.png")} alt="image" /></div>
                </div>
            </div>
            <div className="section__chef" >
                <h2 className="section-heading">
                    About Me
                </h2>
                <div className="section__chef__info">
                    <div className="section__chef__info__image">
                        <img src={require("../images/manvi.jpg")} alt="Manvi" />
                    </div>
                    <div className="section__chef__info__details">
                       <p> I am self taught baker.
                        Bake the world a happy place.� Customised Birthday Cakes/Cupcakes/Muffins/Garlic Breads and much more.� Please DM for more queries.
                        </p>
                        <br />
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Bibendum neque egestas congue quisque egestas diam. Viverra maecenas accumsan lacus vel facilisis volutpat. Egestas integer eget aliquet nibh praesent tristique magna sit. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Pharetra massa massa ultricies mi quis hendrerit dolor magna eget. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Quis varius quam quisque id. Tristique et egestas quis ipsum suspendisse ultrices gravida.
                        </p>
                        <br/>
                        <p>
                        Sed vulputate odio ut enim blandit. Eget est lorem ipsum dolor. Non nisi est sit amet. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Habitasse platea dictumst quisque sagittis. Tincidunt arcu non sodales neque sodales ut etiam. Blandit libero volutpat sed cras ornare arcu dui. Consequat id porta nibh venenatis cras sed felis eget. Nec dui nunc mattis enim ut tellus. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Iaculis eu non diam phasellus vestibulum lorem sed risus. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus quam. Nisl purus in mollis nunc sed id semper. Pharetra diam sit amet nisl suscipit. Placerat in egestas erat imperdiet sed euismod nisi porta. Nullam vehicula ipsum a arcu cursus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="section__testimonials">
                <h2 className="section-heading yellow">
                    Now let the customers speak
                </h2>
                <div className="section__testimonials__details">
                    <div className="slider">
                        <div className="slide">
                            <div className="slide__image__div" > 
                                <img src={require("../images/5.png")} alt="image" />
                                
                            </div>
                            <div className="slide__comments__div">
                                <p>Undoubtedly the most delicious, fresh and creamiest cakes I have ever had!!!</p>
                                <strong>Ashvarya</strong>
                            </div>
                        </div>
                        <div className="slide">
                             <div className="slide__image__div" > 
                                <img src={require("../images/5.png")} alt="image" />
                               
                            </div>
                             <div className="slide__comments__div">
                                <p>Undoubtedly the most delicious, fresh and creamiest cakes I have ever had!!!</p>
                                <strong>Ashvarya</strong>
                            </div>
                        </div>
                        <div className="slide">
                             <div className="slide__image__div" > 
                                <img src={require("../images/5.png")} alt="image" />
                               
                            </div>
                             <div className="slide__comments__div">
                                <p>Undoubtedly the most delicious, fresh and creamiest cakes I have ever had!!!</p>
                                <strong>Ashvarya</strong>
                            </div>
                        </div>
                        <div className="slide">
                            <div></div>
                        </div>
                        <div className="slide">
                            <div></div>
                        </div>
                        <div className="slide">
                            <div></div>
                        </div>
                        <div className="slide">
                            <div></div>
                        </div>
                        <div className="slide">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage
