# Weather App

Weather App (SPA) project is created as part of development challenge at PwC. The project is developed with the Angular 8, Typescript, Twitter Bootstrap v4.3, OMCSS framework (SCSS), Google Fonts, Font Awesome. 

Some of the salient features of the project are RxJS, HttpClient (API Service), Routes and Route Params, Databinding, Interpolation, Data Models, Template Driven Forms, Validation and Sanitization, Test Driven Development, WAI-ARIA and Component Based Architecture.

![Dashboard](https://github.com/alimansoor/weather-app/blob/master/Dashboard.png)

## Getting Started

Weather App is a free project that will provide users with an overview of weather for different locations. It also provides users with weather forecast of the entire week. User will have the option to switch temperature unit from celsius to fahrenheit. User can also select and view weather for different locations. 

You can download the project from the below options available:

* [Download Weather App](https://github.com/alimansoor/weather-app/archive/master.zip)
* Clone the repo: `https://github.com/alimansoor/weather-app.git`
* Install with npm: `npm install`

### Prerequisites

[Node.js](https://nodejs.org/en/) use to run the application and manages application's dependencies using npm. It also serves as the run-time environment.

[Angular CLI](https://angular.io/) is required to run the application.

### Project Architecture 

```
app/
├── common/ 
│   ├── footer
│   ├── header
│   └── page-not-found
│   
├── weather/ 
│   ├── dashboard
│   ├── forecast
│   ├── outline (Weather Profile)
│   └── search (Search Weather Component)
│   
└── app.component

```

## Deployment

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
ng serve
```

You can also run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

```
ng build --prod
```

## Documentation

Weather App is a free project that will provide users with an overview of weather for different locations. It also provides users with weather forecast of the entire week. User will have the option to switch temperature unit from celsius to fahrenheit. User can also select and view weather for different locations. 

### Project Overview

Below are major pages/components of the application:

* **Dashboard**
is the main section `http://localhost:4200/dashboard` of the application which provides users with weather profile, weather forecasts, search and switch temperature. User can view detail profile of the selected weather from the week's forecast.

* **Search**
is used to allow user to enter location of their choice and view the weather forcast. User can navigate to search page `http://localhost:4200/search` from the main dashboard. It is build with Template Driven Forms.

* **Page Not Found**
is the page `http://localhost:4200/xyz` which appears when the server returns a 404 response.

### API

Weather App started with MetaWeather `https://www.metaweather.com/api/` API. However, in the middle of development, it was found that the API doesn't allow CORS and I have to copy over some of the data from the MetaWeather API to `assets/data/`. However, the project uses the same concept of service with HttpClient with RxJS to fetch to data as used with an external API.  

At present moment, we have stored the data for Melbourne, London and Sydney.


### Naming Convention

Business Logic is written with camel case naming convention. `setTemperature`, `getWeather` etc.

HTML and SCSS follows Kebab case naming convention. `.txt-white`, `.nav-item` etc.

Please note that above convention is not mandatory. It will facilitate developers to write consistent and future-proof code. However you are free to use any convention of your choice.

### TODO

- Use GeoLocation to get current location coordinates
- Use LocalStorage to save favourite locations
- Create notification mechanism
- Optimizing Crawling for Angular (SEO) friendly
- Progressive Web App



## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Creator

**Muhammad Ali Mansoor**

- <https://www.linkedin.com/in/muhammad-mansoor-70857239/>
- <https://github.com/alimansoor>

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* OMCSS <https://www.npmjs.com/package/omcss>
* MetaWeather <https://www.metaweather.com/>