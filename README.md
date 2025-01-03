# 📝 **Task Manager Application**

## 📚 **Introduction**

The **Task Manager App** is a user-friendly task management application that offers comprehensive **CRUD** (Create, Read, Update, Delete) functionalities. The application is developed using:

- **Backend:** Golang (Gin Framework)  
- **Frontend:** React.js  
- **Database:** SQLite  
- **Containerization:** Docker & Docker Compose for seamless deployment  

---

## 🚀 **Key Features**

- 📋 **View Task List:** Display all tasks efficiently.  
- ➕ **Add New Task:** Create and add tasks seamlessly.  
- ✏️ **Edit Tasks:** Modify task details with ease.  
- 🗑️ **Delete Tasks:** Remove tasks from the list.  
- ✅ **Mark Task as Complete:** Track task completion status.  

---

## 🛠️ **Project Structure**

```plaintext
task-manager/
├── backend/          # Golang Backend
│   ├── main.go       # Backend entry point
│   ├── go.mod        # Dependency management
│   ├── Dockerfile    # Backend Docker configuration
│   ├── database/
│   │   └── database.go # Database setup
│   ├── handlers/     # API request handlers
│   ├── models/       # Database models
│   ├── routes/       # API route definitions
│
├── frontend/         # React Frontend
│   ├── src/
│   │   ├── api.js    # API communication logic
│   │   ├── App.js    # Core application component
│   │   ├── index.js  # Frontend entry point
│   ├── package.json  # Frontend dependencies
│   ├── Dockerfile    # Frontend Docker configuration
│
└── docker-compose.yml # Docker Compose orchestration
```

---

## 🚀 **Jenkinsfile – Key Highlights**

1. **Environment Variables:**  
   - Defined `BACKEND_IMAGE` and `FRONTEND_IMAGE` for Docker image names.  

2. **Pipeline Stages:**  
   - **Clone Repository:** Fetch source code from the `main` branch.  
   - **Build Docker Images:** Build images for both backend and frontend.  
   - **Push Docker Images:** Push Docker images to Docker Hub.  
   - **Deploy to DEV:** Deploy backend and frontend services in the development environment.  

3. **Testing Integration:**  
   - Execute a dedicated `Run Tests` stage for quality assurance.  

4. **Container & Network Management:**  
   - Create a Docker network (`dev`) if absent.  
   - Restart backend and frontend containers as needed.  

5. **Build Notifications:**  
   - Utilize Telegram API for real-time build status notifications.  

6. **Workspace Cleanup:**  
   - Ensure a clean workspace after every pipeline run (`cleanWs`).  

---

## 🚀 **CI/CD Pipeline Overview**  

![CI/CD Pipeline](CICDpipeline.jpg)

---

## 📡 **Telegram Notification Integration**

- Instant notifications for successful or failed builds via Telegram API.  
- Automated alerts ensure the development team stays informed about pipeline status.  

---

## 💻 **How to Run the Project**

### 🐳 **1. Run with Docker Compose**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Trunks-Pham/asm-devops-taskmanager.git
   cd task-manager
   ```

2. **Start services using Docker Compose:**
   ```bash
   docker-compose up --build
   ```

3. **Access the application:**
   - **Backend:** [http://localhost:4000](http://localhost:4000)  
   - **Frontend:** [http://localhost:3000](http://localhost:3000)  

---

### 🛠️ **2. Run Backend and Frontend Manually**

#### ✅ **Start Backend:**
```bash
cd backend
go run main.go
```
- API will be available at: [http://localhost:4000](http://localhost:4000)  

#### ✅ **Start Frontend:**
```bash
cd frontend
npm install
npm start
```
- Frontend will be available at: [http://localhost:3000](http://localhost:3000)  

---

## 📦 **API Endpoints**

| **Method** | **Endpoint**  | **Description**       |
|------------|--------------|-----------------------|
| **GET**    | `/tasks`     | Retrieve all tasks    |
| **POST**   | `/tasks`     | Create a new task     |
| **PUT**    | `/tasks/:id` | Update an existing task |
| **DELETE** | `/tasks/:id` | Remove a task         |

---

## 🛡️ **Security Measures**

- **Environment Variables:** Sensitive credentials are securely managed.  
- **Authentication & Authorization:** Easily extendable for role-based access.  
- **Data Validation:** Input data is rigorously validated.  

---

## 📞 **Contact Information**

- **Author:** Phạm Minh Thảo  
- **Email:** minhthaopham230104@gmail.com  
- **GitHub:** [github.com/Trunks-Pham](https://github.com/Trunks-Pham)  