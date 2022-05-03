import React, { Component } from 'react'

import t11 from "./images/t11.PNG"
import t12 from "./images/t12.PNG"
import t21 from "./images/t21.PNG"
import t22 from "./images/t22.PNG"
import t23 from "./images/t23.PNG"
import t24 from "./images/t24.PNG"
import t31 from "./images/t31.PNG"
import t32 from "./images/t32.PNG"
import t33 from "./images/t33.PNG"


export default class About extends Component {
    render() {


        return (
            <div style={{ textAlign: "left" }}>


                <img src={t11} />
                <img src={t12} />
                <img src={t21} />
                <img src={t22} />
                <img src={t23} />
                <img src={t24} />
                <img src={t31} />
                <img src={t32} />
                <img src={t33} />

                <h2>Design Challenge : Adding new food donations and specifying details </h2>

                <h2>Design Challenge : Tracking food donated and received </h2>




                <br />

                <p>
                    In iteration 1, our initial designs showed a calendar-style summary interface that would make it highly learnable for novice users but poor in efficiency for expert users as they would be unable to keep track of their trends and progress.

                    The Dashboard style interface with recent events improves efficiency by a wide margin but makes it difficult for users to get summary statistics regarding their donation/reception of food at a single glance.

                    Taking elements from iteration 1, in iteration 2 we focus on trying to find a balance between showing enough information to maintain high efficiency while at the same keeping learnability and readability at an appropriate level so that users can easily understand the data.

                    In iteration 2, we experiment with different designs such as the TImeline which shows the entire list of donated and received items on a date-wise basis. This is poor in efficiency as users will have to scroll to access each item and there’s no summarized data being presented to the users. We then try implementing a simple minimalist interface that shows just summary statistics of each reception/donation. While high in learnability and readability, it doesn’t allow expert users to keep track of their trends and understand whether by how large a margin their contributions. We further designed a more balanced interface that implements both the graph and donation statistics which can be interchanged by clicking on the arrow keys.

                    Taking the best elements from iteration 2, we design the final interface where we implement a graph to show users their trends and compare the donation and reception trends. The graph is large, easily noticeable, and promotes readability. At the bottom of the screen, we implement summary statistics in a split window to promote readability, increase the efficiency of data being processed and take it one step further by adding a

                    timeline window as well to allow users to gain granular control over the data they’re being shown.

                </p>


                <h2>Design Challenge : Communication between Donor and Receiver</h2>


















                DESIGN REFLECTIONS

                Aditya’s Design Reflection


                In terms of general interaction design, our group has focused more on improving the learnability of the application compared to efficiency and safety. Our original ideas were more geared towards efficiency and safety, rather than learnability. But, from the interviews and surveys conducted, we realized that there’s a general lack of awareness when it comes to food donation. We wanted the application to be extremely user-friendly with a focus on high learnability so that users can quickly understand how the interface works and can start donating food. We hope to foster and increase both user and public awareness regarding food wastage.
                With that in mind, we’ve selected simple and easily recognizable icons such as the ‘Home’ icon for the main page, the ‘Magnifying Glass’ which is a metaphor for searching, the ‘Speech Bubble’ icon which is a metaphor for communication and the ‘Account’ symbol, through rigorous use is easily recognizable now. Due to the large scope of the target audience, we tried to ensure that whatever icons and metaphors we used in the interface would be easily recognizable.
                During our group discussions, we kept referring to Nielsen’s 10 principles to refine our design. We focused particularly on matching the user’s mental model and systems model to improve learnability and readability. Another aspect that we were concerned about was user control. A few of the interviewees expressed their concerns about sharing their location with strangers. Taking these into consideration we wanted our users to have complete control over their data. Users can choose to either share their information or designate drop-off locations from where the food item can be collected.
                Finally, I can say that iterating through designs really helps to find potential and/or obscure issues. By coming up with various alternative designs, not only are we discovering new issues in designs that we otherwise thought were bulletproof, but also methods and components that can improve aspects of our design and improve usability principles. We can also mix-match components from multiple designs to create new interfaces which can reduce deficiencies that were originally present.

                APPENDIX



                Aditya’s Individual Designs

                Adding new food donations and corresponding information
















                Design Challenge: Keeping track of food donated/received

















                Design Challenge: Communication between Donor and Receiver














                Design Challenge: Searching for donors/shelters/NGO’s in the vicinity





                Karthik’s Individual Designs



                Design Challenge: Searching for donors/shelters/NGO’s in the vicinity










                In task 1 - (point 1,2,3 are iterations, point 4,5 are alternatives) you can see that in the first iteration(1) we started off with a listview having most of the interactive components including the search bar on the bottom of the screen so that it's easier for one handed thumb usage but in iteration(3) which is a combination of interaction 1 & 2 we moved it up to the top as we needed to dynamically display the list as the user starts giving input so that we could increase efficiency.



                Design Challenge: Adding new food donations and corresponding information.











                In task 2 - (point 1,2,3 are iterations, point 4 is an alternative) Iteration one was our very first design where we had assumed that only 1 photo was sufficient and current location would always be the pick up point for the receiver. In iteration 2 we added multiple image support as well as the ability to choose the location. To further improve on efficiency we added a mini map directly in iteration 3 so that the default location was more readable for the user,editable while expanded. point 4 is a non-photo alternative that we thought of for that some standard food outlets could use something like a big mac did not necessarily need a photo but the idea was discarded as there was minimal matching in the requirement.



                Design Challenge: Keeping track of food donated/received.









                In task 3 - (point 1,2,5 are iterations, point 3,4 are alternatives) we Initially thought of using the list view again where the list was separated by receiver, donor tabs but at a glance the user was not getting too much information in this layout so we thought of adding a graph in iteration 2 to make all the stats more readable at a glance, the graph would show count of items donated in a time range still separated by a tab. Then in the next iteration(5) we removed the tabs so that we could color code the graph that split donations/receptions along with the stats below to increase efficiency only to come to a point where we realized that it would be incredibly difficult to generate mean data for food measured with different standards. So we chose to discard 1,2,5 and built a timeline view(point 4) similar to phone logs showing donation/reception history in a vertical timeline.

                Design Challenge: Communication between Donor and Receiver








                In task 4(all points are alternatives). The basic idea always remained the same, having sender message to the left, receiver message to the right. Any other layout I could think of like grid view/ exploded view decreased readability by increasing clutter. So the final design layout looks similar to whatsapp/wechat/fb messenger. There were very few layouts I could think of that could outperform the above in any factor.

                Design Reflection

                <ul style={{ textAlign: "left" }}>
                    <li>
                        In design 1 we first tried to focus more on efficiency only to realize that changing one component might affect another like increasing too much efficiency and making everything on the smartphone reachable by the thumb might decrease learnability & readability due to cluttering. So sometimes we need to balance between different factors. We get only a limited number of points which we could allocate as per our apps needs.
                    </li>

                    <li>
                        In design 2 also as per the feedback from interviewees they wanted to know a lot more details about the food then we had previously thought. A simple food name might not suffice to give an incentive to most of our users to use the app & reduce wastage. To make it more trustworthy we had to add in more food detail inputs, multiple photos of food etc
                    </li>


                    <li>
                        In design 3 We initially wanted to show overall statistics that would sum up the entire history, but as we went on through the iterations we realized that it is difficult to sum up the food donation details as standards for measuring food are dependent on the food itself. Some of the food items were measured in oz,gal,kg,count etc. so the final design we settled for (iteration no. 4) with the timeline view was a massive detour compared to the evolution from iteration 1,2 & 3.
                    </li>

                    <li>
                        In design 4 was probably the easiest and straightforward, there is very little scope for improvement when it comes to messaging and that's the reason why most messaging applications use the left(sender) - right(receiver) view to communicate.
                    </li>
                </ul>

                In our group discussions we tried to take the best from both our individual iterative designs for each challenge in our final design. Sometimes we took all of one individual contribution and discarded the other and sometimes we tried to mix the best features.

                In conclusion, iterating the design & looking into the survey/interview feedback really helps to find potential and ambiguous problems. Methods and components that can improve design aspects and improve usability principles, as well as discover new design issues that were otherwise considered completely safe by developing a variety of alternative designs. Also discover. You can also combine components from multiple designs to create new interfaces that can reduce the defects that originally existed.
            </div>
        )
    }
}
