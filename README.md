<h1 align="center">Event Logging System 📝</h1>


## About This Course:
The Event Logging System is a scalable, tamper-proof platform designed for distributed applications. It enables secure logging, querying, and real-time updates of system events, ensuring high performance and data integrity. This project is inspired by blockchain concepts and demonstrates proficiency in full-stack development with a focus on security, scalability, and real-time systems.


## Features
Core Functionality
🌟 RESTful API: Add and retrieve event logs.
🔗 Tamper-Proof Design: Cryptographic hashing to ensure data integrity (like a lightweight blockchain).
🕵️ Query and Pagination: Filter events by timestamp, type, and source with paginated results.
📊 Real-Time Updates: WebSocket implementation for live event streaming to clients.

## Backend Features
📦 MongoDB Sharding: Handle large datasets with horizontal scaling.
🔍 Advanced Querying: Flexible filtering based on multiple criteria.
🔒 Error Handling: Robust validation and error management.

## Frontend Features
🎨 Interactive Dashboard: Visualize logs and real-time updates.
📊 Dynamic Charts: See trends and inconsistencies in event chains.

## Bonus Features
🔁 Decentralization Simulation: Multi-server consistency with leader election for fault tolerance.
📈 Event Visualization: Detect tampering or inconsistencies in the hash chain.

## Technologies Used & Their Purpose

| Technology           | Purpose                                |
|-----------------------|----------------------------------------|
| Node.js & Express.js | Backend framework for API development  |
| MongoDB              | Database for scalable and distributed logging |
| WebSocket (ws)       | Real-time communication with clients   |
| Joi                  | Data validation for event logs         |
| Chart.js             | Data visualization on the dashboard    |
| Crypto (SHA-256)     | Tamper-proof data hashing              |
| React.js             | Frontend framework for interactive dashboards |


## Project Setup
1. git clone git remote add origin https://github.com/KAZI-AZAHAR-UDDIN/event-logging-system.git


2. Navigate to the project directory:
cd event-logging-system

3. Install dependencies:
npm install

4. Configure the .env file with the following:
PORT=3000
MONGO_URI=your_mongo_uri
WS_PORT=8080

5. Run the development server:
nodemon server.js


6. Start the WebSocket server:
node websocket/wsServer.js



## Key Highlights
Secure and tamper-proof event logging using cryptographic hashing.
MongoDB's scalability features, including sharding and indexing.
Real-time updates for live event streaming.


## Developer-Friendly Features
Clean and modular codebase with well-organized folder structure.
Integrated dashboard for interactive log monitoring and analysis.
Flexible querying options for debugging and operational monitoring.


## Author
**Kazi Azahar Uddin**  
*Full-Stack Developer | Open to work*  

- **GitHub**: [KAZI-AZAHAR-UDDIN](https://github.com/KAZI-AZAHAR-UDDIN)  
- **LinkedIn**: [Kazi Azahar Uddin](https://www.linkedin.com/in/kazi-azahar-uddin-8b879b205/)  

