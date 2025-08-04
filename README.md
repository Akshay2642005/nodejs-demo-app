# Node.js Demo App with CI/CD Pipeline

A simple Node.js REST API that that is backed with a github action CI/CD pipeline to build and deploy a Docker image to DockerHub.

## Endpoints
- `GET /tasks` → List tasks
- `POST /tasks` → Add task
- `PATCH /tasks/:id` → Mark task done

## Tech Stack
- Node.js + Express
- Docker
- GitHub Actions for CI/CD

## CI/CD Workflow
- Trigger: Push to `main`
- Jobs:
  - Install dependencies
  - Build Docker image
  - Push to DockerHub

## DockerHub Image
Image will be available at:
`docker.io/<your-username>/nodejs-demo-app`

