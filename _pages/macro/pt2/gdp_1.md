---
layout: page
permalink: /macro/gdp_1/
title: Gross Domestic Product, Part 1
nav: false
---

<link rel="stylesheet" href="/assets/css/table.css">

[<small>HOME</small>](/macro/)


How large is the U.S. economy? Economists typically measure the size of a nation's overall economy by its **gross domestic product** (GDP). This is the definition.

> **Gross domestic product**: The market value of all final goods and services produced within a country in a given period.

Measuring GDP involves counting the production of millions of different goods and services---smart phones, cars, computers, software, steel, heart surgeries, bananas, college educations, and all of the other new goods and services that a country produces in the current year---and summing them into a single dollar value. This task is straightforward: take the quantity of all of the final goods and services that are produced, multiply each item by the price at which it was sold, and add everything up. In 2020, the U.S. GDP totaled \$27.3 trillion, the largest GDP in the world.

We will proceed by examining each part of the definition of GDP---although to make the exposition clearer, we will take the parts out of order.

##### Final goods and services

Gross domestic product is a measure of *final* goods and services. These are the goods and services that consumers purchase, and not the intermediate goods that producers purchase in the process of producing the final good.

Consider the example in figure 1. The t-shirt that is sold by producer E, the retailer, is the final good. The goods that are produced and sold by producers A, B, C, and D are *intermediate goods*.


<table class="styled-table">
<thead>
<tr>
<th>producer</th>
<th>product</th>
<th>sale price</th>
<th>value added</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td style="width:240px; text-align: left;">Cotton is grown, harvested, bundled and sold to B.</td>
<td>$2</td>
<td>($0 → $2) $2</td>
</tr>
<tr>
<td>B</td>
<td style="text-align: left;">The cotton is turned into yarn (i.e., thread) and sold to C.</td>
<td>$6</td>
<td>($2 → $6) $4</td>
</tr>
<tr>
<td>C</td>
<td style="text-align: left;">The yarn is spun into fabric and sold to D.</td>
<td>$9</td>
<td>($6 → $9) $3</td>
</tr>
<tr>
<td>D</td>
<td style="text-align: left;">The fabric is cut and sewn into t-shirts, which are sold to E.</td>
<td>$18</td>
<td>($9 → $18) $9</td>
</tr>
<tr>
<td>E</td>
<td style="text-align: left;">The t-shirt is displayed and sold to a consumer.</td>
<td>$26</td>
<td>($18 → $26) $8</td>
</tr>
</tbody>
<caption><strong>Table 1</strong></caption>
</table>


Only the cost of the t-shirt that is sold to the consumer is included in GDP, but the value of the intermediate goods produced by A, B, C, and D are included in price of the t-shirt that is sold to a consumer. For instance, the value of the cotton that producer A sold to producer B (\$2) is carried along at each step. If somehow, producer B had gotten that cotton for free, then the yarn would have been sold for \$4, the fabric could have been sold for \$7, and so forth. Hence, the value of the intermediate goods are included in GDP.

This means that it would be a mistake to include the price of the cotton, the price of the thread, the price of the fabric, the price of the wholesale t-shirt, *and* the price of t-shirt sold in a store in GDP. Do this would be what is called **double counting**.

One qualification here is that exports are counted in GDP, even when they are an intermediate good in the production of a final good produced in some other country. As far as the exporting country is concerned, though, exports are the final product.

##### Produced 

Only goods and services are included in GDP. This means that, for instance, stock transactions, social security payments, SNAP payments, or unemployment benefits are not included.

##### In a given period

