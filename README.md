# FT-TEST

<a href="https://ft-test.herokuapp.com">FT-TEST</a> is a JavaScript and Node.js app for displaying headlines from Financial Times.





<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Technologies">Technologies</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![ FT-TEST Screen Shot][product-screenshot]](./images/ScreenShot.png)

 This project show 10 headlines in every page.  


* There is a search box for user to search for headlines containing specific words.
* The App have paginiation and user are be able to click on Next or Previous buttons.

<p align="right">(<a href="#top">back to top</a>)</p>



### Technologies

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [HTML](https://html.com/)
* [CSS](https://www.codecademy.com/learn/learn-css)
* [JavaScript](https://javascript.info/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://svelte.dev/)
* [Express](https://expressjs.com/)
* [Handlebars](https://handlebarsjs.com/)
* [Jest](https://jestjs.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
 

### Installation

1. Get  FT APIs Key at [https://developer.ft.com/portal/services](https://developer.ft.com/portal/services)

2. Clone the repo
   ```sh
   git clone https://github.com/DibaKarimi/FT-TEST
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API URL in `.env`
   ```js
   const API_URL = 'ENTER YOUR API URL';
   ```
5. Enter your API KEY in `.env`
   ```js
   const API_KEY = 'ENTER YOUR API KEY';
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

After running the app in localhost, open 'localhost:3000'.
You will see headlines on the main part of the page and pagination bar at the bottom of the headlines.
It will show 15 headlines by default. Enter a specific words in search input box and then click on the search button,
it will show the headlines related to the search keyword. If there are more than 15 headlines,they are divided in pages,
you are be able change the page by clicking on the next or previous buttons.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Diba(somayeh) Karimi - Dibaakarimi@gmail.com

Project Link: [https://github.com/DibaKarimi/FT-TEST](https://github.com/DibaKarimi/FT-TEST)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
