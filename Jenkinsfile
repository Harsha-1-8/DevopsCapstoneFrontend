pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo "Checking out code from GitHub"
                git branch: 'master', url: 'https://github.com/Harsha-1-8/DevopsCapstoneFrontend.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing project dependencies"
                sh 'npm install'
            }
        }

        stage('Build stage') {
            steps {
                echo "Building Angular project"
                sh 'npm run build --prod'
            }
        }

        stage('Archive Build') {
            steps {
                echo "Archiving build artifacts"
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed. Please check the logs."
        }
    }
}
