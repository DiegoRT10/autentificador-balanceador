pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('install dependencias'){
            steps{
                sh 'npm install'
            }
        }
        stage('prueba unitaria'){
            steps{
                sh 'npm test --verbose'
            }
        }
   
       
    }
}