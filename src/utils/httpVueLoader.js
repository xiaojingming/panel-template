import httpVueLoader from 'http-vue-loader';
import axios from 'axios';

httpVueLoader.httpRequest = function (url) {
  return axios.get(url).then(({ data }) => {
    let html = data.replace(/export\sdefault/, 'module.exports=');
    html = html.replace(/<panel>(([\s\S])*)<\/panel>/, (match, p1) => {
      return `<template>${p1}</template>`
    });
    return html;
  }).catch((err) => {
    throw Error(err);
  });
};
export default httpVueLoader;
