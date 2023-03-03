pipeline {
    agent {
        label 'maven && docker && jdk17'
    }

    environment {
        DOCKER_TARGET = 'ghcr.io/e-learning-by-sse/nm-facade-service:latest'
        DEMO_SERVER = 'staging.sse.uni-hildesheim.de'
        DEMO_SERVER_USER = "elscha"
        REMOTE_UPDATE_SCRIPT = '/staging/update-compose-project.sh nm-competence-repository'
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
                    sh "mvn clean install spring-boot:build-image -Dspring-boot.build-image.imageName=${env.DOCKER_TARGET}"
                }
            }
        }
        
        stage('Publish Docker') {
            steps {
                script {
                    version = sh(
                            returnStdout: true,
                            script: 'mvn org.apache.maven.plugins:maven-help-plugin:3.2.0:evaluate -Dexpression=project.version -q -DforceStdout')
                        .trim()
                    image = docker.image("${env.DOCKER_TARGET}")
                    docker.withRegistry('https://ghcr.io', 'github-ssejenkins') {
                        image.push("${version}") // pom project version
                        image.push() // tagged version from name
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['STM-SSH-DEMO']) {
                    sh "ssh -o StrictHostKeyChecking=no -l elscha ${env.DEMO_SERVER}  ${REMOTE_UPDATE_SCRIPT}"
                }
            }
        }
    }
}
