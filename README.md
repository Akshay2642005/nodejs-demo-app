# Node.js Demo App with CI/CD Pipeline

A simple Node.js REST API that is backed with a GitHub Actions CI/CD pipeline to build and deploy a Docker image to DockerHub.

---

## 🌐 Live Preview

🚀 **Deployed App**: [https://nodejs-demo-app.live](https://nodejs-demo-app.live)  
> Replace with your actual deployment link (Render, Railway, Fly.io, etc.)

---

## 🧪 REST API Endpoints

| Method | Route         | Description              |
|--------|---------------|--------------------------|
| GET    | `/tasks`      | List all tasks           |
| POST   | `/tasks`      | Add a new task           |
| PATCH  | `/tasks/:id`  | Mark task as completed   |

---

## 🧰 Tech Stack

- Node.js + Express
- Docker
- GitHub Actions (CI/CD)
- Postman / `curl` for API testing

---

## ⚙️ CI/CD Pipeline (GitHub Actions)

The app is configured with a GitHub Actions workflow to automate:

- ✅ Installing dependencies
- 🛠️ Running builds
- 🐳 Building Docker image
- 📤 Pushing to DockerHub

### 🔁 Trigger

- Runs on every push to the `main` branch

---

## 🐳 DockerHub Image

📦 [View Image on DockerHub](https://hub.docker.com/repository/docker/<your_username>/nodejs-demo-app/general)  
> Replace `<your_username>` with your DockerHub username

---

## 🚀 Run the App

### 🖥️ Locally with Node.js

```bash
git clone https://github.com/<your_username>/nodejs-demo-app.git
cd nodejs-demo-app

npm install
node index.js
