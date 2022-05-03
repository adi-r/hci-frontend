import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div style={{ fontSize: "24px " }}>
                <br />
                <h2>  Home </h2>
                <br />
                <div></div>

                <br />

                <div style={{ textAlign: "center" }}>  <b> Project Goals </b> </div>

                <br />

                <ul style={{ textAlign: "left" }}>
                    <li>According to the EPA and USDA, the United States discards more food than any other country in the world: 80 billion pounds every year. 
                        That’s estimated to be 30-40 percent of the entire US food supply and equates to 219 pounds of waste per person.
                    </li>
                    <li>Our project aims to solve this issue at the grassroots level by allowing users in a community to share any unnecessary food with other members of the community. 
                        This not only cuts down on food waste but also creates public awareness about the matter.
                    </li>
                    <li>We propose our solution: FORAGER, an interface that allows users to not only donate unnecessary food but also receives food items as and when needed. 
                        Currently built on Android, our mobile application allows users to choose what items they wish to donate by adding the corresponding details on the donation form while users can choose to receive food items by accepting donations and going to the location to pick up the item. 
                    </li>
                    
                </ul>

                <br />
                
                <div style={{ textAlign: "center", }}> <b> TARGET USERS </b> </div>

                <ul style={{ textAlign: "left" }}>
                    <li>Our primary users are users with smartphones who wish to donate and/or receive excess food.</li>
                    <li>Teens (13 - 18) and Adults (18 - 65 years old) are the primary targets for this project.</li>
                    <li>Users should be familiar with modern smartphones and social media applications as well as the methods to operate a camera.</li>


                </ul>

                <br/>

                <div style={{ textAlign: "center", }}> <b> ABOUT US </b> </div>

                <ul style={{ textAlign: "left" }}>
                    <li>Aditya Ranganathan, CS Grad</li>
                    <li>Karthik Singh, CS Grad</li>


                </ul>
            </div>
               

        )
    }
}



