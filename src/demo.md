---
layout: latest

title: Component demo
description: >
  A page to view individual layout components as they are completed
show_call_to_action: true
---

<div class="container">
  <h1>DSDL component demo</h1>
</div>

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

<div class="container">
  <h2>Step list</h2>
  <div class="row">
    <h3>Color scheme: yellow</h3>
    <div class="offset-lg-2 col-lg-7 col-12">
      <ol class="step-list step-list_yellow my-4">
        <li><b>Choose a data-only provider</b> and plan that fits your agency’s needs</li>
        <li><b>Review purchase options:</b> You can access data plans in the commercial marketplace or at discounted rates on <a href="#">CALNET</a> or on <a href="#">NASPO</a></li>
        <li><b>Engage the vendor</b> you’d like to purchase from</li>
        <li><b>Sign the agreement</b></li>
        <li><b>Implement and launch,</b> be sure to coordinate with your hardware providers to align on who will install SIMs</li>
      </ol>
    </div>
  </div>
  <div class="row">
    <h3>Color scheme: purple</h3>
    <div class="offset-lg-2 col-lg-7 col-12">
      <ol class="step-list step-list_purple my-4">
        <li><b>Choose a data-only provider</b> and plan that fits your agency’s needs</li>
        <li><b>Review purchase options:</b> You can access data plans in the commercial marketplace or at discounted rates on <a href="#">CALNET</a> or on <a href="#">NASPO</a></li>
        <li><b>Engage the vendor</b> you’d like to purchase from</li>
        <li><b>Sign the agreement</b></li>
        <li><b>Implement and launch,</b> be sure to coordinate with your hardware providers to align on who will install SIMs</li>
      </ol>
    </div>
  </div>
  <div class="row">
    <h3>Color scheme: cyan-light</h3>
    <div class="offset-lg-2 col-lg-7 col-12">
      <ol class="step-list step-list_cyan-light my-4">
        <li><b>Choose a data-only provider</b> and plan that fits your agency’s needs</li>
        <li><b>Review purchase options:</b> You can access data plans in the commercial marketplace or at discounted rates on <a href="#">CALNET</a> or on <a href="#">NASPO</a></li>
        <li><b>Engage the vendor</b> you’d like to purchase from</li>
        <li><b>Sign the agreement</b></li>
        <li><b>Implement and launch,</b> be sure to coordinate with your hardware providers to align on who will install SIMs</li>
      </ol>
    </div>
  </div>
  <div class="row">
    <h3>Color scheme: cyan-dark</h3>
    <div class="offset-lg-2 col-lg-7 col-12">
      <ol class="step-list step-list_cyan-dark my-4">
        <li><b>Choose a data-only provider</b> and plan that fits your agency’s needs</li>
        <li><b>Review purchase options:</b> You can access data plans in the commercial marketplace or at discounted rates on <a href="#">CALNET</a> or on <a href="#">NASPO</a></li>
        <li><b>Engage the vendor</b> you’d like to purchase from</li>
        <li><b>Sign the agreement</b></li>
        <li><b>Implement and launch,</b> be sure to coordinate with your hardware providers to align on who will install SIMs</li>
      </ol>
    </div>
  </div>

  <div class="row">
    <h2>Numbered headings</h2>
    <div class="offset-lg-2 col-lg-7 col-12">
      <h3 class="numbered numbered_yellow my-4" data-number="1">Choose a data plan</h3>
      <h3 class="numbered numbered_purple my-4" data-number="2">Review purchase options</h3>
      <h3 class="numbered numbered_cyan-light my-4" data-number="3">Reach out to your vendor</h3>
      <h3 class="numbered numbered_cyan-dark my-4" data-number="4">Sign agreement</h3>
    </div>
  </div>

  <div class="row">
    <h2>Tables</h2>
    <div class="offset-lg-2 col-lg-7 col-12 table-responsive">
      <h3>Color scheme: yellow</h3>
      <table class="table_yellow my-4">
        <thead>
          <tr>
            <th scope="col">Vendors</th>
            <th scope="col">MSAs</th>
            <th scope="col">Types of transactions</th>
            <th scope="col">Payment networks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fiserv*</td>
            <td><a href="https://caleprocure.ca.gov/pages/LPASearch/lpa-details.aspx?Page=ZZ_CTR_SUP_PG&Action=U&ForceSearch=Y&CNTRCT_ID=5-22-70-22-02&SETID=STATE&VERSION_NBR=2">5-22-70-22-02</a></td>
            <td>
              <ul>
                <li>credit</li>
                <li>debit</li>
                <li>mobile wallet</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>American Express</li>
                <li>Discover</li>
                <li>Mastercard</li>
                <li>Visa</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Elavon*</td>
            <td><a href="https://caleprocure.ca.gov/pages/LPASearch/lpa-details.aspx?Page=ZZ_CTR_SUP_PG&Action=U&ForceSearch=Y&CNTRCT_ID=5-22-70-22-01&SETID=STATE&VERSION_NBR=3">5-22-70-22-01</a></td>
            <td>
              <ul>
                <li>credit</li>
                <li>debit</li>
                <li>mobile wallet</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>American Express</li>
                <li>Discover</li>
                <li>Mastercard</li>
                <li>Visa</li>
              </ul>
            </td>
          </tr>
        </tbody>
        <caption class="visually-hidden">Payment Processors MSAs (click on each MSA for terms and conditions)</caption>
      </table>
      <h3>Color scheme: purple</h3>
      <table class="table_purple my-4">
        <thead>
          <tr>
            <th scope="row">MSAs</th>
            <th colspan="3" scope="col"><a href="https://cdt.ca.gov/services/calnet-calitp/">CALNET</a> + <a href="https://resources.calitp.org/mobility-marketplace/State.of.California_Amendment.1_Extension.2023-05.pdf">NASPO</a></th>
            <th scope="col"><a href="https://resources.calitp.org/mobility-marketplace/State.of.California_Amendment.1_Extension.2023-05.pdf">NASPO</a></th>
          </tr>
          <tr>
            <th scope="row">Vendors</th>
            <th scope="col">AT&T</th>
            <th scope="col" class="text-nowrap">T-Mobile</th>
            <th scope="col">Verizon</th>
            <th scope="col">FirstNet</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1 GB</th>
            <td>$20</td>
            <td>$8</td>
            <td>$15</td>
            <td>$7.50</td>
          </tr>
          <tr>
            <th scope="row">2 GB</th>
            <td>$23</td>
            <td>$10</td>
            <td>$20</td>
            <td>–</td>
          </tr>
          <tr>
            <th scope="row">3 GB</th>
            <td>–</td>
            <td>–</td>
            <td>–</td>
            <td>$20</td>
          </tr>
          <tr>
            <th scope="row">5 GB</th>
            <td>$28</td>
            <td>$21.21</td>
            <td>$25</td>
            <td>–</td>
          </tr>
          <tr>
            <th scope="row">25 GB</th>
            <td>–</td>
            <td>–</td>
            <td>–</td>
            <td>$34</td>
          </tr>
          <tr>
            <th scope="row">Unlimited</th>
            <td>$50</td>
            <td>–</td>
            <td>$34.99</td>
            <td>–</td>
          </tr>
        </tbody>
        <caption class="visually-hidden">Data plans MSAs (cost per month per vehicle, prices are negotiable, click on each MSA for terms and conditions)</caption>
      </table>
      <h3>Color scheme: cyan</h3>
      <p><i>Note:</i> There is only one cyan color scheme for tables, not both light and dark cyan.</p>
      <table class="table_cyan wider my-4">
        <thead>
          <tr>
            <th scope="col">MSA vendors</th>
            <th scope="col">MSAs</th>
            <th scope="col">Pricing structure</th>
            <th scope="col">Hardware options</th>
            <th scope="col">Eligible networks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Connexionz Ltd</td>
            <td><a href="https://caleprocure.ca.gov/pages/LPASearch/lpa-details.aspx?Page=ZZ_CTR_SUP_PG&Action=U&ForceSearch=Y&CNTRCT_ID=5-24-70-42-01&SETID=STATE&VERSION_NBR=3">5-24-70-42-01</a></td>
            <td>Base fee + variable fees based on EITHER vehicles or routes</td>
            <td>Cellular routing kit (with Pepwave MAX BR1 Mini)</td>
            <td>
              <ul>
                <li>WiFi</li>
                <li>AT&T</li>
                <li class="text-nowrap">T-Mobile</li>
                <li>Verizon</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Passio Technologies LLC</td>
            <td><a href="https://caleprocure.ca.gov/PSRelay/ZZ_PO.ZZ_CTR_SUP_CMP.GBL?Page=ZZ_CTR_SUP_PG&Action=U&SETID=STATE&CNTRCT_ID=5-24-70-42-02">5-24-70-42-02</a></td>
            <td>Base fee + variable fees based on EITHER vehicles or routes</td>
            <td>
              <ul>
                <li>Calamp LMU-3641</li>
                <li>Lilliput RT-V7000 Pro</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>WiFi</li>
                <li>AT&T</li>
                <li class="text-nowrap">T-Mobile</li>
                <li>Verizon</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td rowspan="2" style="border-bottom: none;">Swiftly Inc</td>
            <td rowspan="2" style="border-bottom: none;"><a href="https://caleprocure.ca.gov/pages/LPASearch/lpa-details.aspx?Page=ZZ_CTR_SUP_PG&Action=U&ForceSearch=Y&CNTRCT_ID=5-24-70-42-03&SETID=STATE&VERSION_NBR=2">5-24-70-42-03</a></td>
            <td rowspan="2" style="border-bottom: none;">Variable fees based on number of vehicles</td>
            <td>Samsara VG55</td>
            <td>
              <ul>
                <li>WiFi</li>
                <li>AT&T</li>
                <li>FirstNet</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>
              <ul>
                <li>Samsung Tab Active 5</li>
                <li>Cradlepoint R1900</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>WiFi</li>
                <li>AT&T</li>
                <li>FirstNet</li>
                <li>T-Mobile</li>
                <li>Verizon</li>
              </ul>
            </td>
          </tr>
        </tbody>
        <caption class="visually-hidden">GTFS Realtime MSAs (click on each MSA for terms and conditions)</caption>
      </table>
    </div>
  </div>

  <h2>Download cards</h2>

  <div class="row justify-content-md-center">
    <div class="col-md-auto">
      {% assign dl_img = "https://placehold.co/272x352/white/black?text=8.5×11" %}
      {% assign dl_tag = "GTFS-RT" %}
      {% assign dl_title = "Scope of Work template" %}
      {% assign dl_description = "to document your project needs and goals to send to vendors" %}
      {% assign dl_view_url = "/resources/assets/gtfs-rt_scope-of-work-template.docx" %}
      {% assign dl_download_url = "/resources/gtfs-rt_scope-of-work-template" %}
      {% include dl-card.html img=dl_img tag=dl_tag title=dl_title description=dl_description view_url=dl_view_url download_url=dl_download_url %}
    </div>

    <div class="col-md-auto">
      {% assign dl_img = "https://placehold.co/272x352/white/black?text=8.5×11" %}
      {% assign dl_tag = "GTFS-RT" %}
      {% assign dl_title = "Scope of Work template" %}
      {% assign dl_description = "to document your project needs and goals to send to vendors and more text for three lines" %}
      {% assign dl_view_url = "/resources/assets/gtfs-rt_scope-of-work-template.docx" %}
      {% assign dl_download_url = "/resources/gtfs-rt_scope-of-work-template" %}
      {% include dl-card.html img=dl_img tag=dl_tag title=dl_title description=dl_description view_url=dl_view_url download_url=dl_download_url %}
    </div>

    <div class="col-md-auto">
      {% assign dl_img = "https://placehold.co/272x352/white/black?text=8.5×11" %}
      {% assign dl_tag = "GTFS-RT" %}
      {% assign dl_title = "Scope of Work template" %}
      {% assign dl_view_url = "/resources/assets/gtfs-rt_scope-of-work-template.docx" %}
      {% assign dl_download_url = "/resources/gtfs-rt_scope-of-work-template" %}
      {% include dl-card.html img=dl_img tag=dl_tag title=dl_title view_url=dl_view_url download_url=dl_download_url %}
    </div>
  </div>
  <h2>Download hero</h2>
</div>

<section class="dl-hero">
  <div class="container">
    <div class="row">
      <div class="dl-hero-text col-12 col-lg-4 offset-lg-1">
        <div class="dl-tag">GTFS-RT</div>
        <h1 class="mt-2 mb-lg-3">GTFS Realtime Scope of Work template</h1>
        <a class="dl-button my-3 my-lg-4" href="#" download>Download</a>
        <p>This document is both a guide and fillable template for purchasing services to help your agency implement GTFS Realtime. It will walk you through how to turn your project needs and goals into a Scope of Work (SOW) to send to vendors in order to purchase GTFS-RT software and optional hardware via the Master Service Agreement (MSA).</p>
        <p class="mt-2 mt-lg-5">Last updated: November 2025 | Cal-ITP</p>
      </div>
      <div class="dl-hero-image col-12 col-lg-5 offset-lg-2">
        <img src="https://placehold.co/544x704/white/black?text=8.5×11" alt="First page of the document">
      </div>
    </div>
  </div>
</section>
