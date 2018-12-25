# React-Redux-Boilerplate

## Setup

npm install

There are 2 index_xxx.js files under src. One is for a react application and the other is for a react-redux application. Pick which one you want to use and rename it to index.js.

All the necessary modules for either application type should be in the package.json file.

This is a work in progress. Hot module replacement and live loading is working in the development configuration of webpack. I have yet to include a production configuration, though.

## Background

I have borrowed techniques and ideas from a few articles that I have read which have helped me a lot, and which are listed below:


[How to build your own React boilerplate with webpack 4 & Babel 7 by Seth Alexander](https://medium.com/@sethalexander/how-to-build-your-own-react-boilerplate-1a97d09337fd)

**Note:** I started out using his config file as a template but have many modifications to it since.

I have added hot module replacement and live loading. In addtion I added support for files and images in webpack. There is also, now a production configuration which is pretty bare as webpack's defaults seem to be pretty good. The webpack config is broken down into separate modules which is a technique that I kind of like and learned from an inexpensive kindle book: "SurviveJS Webpack From Apprentice to Master" by Juo Vepsäläinen.

[Getting Started with Redux by David Abramov](https://egghead.io/courses/getting-started-with-redux)

[Redux Step by Step: A simple and Robust Workflow for Real Life Apps by Tal Kol](https://hackernoon.com/redux-step-by-step-a-simple-and-robust-workflow-for-real-life-apps-1fdf7df46092).
The diagram below is from Tal's hackernoon article. I have included the diagram because it is very helpful to have it available for someone(me) who is new to redux.

I have also liberally copied his directory structure for my use and it is represented in this boilerplate. As time goes along, I might modify it somewhat, but for now it makes tremendous sense.

<hr />

<img src="https://cdn-images-1.medium.com/max/1000/1*9kbmrgH8voxp_rx25LPqIw.png"
alt="react-redux-flow" />

**Rule: Smart components are not allowed to have any logic except dispatching actions.**

**Rule: Services must be completely stateless.**

**Rule: Smart components should always access state through selectors.**
