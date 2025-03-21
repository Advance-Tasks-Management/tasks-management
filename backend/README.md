# tasks-management

Setup Instructions

**1. Pull the Repository**
_First, pull the repository from GitHub using the following command:

git pull https://github.com/Advance-Tasks-Management/tasks-management.git
_

**2. Copy .env.example to .env**
_Next, copy the .env.example file to .env to set up your environment variables:

cp .env.example .env
_

**3. Install Dependencies for All Services**
_To install dependencies for all services, you can run the following command to iterate through each service:

for service in $(ls services); do cd $service && npm install && cd ..; done_


**4. Start Docker Containers**

_Once dependencies are installed, bring up the services with Docker Compose:
docker-compose up -d

To stop and remove the containers, use:
docker-compose down

To rebuild the containers and restart them, use:
docker-compose up --build -d_
