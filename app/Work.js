


export default function Work() {
    return (

        <div className="work">
            <h3 className="title">Projects</h3>
            <div className="box-container">
                <div className="box">

                    <h3>Machine learning and Deep learning</h3>
                    <p>I am experienced in machine learning and deep learning. I have done 3 projects: 1. AI prediction of glaucoma 2. Face recognition 3. AI prediction for depression. The third project is collaborating with a doctor from Siriraj and a linguist. If this project is successfully developed, it will be implemented in practice to help relieve the workload of doctors</p>

                </div>

                <div className="box">

                    <h3>Smart Datacenter</h3>
                    <p>This is a project that works with the faculty's server room using NodeMCU ESP8266 to measure temperature, humidity, and electrical current in the server room. When the temperature is too high, the humidity is too high, and the electrical current is abnormal, it will send a notification to the LINE chat. You can also view various information via the LINE chat.</p>
                    <div className="feature">
                        <h3>Features</h3>
                        <p> 1. Can measure temperature, humidity, electric current and view various values ​​via Line Chatbot</p>
                        <p> 2. When the measured values ​​are abnormal, a notification can be sent via Line Chatbot</p>
                        <p> 3. Can create graphs of various values ​​and can set the desired viewing period within 3 months</p>
                    </div>
                </div>
                <div className="box">

                    <h3>Personal project with java spring boot</h3>
                    <p>Local website with spring boot framework. A website that has a system for registering and verifying identity via email and has a function that can store user data in SQL, There is a separation of roles of admin and user id. User can upload photos, information and can edit information. Admin can view information of all users and can send email notifications to users when they have won prizes and can also post messages on the website.</p>
                    <div className="feature">
                        <h3>Features</h3>
                        <h4>Normal User ID</h4>
                        <p>1. Registered on the website and verified via email</p>
                        <p>2. Users can enter data and images stored on the website and users can only see their own data and can edit data</p>
                        <h4>Admin ID</h4>
                        <p>1. Admin who can view all user data and the time the data was recorded</p>
                        <p>2. There is a search bar that can find the desired image from the numbers in various sections and find the name of the normal user ID</p>
                        <p>3. Can press to send an email to the normal user who won the prize</p>
                    </div>
                </div>
                <div className="box">

                    <h3>Map of various stores</h3>
                    <p>This is an internship project using JS and Express to create a website. The website can display various points of various types of stores. It can also be classified to show only stores of interest. It can also draw circles or lines to see the distance between stores. For data, Python is used to use the API to retrieve data from various stores in the Map and organize the data so that it can be used.</p>
                    <div className="feature">
                        <h3>Features</h3>
                        <p> 1. Can plot data of various store points on Google maps</p>
                        <p> 2. Can classify the types of stores displayed</p>
                        <p> 3. Can create lines or circles to show the frequency or distance of various stores</p>
                    </div>
                </div>
            </div>

        </div>


    );
} 