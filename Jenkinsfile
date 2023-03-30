pipeline {
    agent any

    tools {nodejs "NodeJS 18.12"}

	environment {
        DEMO_SERVER = 'staging.sse.uni-hildesheim.de'
        DEMO_SERVER_USER = "elscha"
        
        dockerImage = ''
        REMOTE_UPDATE_SCRIPT = '/staging/update-compose-project.sh nm-competence-repository'
    }
	
    stages {

        stage('Git') {
            steps {
                cleanWs()
                git branch: 'main', url: 'https://github.com/e-Learning-by-SSE/nm-facade-service.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'mv docker/Dockerfile Dockerfile'
                script {
                    // Based on:
                    // - https://e.printstacktrace.blog/jenkins-pipeline-environment-variables-the-definitive-guide/
                    // - https://stackoverflow.com/a/16817748
                    // - https://stackoverflow.com/a/51991389
                    env.API_VERSION = sh(returnStdout: true, script: 'grep -Po "(?<=  \\"version\\": \\").*(?=\\",)" package.json').trim()
                    echo "API: ${env.API_VERSION}"
                    dockerImage = docker.build 'e-learning-by-sse/nm-facade-service'
                    docker.withRegistry('https://ghcr.io', 'github-ssejenkins') {
                        dockerImage.push("${env.API_VERSION}")
                        dockerImage.push('latest')
                    }
                }
            }
        }

        // Based on: https://medium.com/@mosheezderman/c51581cc783c
        stage('Deploy') {
            steps {
                sshagent(['STM-SSH-DEMO']) {
                    sh "ssh -o StrictHostKeyChecking=no -l ${DEMO_SERVER_USER} ${env.DEMO_SERVER} bash ${REMOTE_UPDATE_SCRIPT}"
                }
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint:ci'
            }
        }
    }
}
