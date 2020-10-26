node {
  tool {
      jdk "jdk-1.8.101"
  }
  stage('SCM') {
    git 'https://github.com/tom-vanbraband-sonarsource/js-dummy-project.git'
  }
  stage('SonarQube analysis') {
    tool {
        jdk "jdk-1.8.101"
    }
    def scannerHome = tool '4.2.0';
    withSonarQubeEnv(installation: 'SonarCloud', credentialsId: 'customCredentialsId') {
      sh "${scannerHome}/bin/sonar-scanner -X"
    } // submitted SonarQube taskId is automatically attached to the pipeline context
  }
}
  
// No need to occupy a node
stage("Quality Gate"){
  timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
    def qg = waitForQualityGate(webhookSecretId: 'secret') // Reuse taskId previously collected by withSonarQubeEnv
    if (qg.status != 'OK') {
      error "Pipeline aborted due to quality gate failure: ${qg.status}"
    }
  }
}
