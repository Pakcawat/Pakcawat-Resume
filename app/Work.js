import Image from 'next/image'

export default function Work() {
    return  (
        
        <div className="work">
            <h3 className="title">Projects</h3>
            <div className="box-container">
                <div className="box">
                    <span>2017 - 2018</span>
                    <h3>machine learning and deep learning</h3>
                    <p>I am experienced in machine learning and deep learning. I have done 3 projects: 1. AI prediction of glaucoma 2. Face recognition 3. AI prediction for depression. The third project is collaborating with a doctor from Siriraj and a linguist. If this project is successfully developed, it will be implemented in practice to help relieve the workload of doctors</p>
                </div>
                <div className="box">
                    <span>2018 - 2019</span>
                    <h3> Web applications with Django</h3>
                    <p></p>
                </div>
                <div className="box">
                    <span>2019 - 2020</span>
                    <h3>IoT</h3>
                    <p>Line messaging API, a system capable of monitoring status, temperature, humidity, and pressure, and can analyze movement and alert users via Line if pots are moved.</p>
                </div>
                <div className="box">
                    <span>2020 - 2021</span>
                    <h3>Smart Datacenter use NodeMCU ESP8266</h3>
                    <p>device to measure temperature, humidity, and electric current in the datacenter of the faculty and can be displayed in Line chatbot and stored in a database which can be viewed as a graph via chatbots.</p>
                </div>
                <div className="box">
                    <span>2020 - 2021</span>
                    <h3>personal project with JAVA spring boot</h3>
                    <p>   Local website with spring boot framework. A website that has a system for registering and verifying your identity via email and has a function that can store user data in SQL, show data for each user.</p>
                </div>
                <div className="box">
                    <span>2018 - 2019</span>
                    <h3> Web applications with Express</h3>
                    <p></p>
                </div>
            </div>
        </div>

    ); 
} 