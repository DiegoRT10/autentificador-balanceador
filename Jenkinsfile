pipeline {
    agent any
    tools {
        nodejs "node"
    }
    stages {
        stage('install dependencias'){
            steps{
                bat 'npm install'
            }
        }
        stage('prueba unitaria'){
            steps{
                bat 'npm test'
            }
        }
   
       
    }
}