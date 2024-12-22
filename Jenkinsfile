pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'phamminhthao/asmdevops-taskmanager:be'
        FRONTEND_IMAGE = 'phamminhthao/asmdevops-taskmanager:fe'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Trunks-Pham/asmdevops-taskmanager.git'
            }
        }

        stage('Check Docker Version') {
            steps {
                sh 'docker --version'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                script {
                    dir('backend') {
                        sh """docker build -t ${BACKEND_IMAGE} ."""
                    }
                }
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                script {
                    dir('frontend') {
                        sh """docker build -t ${FRONTEND_IMAGE} ."""
                    }
                }
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Push Backend to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        sh """docker push ${BACKEND_IMAGE}"""
                    }
                }
            }
        }

        stage('Push Frontend to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        sh """docker push ${FRONTEND_IMAGE}"""
                    }
                }
            }
        }

        stage('Deploy Backend to DEV') {
            steps {
                echo 'Deploying Backend to DEV...'
                script {
                    sh """docker image pull ${BACKEND_IMAGE} || echo 'Failed to pull backend image'"""
                    sh """docker container stop golang-jenkins || echo 'this container does not exist'"""
                    sh """docker network create dev || echo 'this network exists'"""
                    sh """echo y | docker container prune"""
                    sh """docker container run -d --rm --name server-golang -p 4000:3000 --network dev ${BACKEND_IMAGE}"""
                }
            }
        }

        stage('Deploy Frontend to DEV') {
            steps {
                echo 'Deploying Frontend to DEV...'
                script {
                    sh """docker image pull ${FRONTEND_IMAGE} || echo 'Failed to pull frontend image'"""
                    sh """docker container stop react-jenkins || echo 'this container does not exist'"""
                    sh """docker network create dev || echo 'this network exists'"""
                    sh """echo y | docker container prune"""
                    sh """docker container run -d --rm --name server-react -p 3000:3000 --network dev ${FRONTEND_IMAGE}"""
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }

        success {
            sendTelegramMessage("✅ Build #${BUILD_NUMBER} was successful and deployed successfully! ✅")
        }

        failure {
            sendTelegramMessage("❌ Build #${BUILD_NUMBER} failed. ❌")
        }
    }
}

def sendTelegramMessage(String message = "") {
    if (message.isEmpty()) {
        error "Message cannot be empty"
    }
    def apiToken = "7046314210:AAGqYso31LSx8_kzYpIOcjryCMPqfiztxnE"
    def chatId = "-1002415710063"
    def curlCmd = """curl -s -X POST https://api.telegram.org/bot${apiToken}/sendMessage -d chat_id=${chatId} -d text="${message}""""
    sh curlCmd
}