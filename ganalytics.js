GAnalytics = {}

GAnalytics.pageview = function(pageLocation) {};
GAnalytics.event = function(category, action, label, value) {};

load = function(i,s,o,g,r,a,m) {
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r] || function(){
    (i[r].q=i[r].q||[]).push(arguments)}
  ,i[r].l=1*new Date();
    a=s.createElement(o), m=s.getElementsByTagName(o)[0];
    a.async=1;
    a.src=g;
    m.parentNode.insertBefore(a,m)
};

if(typeof AppConfig !== "undefined" && typeof AppConfig.GANALYTICS !== "undefined") {

  load(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', AppConfig.GANALYTICS, 'auto');

  GAnalytics.pageview = function(pageLocation) {
    if(!pageLocation) {
      pageLocation = window.location.pathname;
    }
    ga('send', 'pageview', pageLocation);
  }

  GAnalytics.event = function(category, action, label, value) {
    ga('send', 'event', category, action, label, value);
  }
} else {
  console.log("google analytics account has not been set");
}
