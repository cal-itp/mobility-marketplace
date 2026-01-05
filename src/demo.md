---
layout: demo

title: demo (latest)
description: >
  A page to view individual layout components as they are completed
---

<div class="container">
  <h2>Pull quote</h2>
  <h3>Attributed with default color scheme (yellow)</h3>
</div>

{% assign quote_content = "I really appreciate Cal-ITP filling this role of keeping these things moving. It’s a type of support I’m constantly requesting in all sorts of different spaces (like implementation of regional goals, etc.). It's really helpful, particularly on these types of projects that directly improve passenger experience. <strong>At the end of the day passenger experience matters the most.</strong>" %}
{% assign quote_source_name = "Jerome Qiriazi" %}
{% assign quote_source_title = "Transit Planner, Humboldt Transit Authority" %}
{% include pull-quote.html color_scheme=quote_color_scheme content=quote_content source_name=quote_source_name source_title=quote_source_title %}

<div class="container">
  <h3>Unattributed with color scheme: purple</h3>
</div>

{% assign quote_color_scheme = "purple" %}
{% assign quote_content = "Whether enabling passengers to see the live location of a bus or train on their phone or tap to pay their fare with contactless payment, transit is leveraging cellular data and connectivity to modernize and improve the rider experience." %}
{% include pull-quote.html color_scheme=quote_color_scheme content=quote_content %}

<div class="container">
  <h3>Attributed with color scheme: cyan-light</h3>
</div>

{% assign quote_color_scheme = "cyan-light" %}
{% assign quote_content = "A mudslide blocked the direct route from Santa Paula to Ojai in Ventura County, turning a 30-minute commute into over 2 hours. It lasted for months. <strong>We were able to draw up an emergency shuttle route in Remix in only a few days.</strong> Our executive director said, ‘This is amazing!’ and was very impressed with how quickly we were able to create the route and get it up and running." %}
{% assign quote_source_name = "Erin Kenneally" %}
{% assign quote_source_title = "Transit Planner, VCTC" %}
{% include pull-quote.html color_scheme=quote_color_scheme content=quote_content source_name=quote_source_name source_title=quote_source_title %}

<div class="container">
  <h3>Attributed with color scheme: cyan-dark</h3>
</div>

{% assign quote_color_scheme = "cyan-dark" %}
{% assign quote_content = "The scoping process was way easier and more accessible for our small team. We’re able to prioritize GTFS-RT first and foremost before getting contactless payments." %}
{% assign quote_source_name = "Gustavo Gomez" %}
{% assign quote_source_title = "Senior Transit Planner, ICTC" %}
{% include pull-quote.html color_scheme=quote_color_scheme content=quote_content source_name=quote_source_name source_title=quote_source_title %}
