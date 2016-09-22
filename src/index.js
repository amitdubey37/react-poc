import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var libraries = [

    {name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    {name: 'AngularJS', url: 'https://angularjs.org/'},
    {name: 'jQuery', url: 'http://jquery.com/'},
    {name: 'Prototype', url: 'http://www.prototypejs.org/'},
    {name: 'React', url: 'http://facebook.github.io/react/'},
    {name: 'Ember', url: 'http://emberjs.com/'},
    {name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    {name: 'Dojo', url: 'http://dojotoolkit.org/'},
    {name: 'Gradle', url: 'http://gradle.org/'},
    {name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    {name: 'Lodash', url: 'http://lodash.com/'},
    {name: 'Moment', url: 'http://momentjs.com/'},
    {name: 'Express', url: 'http://expressjs.com/'},
    {name: 'Grails', url: 'http://grails.org/'}

];
ReactDOM.render(
    <App items={libraries} />,
    document.getElementById('app')
);
