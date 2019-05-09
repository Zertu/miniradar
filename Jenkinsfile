pipeline {
  agent any
  stages {
    stage('server') {
      steps {
        sh '''cd server
docker run -d -p 7001:8888'''
      }
    }
  }
}