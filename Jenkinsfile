pipeline {
  agent any
  stages {
    stage('server') {
      parallel {
        stage('server') {
          steps {
            sh 'cd server && docker build -t mynodeapp . && docker run -d -p 7001:7001 mynodeapp'
          }
        }
        stage('frontend') {
          steps {
            sh 'cd frontend && docker build -t myfront . && docker run -d -p 4000:4000 myfront'
          }
        }
      }
    }
  }
}