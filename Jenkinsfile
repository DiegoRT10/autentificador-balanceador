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
        stage('Esperar 10 segundos a que levante la BD') {
            steps {
                sh 'sleep time: 10, unit: \'SECONDS\''
            }
        }
        stage('prueba unitaria'){
            steps{
                sh 'npm test'
            }
        }
   
       
    }
}