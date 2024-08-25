---
layout: sidebar-toc

title: "How To: Get Connected"
description: >
  Enabling contactless payments makes things easy for the rider but as a transit
  provider, there is some setup required. The California Department of General
  Services (DGS) has taken care of all the negotiations with service providers
  and these contracts are now available for providers to use.

class_name: no-footer how-to-go-contactless
content_class: go-contactless-section go-contactless--how-to
show_newsletter: false
---

<section class="go-contactless-section bg-dark-blue">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <header>
        <h1 class="page-header text-white">How to Get Connected</h1>
      </header>
      <p class="text-white">
        Whether enabling passengers to tap to pay with mobile wallets or to see the live location of a bus on their phone map,
        transit is leveraging cellular data and connectivity to modernize and improve the rider experience.
      </p>
      <p class="text-white">
        California is making it easier for public transit providers to get the data plans they need through
        <a class="text-white" href="/contracts/">Master Service Agreements (MSAs)</a> established by the California Department of
        General Services (DGS). These data plans are available to agencies with the pre-negotiated rates listed.
      </p>
      <p class="text-white">Reach out to us for support at any time as your agency explores these resources.</p>
      <div class="mx-auto text-center pt-4">
        <a class="btn btn-dark-blue-inverted" href="#toc-and-content">View guide</a>
      </div>
    </div>
  </div>
</section>

<!-- END_PREFACE -->

## Getting Started

### What is connectivity?

From accepting mobile wallets for fare payments to giving the live location of a bus, transit is using more technology to improve the rider experience. Cellular data is the power behind this new technology. Types of devices may include:

- Router
- CAD/AVL (Computer-Aided Dispatch / Automatic Vehicle Location)
- Camera feeds
- Passenger WiFi

As transit continues to modernize, more devices can be expected to leverage cellular data and connectivity.

### How do data plans work?

Your technology can be connected through multiple SIMs (one per device) or a single SIM (one in a router).

#### Multiple SIMs
{:.underline}

Each device could be powered by a SIM that connects to the network. These SIMs would have smaller data plans.

<div class="d-flex justify-content-center">
  <img
    class="md-w-75 w-100 my-5"
    src="/uploads/devices-connect-to-network.png"
    alt="Devices connect to network."
  />
</div>

#### Single SIM
{:.underline}

A single router could provide connectivity to multiple devices. The router’s SIM would need a larger data plan.

<div class="d-flex justify-content-center">
  <img
    class="md-w-75 w-100 my-5"
    src="/uploads/devices-connect-to-router.png"
    alt="Router connects to network. Devices connect to router."
  />
</div>

### How do I get started?

