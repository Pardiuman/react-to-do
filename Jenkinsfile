pipeline {
    agent any
    stages{
        stage("first stage"){
            steps{
                sh 'echo "hello from master branch"'
            }
        }
	stage("second stage"){
	    steps{
		sh 'ehco from master branch but second stage'
	    }
	}
    }
}
