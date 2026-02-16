pipeline {
    agent any

        options {
        timestamps()
    }

    environment {
        APP_NAME = "node-api"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

       stage('Parallel Quality Checks') {
            parallel {

                stage('Lint') {
                    steps {
                        sh 'npm run lint || true'
                    }
                }

                stage('Unit Tests') {
                    steps {
                        sh 'npm test || true'
                    }
                }
            }
        }
    }
    
    post {
        success {
            echo "✅ ${env.APP_NAME} build successful"
        }
        failure {
            echo "❌ ${env.APP_NAME} build failed"
        }
        always {
            cleanWs()
        }
    }

 }

