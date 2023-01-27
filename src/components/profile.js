import PersonList from "./personlist";


const personData = [
    {
        name: "Kevin Jonathan Kusnomo",
        matriculationNo: "U1234567X",
        position: "React JS",
        photoUrl: "../kevin-photo.jpg",
        description1: "SMPK 4 Penabur, SMAK 5 Penabur, Nanyang Technological Univeristy. These institutions are responsible on building this person's education and social experience.",
        description2: "He is also currently learning about front end development and dream to work at META.",
        birthDate: "2802", //format: ddmm
        birthYear: "2004", //format: yyyy
        shortDesc: "noob",
    }, 

    {
        name: "Jonathan Kusnomo, Kevin",
        matriculationNo: "U2345678Y",
        position: "MongoDB",
        photoUrl: "none", 
        description1: "<institution A> <institution B> <institution C>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat, tellus sit amet consequat convallis.",
        description2: "Arcu nibh elementum erat, id convallis dolor nunc vitae erat. Nam porttitor at augue egestas.",
        birthDate: "ddmm", //format: ddmm
        birthYear: "yyyy", //format: yyyy
        shortDesc: "dumb",
    }, 

    {
        name: "Kusnomo, Kevin Jonathan",
        matriculationNo: "U3456789Z",
        position: "JavaScript",
        photoUrl: "none",
        description1: "<institution A> <institution B> <institution C>. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat, tellus sit amet consequat convallis.",
        description2: "Arcu nibh elementum erat, id convallis dolor nunc vitae erat. Nam porttitor at augue egestas.",
        birthDate: "ddmm", //format: ddmm
        birthYear: "yyyy", //format: yyyy
        shortDesc: "fine",
    }
]

function Profile(){

    return(
        <div style={{display: "flex" , justifyContent: "center"}}>
            <div style={{width: "100%"}}>
                <h3 className="quiz-number" style={{width: "60%", margin: "10px auto"}}>People Profile</h3>
                {
                    personData.map((value , index) => {
                    return(
                            <div key={`person-card-${index}`}>
                                <PersonList personData={value} />
                            </div>
                    )
                    })
                    
                }
                
            </div>
        </div>
    )
}

export default Profile;