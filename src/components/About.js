import Admin from "./Admin";
import UserClass from "./UserClass";
const About = () =>{
    return(
        <div>
            <h1>About Us Page</h1>
            <h3>This is the about us page of orfer food application. Still working on contents fo this page.</h3>
            <Admin name="Peeyush" role = "Admin head" address = "Savda, Jalgaon, MH"/>
            <UserClass name="Anup" role = "Tech head" address = "xyz, Amravati, MH"/>
        </div>
    )
}

export default About;