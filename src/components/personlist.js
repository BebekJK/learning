import './personlist.css'
import { decode } from 'html-entities';
function PersonList(props){
    const {personData} = props;
    let logo = require('../defaultpp.jpeg');
    return (
    <div className='idk'>
        <div className='person-card-container' style={{display: "flex" , justifyContent: "center"}}>
            <div className='person-card-front'>
                <div className='person-matriculation-no'>{personData.matriculationNo}</div>
                <div className='person-name'>{personData.name}</div>
                <img src={logo} className='person-photo'></img>
                <div className='person-position'>{personData.position.toUpperCase()}</div>
            </div>
            <div className='person-card-back'>
                <div style={{backgroundColor: '#e91c3a' , height: "10%" , width: "100%" , borderRadius: "10px 10px 0px 0px", color: "white", textAlign: "right", padding: "7px 10px 0px 0px", fontSize: "1.5vh"}}>{decode("&copy; Nanyang Technological University, 2023")}</div>
                <div style={{display: 'flex'}}>
                    <div style={{width: "75%" , textAlign: "justify" , padding: "10px 20px"}}>
                        <p className='person-desc' style={{marginBottom: "0.5vh"}}>The information written below is top secret and the truth has been confirmed by: </p>
                        <ul style={{paddingLeft: "2vh" , paddingBottom: "1vh", margin: "0"}}>
                            <li className='person-desc'>{personData.description1}</li>
                            <li className='person-desc' style={{marginTop: "1vh"}}>{personData.description2}</li>
                        </ul>
                    </div>

                    <div >
                        <img src={require('../kevin-qrcode.jpg')} style={{aspectRatio: "1/1", width: "16vh" , margin: "10px 10px 5px 0px"}}></img>
                        <div style={{display: "block" , color: "white" , backgroundColor: '#2f53a1' , fontSize: '1.2vh' , width: "16vh" , borderRadius: "5px", opacity: "1.2"}}>Scan QR to find out more</div>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent:"space-evenly", width: "43vh"}}>
                    <div className='logo-letter'>V</div>
                    <div className='logo-letter'>E</div>
                    <div className='logo-letter'>R</div>
                    <div className='logo-letter'>I</div>
                    <div className='logo-letter'>F</div>
                    <div className='logo-letter'>I</div>
                    <div className='logo-letter'>E</div>
                    <div className='logo-letter'>D</div>
                </div>
                <div className="person-category">{personData.shortDesc}</div>
                <div>
                    <p className='person-desc' style={{textAlign: "left" , padding: "0px 20px", marginTop: "30px"}}>CAN:<span style={{letterSpacing: "0.8vh" , fontSize: "2.5vh", color: "brown", fontWeight: "lighter"}}>   XXXX  XXXX  {personData.birthDate}  {personData.birthYear}</span></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default PersonList;