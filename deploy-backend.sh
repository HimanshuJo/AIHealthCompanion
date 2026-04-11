#!/bin/bash

echo "Pulling latest code..."
cd /var/www/AIHealthCompanion || exit
git pull

echo "Building backend..."
cd ai-health-backend || exit
mvn clean package -DskipTests

echo "Deploying..."
cp target/*.jar /opt/aihealth-backend/app.jar

echo "Restarting service..."
sudo systemctl restart aihealth

echo "Done 🚀"
