# Weather App

Weather App SPA project is created as part of development challenge at PwC. The project is developed with the Angular 8, Typescript, Twitter Bootstrap v4.3, OMCSS framework (SCSS), Google Fonts, Font Awesome. 

Some of the salient features of the project includes RxJS, HttpClient (API Service), Routes and Route Params, Databinding, Interpolation, Concept of Models, Template Driven Forms, Validation and Sanitization, TDD, WAI-ARIA and Component Based Architecture.

## Getting Started

Weather App is a free project that will provide users with an overview of weather for different locations. It also provides users with weather forecast of the entire week. User will have the option to switch temperature unit from celsius to fahrenheit. User can also select and view weather for different locations. 

Below are major pages/components of the application:

* **Dashboard**
Dashboard is the main section of the application which provides users with weather profile, weather forecasts, search and switch temperature. User can view detail profile of the selected weather from the week's forecast.

* **Search**

* **Page Not Found**

You can download the project from the below options available:

* [Download Weather App](https://github.com/alimansoor/weather-app/archive/master.zip)
* Clone the repo: `https://github.com/alimansoor/weather-app.git`
* Install with npm: `npm install`

### Prerequisites

[Node.js](https://nodejs.org/en/) use to run the application and manages application's dependencies using npm. It also serves as the run-time environment.

[Angular CLI](https://angular.io/) is required to run the application.

### Component Structure 

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

OMCSS is an approach that will help designers and developers write code that will be future-clean and scalable at the same time. OMCSS' file structure helps developer organise their stylesheets in a manner that produces understandable and clean css structure that is easy to organise and maintain - OMCSS

### OMCSS File Structure

OMCSS is a modular approach that helps you arrange your css into `theme`, `pages`, `layouts` and `modules`. Along with these, it also provide helper folders i.e. `base`, `utils` and `vendors` to organise your helper css files.

Below is a complete description of OMCSS file structure:

* **Base**
Base contains css styles on base content such as reset, grid, typography etc.

* **Themes**
Themes contains css styles for your application themes such as primary, secondary, default, dashboard etc.

* **Pages**
Pages contains css styles for your individual pages such as home, about-us, contact etc.

* **Layouts**
Layouts contains css style for main application components such as header, footer, sidebar etc.  

* **Modules**
Modules contains css style for re-usable application ui components such as carousel, navigation, breadcrumb, card etc.

* **Utils**
Modules contains utility styles such as mixins, functions, variables etc.

* **Vendors**
Vendor contains third-party css libraries and frameworks such as jquery-ui, bootstrap, foundation etc.

* **Shame**
Shame contains css styles that you are shame about or you have written as an urgent request and will soon change it and write proper code. Its wise to write messy css for any of the above styles over here.

### Naming Convention

OMCSS follows Kebab case naming convention in its core e.g. `.txt-white`, `.nav-item` etc.

For components that contains sub-classes, OMCSS encourages `_underscore` naming convention which add an underscore as it goes within the tree:

```
.parent {
  ._child {
    .__sub-child {
      ...
    }
  }
}
```

Please note that above convention is not mandatory. It will facilitate developers to write consistent and future-proof code. However you are free to use any convention of your choice.


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