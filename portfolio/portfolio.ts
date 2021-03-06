import { IPortfolioItem } from "../interfaces/interfaces"
import { Languages } from "../context/portfolioContext"
  
export const items = {
    ClassicGames: {
        title: 'Classic Games',
        language: [Languages.React, Languages.TypeScript, Languages.NextJS],
        link: 'https://classics-next.joonajo.now.sh',
        githubLink: 'https://github.com/joonajo/classics-next',
        description: "Built with React + TypeScript + NextJS. A web app with all-time classic games Minesweeper and Snake (Tetris WIP). Own leaderboard for each game and each difficulty, stored in a Firebase database.",
        video_src: '/videos/classics.mp4',
        gif_src: '/gifs/classics.gif',
        desktop: true,
        mobile: false,
    },
    NasaHub: { 
        title: 'Nasa Portal',
        language: [Languages.React, Languages.TypeScript, Languages.NextJS],
        link: 'https://nasa-portal.now.sh',
        githubLink: 'https://github.com/joonajo/nasa-portal',
        description: 'Built with React + TypeScript + Redux + NextJS. Utilizes open NASA APIs. Check out the Astronomy Picture of the Day (APOD), latest Mars rover images as well as Earth from the space with the EPIC API. PWA & Lighthouse optimized.',
        video_src: '/videos/nasahub.mp4',
        gif_src: '/gifs/nasahub.gif',
        desktop: true,
        mobile: true,
    },
    WeatherApp: {
        title: 'Weather App',
        language: [Languages.React, Languages.TypeScript],
        link: 'https://weatherr.web.app',
        githubLink: 'https://github.com/joonajo/Weather-app',
        description: 'Built with React + TypeScript + Redux. Utilizes three different APIs (OpenWeatherMap, TimezoneDB & Geonames) to seamlessly check the weather all over the world, with timezones adjusted accordingly.',
        video_src: '/videos/weather.mp4',
        gif_src: '/gifs/weatherapp.gif',
        desktop: true,
        mobile: true,
    },
    BurgerBuilder: {
        title: 'Burger Builder',
        language: [Languages.React, Languages.JavaScript],
        link: 'https://react-burgerapp-d2ef8.web.app',
        githubLink: 'https://github.com/joonajo/Burger-Builder',
        description: 'Built with ReactJS + Redux. Utilizes Firebase account authorization and realtime database. Build your own burger and order it!',
        video_src: '/videos/burger.mp4',
        gif_src: '/gifs/burgerbuilder.gif',
        desktop: true,
        mobile: true,
    },
    TodoList: {
        title: 'To-Do List',
        language: [Languages.React, Languages.TypeScript],
        link: 'https://todo-reactts.web.app',
        githubLink: 'https://github.com/joonajo/Todo-ReactTS',
        description: 'Built with React + TypeScript. Utilizes Firebase Cloud database (Firestore) and account authorization. Make a todo-list, check/remove items, and keep it saved in the database!',
        video_src: '/videos/todo.mp4',
        gif_src: '/gifs/todo.gif',
        desktop: true,
        mobile: true,
    },
    CannonGame: {
        title: 'Cannon Game',
        language: [Languages.Cpp],
        link: 'https://www.youtube.com/watch?v=6rbhqyCm97E',
        githubLink: 'https://github.com/joonajo/CannonGame',
        description: 'Built purely with C++ and the SFML graphics library. A simple Cannon Game against a basic AI.',
        video_src: 'https://media.giphy.com/media/ftB8xRdaDJHzk2v6Ur/giphy.gif',
        gif_src: '/gifs/cannongame.gif',
        desktop: true,
        mobile: false,
    }
}
  
// makes it easy to switch up the order if needed
export const portfolioItems: IPortfolioItem[] = [
    items.ClassicGames,
    items.NasaHub,
    items.WeatherApp,
    items.TodoList,
    items.BurgerBuilder,
    items.CannonGame
]