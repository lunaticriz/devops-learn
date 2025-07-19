pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/your-username/node-api.git'
      }
    }
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Docker Build & Run') {
      steps {
        sh 'docker-compose up -d --build'
      }
    }
  }
}
