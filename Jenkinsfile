node {
  stage('SCM') {
    git 'https://github.com/tom-vanbraband-sonarsource/js-dummy-project.git'
  }
  stage('SonarQube analysis') {
    withSonarQubeEnv('SonarCloud') {
      sh "${scannerHome}/bin/sonar-scanner"
    } // submitted SonarQube taskId is automatically attached to the pipeline context
  }
}
  
// No need to occupy a node
stage("Quality Gate"){
  timeout(time: 1, unit: 'HOURS') { // Just in case something goes wrong, pipeline will be killed after a timeout
    def qg = waitForQualityGate() // Reuse taskId previously collected by withSonarQubeEnv
    if (qg.status != 'OK') {
      error "Pipeline aborted due to quality gate failure: ${qg.status}"
    }
  }
}