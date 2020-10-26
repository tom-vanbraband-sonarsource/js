pipeline {
    agent any
    tools {
        jdk "jdk-1.8.101"
    }
    stages {
        stage('SCM') {
            steps {
                git 'https://github.com/tom-vanbraband-sonarsource/js-dummy-project.git'
            }
        }
        stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'SonarQubeScanner'
            }
            steps {
                withSonarQubeEnv(installation: 'SonarCloud', credentialsId: 'customCredentialsId') {
                    sh "${scannerHome}/bin/sonar-scanner -X"
                } // submitted SonarQube taskId is automatically attached to the pipeline context
            }
        }
    }
}