We welcome you to browse this guide to understand the process and your next steps. Data plans can be found on our [contracts](/contracts/view?contracts-filter-product=Data Plans) page. If you are interested in purchasing the FirstNet data plans, please review our [Self Service Instructions](https://resources.calitp.org/mobility-marketplace/FirstNet-Self-Service-Instructions.pdf){:target="_blank"}.

Should you have additional questions or want support in implementing data plans for your fleet, we ask that you complete our contact form for Cal-ITP support.

<a href="/contact" class="mb-4 mt-3 btn btn-outline-primary">Contact us</a>

## Choosing a data plan

### How much data do I need?

How much data you use depends on how many devices are on each vehicle. Typical usage for GTFS software and two fare payment validators is 3 GB/month.

<table class="table table-striped">
  <tr>
    <th scope="col" class="border-top align-middle table-dark-blue border-dark-blue text-white table-bordered">1 GB</th>
    <td class="border-top border-dark-blue table-bordered">
      <ul class="p-0 m-0">
        <li class="mx-4">GTFS-RT <em>or</em> 1 fare payment validator</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th scope="col" class="align-middle table-dark-blue border-dark-blue text-white table-bordered">2 GB</th>
    <td class="border-dark-blue table-bordered">
      <ul class="p-0 m-0">
        <li class="mx-4">GTFS-RT</li>
        <li class="mx-4">2 fare payment validators</li>
      </ul>
    </td>
  </tr>
  <tr>
    <th scope="col" class="align-middle table-dark-blue border-dark-blue text-white table-bordered">Unlimited</th>
    <td class="border-dark-blue table-bordered">
      <ul class="p-0 m-0">
        <li class="mx-4">GTFS-RT</li>
        <li class="mx-4">2 fare payment validators</li>
        <li class="mx-4">Cameras</li>
        <li class="mx-4">CAD/AVL</li>
      </ul>
    </td>
  </tr>
</table>

### What carriers are available to purchase data plans from?

We currently have contracts with:

- AT&T
- FirstNet
- T-Mobile
- Verizon

Carriers provide different coverage depending on location, so it is important to evaluate which best covers your service area. You can use [FCC data](https://fcc.maps.arcgis.com/apps/webappviewer/index.html?id=6c1b2e73d9d749cdb7bc88a0d1bdd25b){:target="_blank"} to evaluate Verizon, T-Mobile, and AT&T coverage. You can review [FirstNet coverage on their website](https://www.firstnet.com/coverage.html){:target="_blank"}.

### What if I need to change carriers?

If you already have a data plan, you can switch by either immediately canceling your current contract or by not renewing upon contract expiration.

If your contract is month-to-month, you can simply switch once your new contract is in place. This process tends to be easier and more seamless.

If your contract is on a fixed time period, you can switch when the old one expires. You will need to sync the start of the new contract with the expiration of the old one to reduce the risk of service lapse.

### What are the data plan prices?

All four major carriers offer data-only plans that agencies can leverage. You can access data plans in the commercial marketplace or at discounted rates on CalNet or on NASPO.

<table class="table table-striped table-responsive border-0">
  <caption class="table-caption-bottom pt-1">
    Note&#58; Prices shown are the lowest available between CalNet and NASPO for that size plan
  </caption>
  <thead>
    <tr class="table-dark-blue border-dark-blue">
      <th class="table-sticky-column text-white table-dark-blue border-dark-blue align-middle" scope="col">Carrier</th>
      <th class="text-white table-dark-blue border-dark-blue align-top" scope="col" colspan="3">
        FirstNet<br /><span class="text-normal">(NASPO)</span>
      </th>
      <th class="text-white table-dark-blue border-dark-blue" scope="col">
        AT&T<br /><span class="text-normal">(CalNet + NASPO)</span>
      </th>
      <th class="text-white table-dark-blue border-dark-blue" scope="col">
        T-Mobile<br /><span class="text-normal">(CalNet + NASPO)</span>
      </th>
      <th class="text-white table-dark-blue border-dark-blue" scope="col">
        Verizon<br />
        <span class="text-normal">(CalNet + NASPO)</span>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered border-top-0" scope="row">
        Tiers<br />
      </th>
      <td class="border-dark-blue border-top-0 border-start-0 border-end-0"><em>Tier 1<br>< 3,000 SIMs</em></td>
      <td class="border-dark-blue border-top-0 border-start-0 border-end-0"><em>Tier 2<br>3k - 9,999 SIMs</em></td>
      <td class="border-dark-blue border-top-0 border-left-0"><em>Tier 3<br>>9,999 SIMs</em></td>
      <td class="border-dark-blue border-top-0">-</td>
      <td class="border-dark-blue border-top-0">-</td>
      <td class="border-dark-blue border-top-0">-</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">1 GB</th>
      <td class="border-dark-blue border-start-0 border-end-0">$10.00</td>
      <td class="border-dark-blue border-start-0 border-end-0">$7.50</td>
      <td class="border-dark-blue table-bordered border-start-0">$4.99</td>
      <td class="border-dark-blue table-bordered">$20.00</td>
      <td class="border-dark-blue table-bordered">$8.00</td>
      <td class="border-dark-blue table-bordered">$15.00</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">2 GB</th>
      <td class="border-dark-blue border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue table-bordered border-start-0">N/A</td>
      <td class="border-dark-blue table-bordered">$23.00</td>
      <td class="border-dark-blue table-bordered">$10.00</td>
      <td class="border-dark-blue table-bordered">$20.00</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">3 GB</th>
      <td class="border-dark-blue border-start-0 border-end-0">$25.00</td>
      <td class="border-dark-blue border-start-0 border-end-0">$20.00</td>
      <td class="border-dark-blue table-bordered border-start-0">$14.99</td>
      <td class="border-dark-blue table-bordered">$30.00</td>
      <td class="border-dark-blue table-bordered">N/A</td>
      <td class="border-dark-blue table-bordered">N/A</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">5 GB</th>
      <td class="border-dark-blue border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue table-bordered border-start-0">N/A</td>
      <td class="border-dark-blue table-bordered">$28.00</td>
      <td class="border-dark-blue table-bordered">$21.21</td>
      <td class="border-dark-blue table-bordered">$25.00</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">25 GB</th>
      <td class="border-dark-blue table-bordered border-start-0 border-end-0">$34.00</td>
      <td class="border-dark-blue table-bordered border-start-0 border-end-0">$34.00</td>
      <td class="border-dark-blue table-bordered border-start-0">$29.99</td>
      <td class="border-dark-blue table-bordered">N/A</td>
      <td class="border-dark-blue table-bordered">N/A</td>
      <td class="border-dark-blue table-bordered">N/A</td>
    </tr>
    <tr>
      <th class="table-dark-blue border-dark-blue table-sticky-column text-white table-bordered" scope="row">Unlimited</th>
      <td class="border-dark-blue table-bordered border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue table-bordered border-start-0 border-end-0">N/A</td>
      <td class="border-dark-blue table-bordered border-start-0">N/A</td>
      <td class="border-dark-blue table-bordered">$50.00</td>
      <td class="border-dark-blue table-bordered">N/A</td>
      <td class="border-dark-blue table-bordered">$34.99</td>
    </tr>
  </tbody>
</table>

In California, transit providers can access the FirstNet plan for their fleets.

Interested in tapping these rates? Contact us to get started today! Our team is happy to answer questions and guide you through the process.

<a class="mt-5 btn btn-action btn-primary btn-data-package" href="/contact">Get in touch</a>

### Where can I access the data plan rates?

Data plan rates for AT&T, T-Mobile, and Verizon can be found on either CalNet or on NASPO.

FirstNet data plan rates are available through the self-service instructions on the <a href="https://resources.calitp.org/mobility-marketplace/FirstNet-Self-Service-Instructions.pdf" target="_blank">Data Plan Procurement Self-Service Instructions</a>.

CalNet supports a dedicated page with self-service instructions to access these rate plans. <a href="https://cdt.ca.gov/services/calnet-calitp/" target="_blank">View Cellular Data Plans for CA Agencies</a>.

<!-- NASPO rate plans can be found by searching <a target="_blank" href="https://www.naspovaluepoint.org/">NASPO ValuePoint website</a> for each carrier’s contract. -->

## New data plan options

### Why do the FirstNet plans have tiers? What do these tiers mean?
{:#firstnet-tiers}

FirstNet created data plans tailored for transit agencies at a competitive price. The tiers incentivize more collective purchases and were designed to enable discounted rates in a way that works for their business case.

The FirstNet tier prices are based on bulk volume purchased on that contract vehicle, (i.e., total number purchased by all agencies combined, not the number of SIMs purchased by an individual agency). Tier II pricing is guaranteed through March 2024. When the Tier III threshold is reached, all agencies will see their plans further discounted.

### Can FirstNet be used for any device and use case?
{:#firstnet-devices-use-case}

FirstNet only works for operations-facing use cases, given it is a first responder network. This means it cannot be used for passenger WiFi. Additionally, devices are required to have an additional security certification to operate on the federal network. This certification is common but not universal. For agencies purchasing hardware devices from the California Mobility Marketplace, the table below summarizes what networks each device is certified to operate on.

A FirstNet representative can verify eligibility for your specific use cases and also confirm network compatibility with your devices. You can contact them at <a href="mailto:rc628k@att.com">rc628k@att.com</a> and <a href="mailto:bp1401@att.com">bp1401@att.com</a>.

If your device is not eligible for FirstNet, you may still be able to get the same rates on the commercial AT&T network. Please contact the FirstNet representatives above to learn more.
