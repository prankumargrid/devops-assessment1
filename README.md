# devops-assessment1
Docker containerization for Node.js and MongoDB

Task : To make containers for Node.js applications and MongoDB to receive the user details and storing it in a MongoDB database. The data returned should be in json format and the stored data should be persistent.

Solution : 

Made two directories : "sender" and "viewer". Each having its own node.js and Dockerfiles.
Made a docker compose file to connect the components together and create volume for persistent storage.

Commands Used :

For running the application : docker-compose up --build 

To enter data : curl -X POST http://localhost:3001/add -H "Content-Type: application/json" -d '{"name":"Alice", "age":25}'

To view data : curl http://localhost:3002/users

Screenshots :

Adding Data :

<img width="1119" alt="Screenshot 2025-06-10 at 5 21 36 PM" src="https://github.com/user-attachments/assets/a8b90c73-71b0-4ee4-97e2-606b03dcfcf7" />

Viewing Data:

<img width="1231" alt="Screenshot 2025-06-10 at 5 23 01 PM" src="https://github.com/user-attachments/assets/fdf74204-6fdf-4944-9f32-4488eda035d9" />