Generally, GDP is measured for a year or a quarter of a year (i.e., three-month periods), and only the goods and services that are produced in that period are counted. This means that a used car that is sold today won't be included in this quarter's (or this year's) GDP. It was counted when it was sold as a new car, and that is the only time that it is included in GDP. Similarly, although we don't think of houses or condos as being "used," if a house that was built (and originally sold) 30 years ago is re-sold this year, it won't be included in this year's GDP. It was included in the GDP for the year in which it was originally built. (Repairs or improvements that are made to the car or to the house will be counted, however, in the year in which they are made.)

When the period is a quarter of the year---that is, a three-month period---it is generally reported as an "annualized" value. This value is f0und by multiplying the GDP for the quarter by four, and it lets us compare the most current reports of GDP to the GDP of previous years.


<table class="styled-table">
<thead>
<tr>
<th></th>
<th>Q1</th>
<th>Q2</th>
<th>Q3</th>
<th>Q4</th>
</tr>
<tr>
<td></td>
<td>Jan - Mar</td>
<td>Apr - Jun</td>
<td>July - Sept</td>
<td>Oct - Dec</td>
</tr>
</thead>
<tbody>
<tr>
<td style="width:210px; text-align: left;">value of the production during the quarter</td>
<td>$100</td>
<td>$80</td>
<td>$50</td>
<td>$100</td>
</tr>
<tr>
<td style="text-align: left;">annualized figure for each quarter</td>
<td>$400</td>
<td>$320</td>
<td>$200</td>
<td>$400</td>
</tr>
</tbody>
<caption><strong>Table 2</strong>&nbsp;&nbsp;The sum of the production for each of these quarters (\$100 + \$80 + \$50 + \$100) equals of the average of the four annualized figures, \$330.</caption>
</table>



##### The market value

The value of the final goods and services are set by the amounts for which they are sold. This makes setting their value straightforward, but it creates a complication for comparing goods and services from different years. For instance, the [average price of a dozen eggs](https://fred.stlouisfed.org/series/APU0000708111) in the United States was \$0.84 in 1980, and it was \$2.80 in 2023. Let's imagine that 1,000,000 cartons of eggs (each containing 12 eggs) were sold in 1980 and the same amount were sold in 2023. When we use the price at which they were sold in our GDP calculation, we find that these 1,000,000 eggs contribute \$840,000 to GDP in 1980 and \$2,800,000 in 2023!

> 1980: 1,000,000 x \$0.84 = \$840,000
>
> 2023: 1,000,000 x \$2.80 = \$2,800,000

GDP is supposed to be a measure of how much a country produces, and in our example, the same number of eggs were produced in 1980 and in 2023. Therefore, we need a way of calculating GDP that will reflect the fact that the same amount of eggs were produced in 1980 and in 2023.

This problem is solved by using the same price in the 1980 calculation and the 2023 calculation. This is done by taking prices from one year---which we call the *base year*---and using that year's prices to calculate GDP in *all* years. Let's use 2010 as our base year. In that year, the average price of a dozen eggs was \$1.66. Using this price, we find, as expected, that the 1,000,000 cartons of eggs sold in 1980 and the 1,000,000 sold in 2023 contribute the same amount to GDP.

> 1980: 1,000,000 x \$1.66 = \$1,660,000
>
> 2023: 1,000,000 x \$1.66 = \$1,660,000

On the other hand, let's imagine that 1,000,000 cartons of eggs were produced and sold in 1980, and 2,000,000 were produced and sold in 2023. Now, using 2010 as our base year, we find that the value of egg production was twice as large in 2023 as it was in 1980---accurately reflecting the increase in the production of eggs.

> 1980: 1,000,000 x \$1.66 = \$1,660,000
>
> 2023: 2,000,000 x \$1.66 = \$3,320,000

The increase in the price of a dozen eggs from 1980 (\$0.84) to 2023 (\$2.80) is just a matter of **inflation**---the general and continuous rise in price levels. The eggs themselves are exactly the same. The **nominal value** of a good or service (like eggs) is the price for which it is sold whenever that might be. So, the nominal price of a dozen eggs (on average) was \$0.84 in 1980 and \$2.80 in 2023. The **real value**, on the other hand, is a price that has been adjusted for inflation. And this adjustment is done by using a base year, like we just did.

It can be easy to mix up *real* and *nominal*. One way to think about it is that *nominal*, which comes from the Latin word for *name*, is the label that we put on a good or service. It's the price that you see when you go to the store. In contrast, the *real price* is the one that you won't see in the store, but it's the true (or real) value of the good or service. The eggs in 1980 and the eggs in 2023 are exactly the same, and so they have the same real value: \$1.66 if we use 2010 as our base year.

When we add up the value of all goods and services produced in a country in a year using the prices for which they sold, then the figure that we end up with is called **nominal GDP**. When we do the same, but use the prices from a base year, then the figure is called **real GDP**. Generally, because it lets us track changes in production from year to year (and doesn't mix together changes in production and the effects of inflation), **real GDP** is the more important figure.

<p align="center"><iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1eMeM&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe></p>

<small><strong>Figure 1: Real (red) and nominal (blue) GDP</strong>&nbsp;&nbsp;The base year is 2017, which means that each year's real GDP is calculated using 2017 prices.</small>

##### Within a country

The definition of GDP stated that it is a measure of production *within a country*. This is the foremost measure of GDP, and GDP is calculated (or estimated) for [every country in the world](https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?most_recent_value_desc=true). But GDPs are also calculated for [states](https://loighic.net/assets/img/macro_fig/3_gdp/states_gdp.jpg) (in the U.S. and in other countries), and for larger regions like the European Union.
