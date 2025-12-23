pipeline {
  agent any

  tools {
    nodejs "node22"
  }

  stages {

    /* -------------------------------
       CHECKOUT
    --------------------------------*/
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    /* -------------------------------
       INSTALL & BUILD FRONTEND
    --------------------------------*/
    stage('Install Frontend') {
      steps {
        sh '''
          echo "📦 Installing dependencies..."
          npm install --silent

          echo "🏗 Building Vite frontend..."
          npm run build
        '''
      }
    }

    /* -------------------------------
       SANITY TEST
    --------------------------------*/
    stage('Sanity Test') {
      steps {
        sh '''
          echo "🔍 Verifying build..."
          if [ ! -d "dist" ]; then
            echo "❌ dist folder not found!"
            exit 1
          fi
          echo "✅ Build verified"
        '''
      }
    }

    /* -------------------------------
       DEPLOY
    --------------------------------*/
    stage('Deploy') {
      steps {
        dir('cicd') {
          sh '''
            chmod +x deploy.sh
            ./deploy.sh
          '''
        }
      }
    }
  }

  post {
    success {
      echo "🎉 Frontend deployed successfully!"
    }
    failure {
      echo "❌ Pipeline failed!"
    }
  }
}
