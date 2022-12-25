import Navbar from './Navbar';
import TextFrom from './Textform'
import About from './About';
import React, { useState } from 'react';
import Alert from './Alert'
import Contect from './Contect';
import 'F:/reactproject/textfile/src/App.css';


export default function Home() {

    var [dark, setDark] = useState({
        color: 'white',
        backgroundColor: 'black',
    })
    var alerthendal = (text) => {
        if (!text) {
            if (dark.color === 'white') {
                setalert("Light Mode")
            }
            else {
                setalert("Dark Mode")
            }
        } else {
            setalert(text)
        }
        setTimeout(() => {
            setalert("")
        }, 5000);
    }
    const [alert, setalert] = useState("")
    const [btntext, setbtntext] = useState("Enable Dark Mode")
    const darkMode = () => {
        if (dark.color === 'white') {
            setDark({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid white'

            })
            setbtntext('Enable Light Mode')
            alerthendal()
        }
        else {
            setDark({
                color: 'white',
                backgroundColor: 'black',
            })
            setbtntext('Enable Dark Mode')
            alerthendal()
        }

    }

    return (
        
        <div >
            <div className='bg-dark '>
                <div className='bg-dark '>
                    <button type="button" className=" btn btn-outline-success m-3" onClick={darkMode} >{btntext}</button>
                    <Navbar className='' title="Texthelper" aboutText="About Us" homeText="Home" style={dark} />

                    <Alert alert={alert} />
                </div>


                <div className="container-fluid  " style={dark}>
                    
                    
                       
                    
                    <TextFrom heading="Enter your text here" onButtonClick={alerthendal} /> 
                     <About />

                    <Contect />
                    
                </div>
            </div>
        </div>
        
    );
}
