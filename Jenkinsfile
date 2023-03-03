@Library('web-service-helper-lib') _
pipeline {
    agent {
        label 'maven && docker && jdk17'
    }

    environment {
        DOCKER_TARGET = 'ghcr.io/e-learning-by-sse/nm-facade-service:latest'
    }

    stages {

        stage('Git') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/e-Learning-by-SSE/nm-facade-service.git'
            }
        }
        
        stage('Maven') {
            steps {
                withMaven(mavenSettingsConfig: 'mvn-elearn-repo-settings') {
                    sh "mvn clean verify spring-boot:build-image -Dspring-boot.build-image.imageName=${env.DOCKER_TARGET}"
                }
                script {
                    version = getMvnProjectVersion()
                    generateSwaggerClient('target/openapi.json', version, 'net.ssehub', 'nm-facade-service', ['javascript'])
                }
            }
        }
        
        stage('Publish Docker') {
            steps {
                script {
                    version = getMvnProjectVersion()
                    publishDockerImages("${DOCKER_TARGET}", ["${version}"])
                }
            }
        }

        stage('Deploy') {
            steps {
                stagingDeploy('/staging/update-compose-project.sh nm-facade-service')
            }
        }
    }
}
