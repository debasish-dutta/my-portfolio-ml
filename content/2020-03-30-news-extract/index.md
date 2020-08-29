---
title: Extracting the top headlines from a news website
tags: [Python, Web Scrapping, projects]
date: 2020-03-30
path: projects/news-headline-extractor
cover: ./a.jpg
excerpt: My this project extracts the top news headlines onto a text file from a specific website.
---
So here I built a web scrapper using requets and Beautiful Soup libary. The request libary basically allows us to send/requests HTTPS automatically and super easily and Beautiful Soup libary parse the web page and search through the webpage for our needs. So I made this simple python script which scrapes a news website for the top headlines of the hour and store them into a text file with the timestamp. I pulled the headlines from the [India Today's](https://www.indiatoday.in/top-stories) website and these headlines change every hour.
So for the script I imported 4 libaries - `requests`, `bs4`, `datetime` for the timestamp and `os`. 
Then I simple used `request.get` and pulled the html page and then made `soup` with the BeadutifulSoup `html parser`.
![1]
For getting the specific headlines, I had to first inspect the website where I got the class name `catagory-listing` under which the headlines are posted. Then I simply pulled the headlines and a short description of the said headlines.
Then I had to check whether the file is empty or not for writing the headlines and then simply wrote the headlines along with the time stamp.

![2]

[2]: notepad.png
[1]: chrome.png