# Training Scheduler - app for generating schedules using OpenAPI

## Installation

After cloning repository you have to do following actions:

1. Move to project folder (by default its name should be 'trainings-scheduler')
2. Execute command `yarn` in your terminal (it will download required dependencies)
3. Create your OpenAI API key on <https://platform.openai.com/api-keys>
4. Create .env file like .env.example. You should change values of environment variables in this file
5. Download postgresql and pgadmin, leave default settings while installation
6. Run command `yarn start:dev` from package.json
7. Now fetch <http://localhost:3001/trainings> (or other address defined by you in .env) with JSON body for example

```json
{
  "prompt": "Create full body workout with duration max 1 hour for novice"
}
```

8. If you configured your project correctly, you should get JSON array with exercises

---

## About project

In this project I used OpenAPI with GPT-4o, TypeORM with PostgreSQL and other packages from <https://npmjs.org>

Good luck and have fun!  
**_Piotr Bukowiec_**
