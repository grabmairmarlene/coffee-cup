# Setup
## Local Development
1. Install dependencies
    ```cli
    composer install
    ```
1. Install theme dependencies
    ```cli
    cd web/app/themes/coffee-cup
    composer install
    npm install
    ```
1. Build theme resources
    ```cli
   npm run start
    ```
1. Create .env file
1. Orchestrate containers
    ```cli
    docker-compose up
    ```
