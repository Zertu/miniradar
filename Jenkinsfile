pipeline {
  agent any
  stages {
    stage('server') {
      steps {
        sh 'cd server && docker build -t mynodeapp . && docker run -d -p -t 7001:7001 mynodeapp'
      }
    }
  }
}
