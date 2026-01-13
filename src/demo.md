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

<section class="dl-hero my-4">
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

<div class="container">
  <h2>Comparison block</h2>
  <div class="comparison row gap-2 my-4">
    <div class="col-12 col-md-5 offset-md-1 col-lg-4 offset-lg-2">
      <h3 class="h4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" aria-hidden="true">
          <path stroke="currentcolor" stroke-width=".455"
                d="M4.351.228a.58.58 0 0 0-.542.368.6.6 0 0 0-.044.227v1.033h-1.78c-.993 0-1.758.874-1.758 1.878v11.77c0 1.005.765 1.878 1.757 1.878h7.703c.979 1.699 2.803 2.845 4.886 2.845 3.113 0 5.654-2.56 5.654-5.699 0-1.898-.93-3.583-2.353-4.618V3.734c0-1.004-.767-1.878-1.76-1.878h-1.78V.823a.6.6 0 0 0-.361-.55.584.584 0 0 0-.771.322.6.6 0 0 0-.045.228v1.033h-8.22V.823a.6.6 0 0 0-.361-.55.6.6 0 0 0-.225-.045ZM1.984 3.043h1.781v1.028a.6.6 0 0 0 .361.55.58.58 0 0 0 .45 0 .59.59 0 0 0 .361-.55V3.043h8.22v1.028a.6.6 0 0 0 .365.551.584.584 0 0 0 .768-.323.6.6 0 0 0 .044-.228V3.043h1.78c.306 0 .582.272.582.691v2.267H1.403V3.734c0-.419.276-.691.581-.691Zm-.581 4.145h15.293v2.064a5.6 5.6 0 0 0-2.123-.418c-3.114 0-5.65 2.556-5.65 5.694 0 .58.088 1.14.249 1.668H1.984c-.305 0-.581-.272-.581-.691zm13.17 2.832a4.45 4.45 0 0 1 2.433.72 4.5 4.5 0 0 1 2.044 3.788c0 2.498-2 4.514-4.477 4.514S10.1 17.026 10.1 14.528c0-2.497 1.995-4.508 4.473-4.508Zm-.33 1.5a.59.59 0 0 0-.414.175.6.6 0 0 0-.172.417v3.297a.586.586 0 0 0 .586.59h2.293a.585.585 0 0 0 .545-.364.597.597 0 0 0-.318-.777.6.6 0 0 0-.227-.045h-1.702v-2.7a.6.6 0 0 0-.365-.548.6.6 0 0 0-.226-.044Z" />
        </svg>
        GTFS Schedule
      </h3>
      <ul>
        <li>Static information</li>
        <li>Describes the routes and schedule of a transit agency</li>
        <li>Establishes the baseline transit information</li>
      </ul>
    </div>
    <div class="col-12 col-md-5 col-lg-4">
      <h3 class="h4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" aria-hidden="true">
          <path fill="currentcolor" stroke="currentcolor" stroke-width=".45"
                d="M10.224.225c-5.514 0-10 4.486-10 10a.922.922 0 0 0 1.842 0c0-4.499 3.66-8.159 8.158-8.159 4.499 0 8.159 3.66 8.159 8.159 0 4.498-3.66 8.158-8.159 8.158a8.12 8.12 0 0 1-6.127-2.774l.388-.29a.79.79 0 0 0 .313-.73.79.79 0 0 0-.475-.636l-2.721-1.167a.792.792 0 0 0-1.1.823l.349 2.94a.795.795 0 0 0 1.263.543l.504-.377a9.95 9.95 0 0 0 7.607 3.51c5.514 0 10-4.486 10-10s-4.487-10-10-10Z" />
          <path fill="currentcolor" stroke="currentcolor" stroke-width=".45"
                d="M14.771 12.483a1 1 0 0 0 .095-.127.79.79 0 0 0 .02-.82.84.84 0 0 0-.264-.276l-3.754-2.52a1.2 1.2 0 0 0-.29-.517l-.48-2.904a.78.78 0 0 0-.238-.475.78.78 0 0 0-1.315.643l.18 2.783a1.25 1.25 0 0 0 .093 1.701c.272.256.648.38 1.02.329l3.935 2.307c.32.2.74.15.998-.124ZM9.154 9.608a.698.698 0 0 1-.024-.98.694.694 0 0 1 .98-.025.71.71 0 0 1 .025.98.697.697 0 0 1-.981.025Z" />
        </svg>
        GTFS Realtime
      </h3>
      <ul>
        <li>Dynamic information</li>
        <li>Describes the location of vehicles in real time </li>
        <li>Adjusts transit information based on real-time updates</li>
      </ul>
    </div>
  </div>
</div>
