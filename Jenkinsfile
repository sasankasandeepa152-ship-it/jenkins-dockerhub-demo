pipeline {
    agent any

    environment {
        IMAGE_NAME = 'sasanka19/myapp'
        IMAGE_TAG = "${env.BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
                }
            }
        }

        stage('Test Image') {
            steps {
                bat "docker run --rm ${IMAGE_NAME}:${IMAGE_TAG} npm test"
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry(
                        'https://index.docker.io/v1/',
                        'dockerhub-credentials'
                    ) {
                        docker.image(
                            "${IMAGE_NAME}:${IMAGE_TAG}"
                        ).push()

                        docker.image(
                            "${IMAGE_NAME}:${IMAGE_TAG}"
                        ).push('latest')
                    }
                }
            }
        }
    }
}