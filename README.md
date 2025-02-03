# How to use this template
New GitHub repos can be created directly from this template. Just click "New Repo" and select this template. When cloning, make sure to check "Include all branches" if you plan on using the Pina or Inertia branches.

Once you have your new repo, you can apply different branches to your master branch to get the desired configuration.

For example, if you want a project with Inertia, you could run `git merge inertia` from your master branch, applying the Inertia template code to your project.

# Laravel with Vue Template

This is a pre-made template for a Laravel/Vue application. The purpose of this template is to provide developers a springboard to begin from when starting a new project. It's already setup to use our general use cases.
### Tech Stack
- Laravel 11
- Vue.js 3.x
- Tailwind CSS
- FlowBite (CSS Component Library)
- Laravel Sail (for containerization during development)

## Installing with Docker (recommended)
Docker makes it easy to obtain the required environment without much configuration. If you're using Windows and have Docker setup for a WSL integration (default) then you'll need to make sure the repo is cloned to your WSL filesystem. Otherwise, performance will suffer.

1. Clone the repo
2. Copy the `.env.example` file to `.env`. Replace the example values to real values in your new `.env` file
3. Setup a WSL ubuntu instance if you don't have one already and are running Windows
4. Install Docker Desktop
5. Run the following command to install the Composer dependencies
```
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/opt \
-w /opt \
laravelsail/php82-composer:latest \
composer install --ignore-platform-reqs
```
6. Add the following alias to your bash profile
   `alias sail='[ -f sail ] && bash sail || bash vendor/bin/sail'`
7. Build the docker image `sail build`
8. Start the Docker container with `sail up -d`
9. Run database migrations `sail artisan migrate`
10. Install npm dependancies with `sail npm install`

### Running the application
Use these steps to run the application after it's been installed. Make sure you're running these commands while in the project directory. You will have to open 2 different terminals, one for each command.

```
sail up -d
```

### Accessing the application
Once you've started the docker containers with the above commands, you can access the application at http://localhost. 
