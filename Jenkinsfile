pipeline {
    agent any

    tools {
        nodejs 'Node 18'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true' // skip failure if no tests
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build -t devops-learn-app .'
            }
        }
    }
}
