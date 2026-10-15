pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code checked out'
            }
        }

        stage('Environment Check') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'git --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm test'
            }
        }

        stage('Unit Tests') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'CI PASSED: Ready for the next stage.'
        }

        failure {
            echo 'CI FAILED: Inspect the stage logs.'
        }

        always {
            echo 'CI pipeline finished.'
        }
    }
}