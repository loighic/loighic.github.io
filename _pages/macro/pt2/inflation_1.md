---
layout: page
permalink: /macro/inflation_1/
title: Calculating inflation
nav: false
---

<link rel="stylesheet" href="/assets/css/table.css">

[<small>HOME</small>](/macro/)


The prices of goods and services rise (and fall) for various reasons. As we discussed on [The supply and demand model](https://loighic.net/macro/supply_and_demand/) page, shifts in supply and demand for a particular good or service will, in some cases, cause a shortage, which will force the price up. That analysis is for individual goods and services, however, and the price rise that accompanies a shortage is a one-time event. Once the equilibrium price is reached, it will remain where it is, at least until something else changes and the equilibrium has to adjust again.

Inflation is different. **Inflation** is the general and ongoing rise in the level of prices in an economy. The **inflation rate** is the percent change in prices over some period, usually a year. When the inflation rate is positive---i.e., the change is 1 or 2 or 3%---there is *inflation*. When the rate is negative, there is *deflation*.

As you can see in the graph in figure 1, since 1950, there has almost always been some inflation in the United States economy, peaking at 14.8% in March of 1980. And the four periods of deflation since January of 1950 have all been brief.

<p align="center"><iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1iafS&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe></p>
<div class="caption"><div align="left">
<strong>Figure 1</strong>&nbsp;&nbsp;The monthly inflation rate, 1950 to the present. Each value is the percent change to the consumer price index (CPI) from a year earlier. So, for instance, from January 2023 to January 2024 the CPI increased by 3.09%.</div></div>


##### Calculating inflation with the GDP deflator

Since inflation is the measure of the general rise in the level of prices, one obvious way to calculate it is with GDP. As we will see, it is not the most common way to determine the rate of inflation, but there is a method for doing it. To use GDP to calculate the rate of inflation, we first need to calculate the **GDP deflator**:

$$ \mathsf{GDP\ deflator = \frac{nominal\ GDP}{real\ GDP} \times 100} $$

This gives us the relationship between nominal and real GDP (for some year) as a percentage, which is then multiplied by 100 to gives us what we call an *index number*.

Let's use the GDP deflator to calculate the rate of inflation from 2022 to 2023. In 2022, nominal GDP was \$25,744,108,000,000 and real GDP was \$21,822,037,000,000. Thus, we have the following.

$$ \mathsf{2022\ GDP\ deflator = \ \frac{\$ 25,744,108,000,000}{\$ 21,822,037,000,000} \times 100 = 118}$$

And in 2023, nominal GDP was \$27,356,393,000,000 and real GDP was \$22,375,000,000.

$$ \mathsf{2023\ GDP\ deflator = \ \frac{\$ 27,356,393,000,000}{\$ 22,375,308,000,000} \times 100 = 122}$$

---

###### Index numbers

Notice that the 118 and 122 are not dollar amounts. They are, as we said, index numbers. **Index numbers**, which are used in different contexts, are values that (1) are relative to a base year and (2) are used to compare different years. The GDP deflator will be 100 for the year that is used as the base year---in this case 2017---since that year's real GDP will be the same as its nominal GDP. (Remember that real GDP is calculated using the prices from a base year. Since 2017 is the base year, 2017 prices are used to calculate the 2017 real GDP.)

$$ \mathsf{2017\ GDP\ deflator = \ \frac{\$ 19,612,103,000,000}{\$ 19,612,103,000,000} \times 100 = 100}$$

So, as a result, our index numbers inform us about the percentage increase (or decrease) in prices from 2017 to some other year. For instance, the 118 for 2022 means that prices of all final goods and services were 18 percent higher in 2022 than they were in 2017.

---


More often than not, however, we don't want to compare one year to the base year. We want to compare two other years. We can do that and get the rate of inflation between two years using this formula:

$$ \mathsf{inflation\ rate = \frac{GDP\ deflator,\ later\ year - GDP\ deflator,\ earlier\ year}{GDP\ deflator,\ earlier\ year}}$$

Using the GDP deflator numbers that we have for 2023 and 2022, we find that the rate of inflation from 2022 to 2023 was 3.4%.

$$ \mathsf{2022\ to\ 2023\ inflation\ rate = \frac{122 - 118}{118} = 3.4 \%}$$


##### The limitations of the GDP deflator method

Using the GDP deflator is one way of calculating inflation, but it is not the method that is primarily used by economists and others who are interested in tracking inflation. It is important to know the inflation rate for *all* goods and services produced in a country, but if we are interested in investigating the extent to which inflation is impacting households, the GDP deflator method has some drawbacks.

One problem is that there are many goods and services included in GDP---for instance, aircraft, fire engines, factory buildings, office complexes, and bulldozers---that are never purchased by regular consumers. An increase in the prices of all of these sorts of things that consumers don't purchase may, eventually, affect society as a whole. But if we want to understand how price changes are affecting consumers this month or this year, then we don't want to look the price changes for all goods and services included in GDP.

A second problem is that GDP measures production within the U.S. (or any other country). But consumers also buy imported goods and services. In terms of how a general rise in prices affects consumers, there is no difference between the imported goods and services that they purchase and those that are produced in the United States.


##### Calculating inflation with the Consumer Price Index

The inflation rate that is more often used by economists and the one that you are likely to see reported in the news is calculated using the Consumer Price Index (CPI). This method also uses index numbers, and so, once we have those numbers, the calculation is the same as it is for the GDP deflator method. Getting the CPI values takes more work, however. Let's consider a simple example.

Imagine that the typical family's monthly expenditures in 2017, 2018, and 2019 are just what are listed in tables 1 - 3: rent for a 2-bedroom apartment, burritos, and movie tickets. Of course, in reality, individuals purchase many more goods and services each month, but nonetheless, the idea is that we are just focused on so called "regular" purchases.


<table class="styled-table">
<thead>
<tr>
<th style="text-align: left;">2018</th>
<th>quantity</th>
<th>cost ($)</th>
<th>expenditure ($)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">rent, 2-bedroom apt</td>
<td>1</td>
<td>900</td>
<td>900</td>
</tr>
<tr>
<td style="text-align: left;">burritos</td>
<td>60</td>
<td>7</td>
<td>420</td>
</tr>
<tr>
<td style="text-align: left;">movie tickets</td>
<td>10</td>
<td>8</td>
<td>80</td>
</tr>
<tr>
<td style="text-align: left;"><strong>total expenditure:</strong></td>
<td></td>
<td></td>
<td><strong>1,400</strong></td>
</tr>
</tbody>
</table>


<table class="styled-table">
<thead>
<tr>
<th style="text-align: left;">2019</th>
<th>quantity</th>
<th>cost ($)</th>
<th>expenditure ($)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">rent, 2-bedroom apt</td>
<td>1</td>
<td>1,000</td>
<td>1,o00</td>
</tr>
<tr>
<td style="text-align: left;">burritos</td>
<td>60</td>
<td>9</td>
<td>540</td>
</tr>
<tr>
<td style="text-align: left;">movie tickets</td>
<td>10</td>
<td>11</td>
<td>110</td>
</tr>
<tr>
<td style="text-align: left;"><strong>total expenditure:</strong></td>
<td></td>
<td></td>
<td><strong>1,650</strong></td>
</tr>
</tbody>
</table>



<table class="styled-table">
<thead>
<tr>
<th style="text-align: left;">2020</th>
<th>quantity</th>
<th>cost ($)</th>
<th>expenditure ($)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">rent, 2-bedroom apt</td>
<td>1</td>
<td>1,200</td>
<td>1,200</td>
</tr>
<tr>
<td style="text-align: left;">burritos</td>
<td>60</td>
<td>9</td>
<td>540</td>
</tr>
<tr>
<td style="text-align: left;">movie tickets</td>
<td>10</td>
<td>12</td>
<td>120</td>
</tr>
<tr>
<td style="text-align: left;"><strong>total expenditure:</strong></td>
<td></td>
<td></td>
<td><strong>1,860</strong></td>
</tr>
</tbody>
<caption><strong>Tables 1 - 3</strong>&nbsp;&nbsp;An example of the monthly purchases made by a typical household in 2018, 2019, and 2020.</caption>
</table>


To calculate each year's CPI value, we set one year as the base year. We'll use 2017. Then, we do this calculation:

$$ \mathsf{CPI = \ \frac{other\ year,\ total\ expenditure}{base\ year,\ total\ expenditure} \times 100}$$

Hence, these are our three values:

$$ \mathsf{2017\ CPI = \ \frac{\$ 1,400}{\$ 1,400} \times 100 = 100}$$

$$ \mathsf{2018\ CPI = \ \frac{\$ 1,650}{\$ 1,400} \times 100 = 117.86}$$

$$ \mathsf{2019\ CPI = \ \frac{\$ 1,860}{\$ 1,400} \times 100 = 132.86}$$

(Just as it was for the GDP deflator, the CPI values are not dollar amounts.) To calculate the rate of inflation from one of these years to another, we do this calculation:

$$ \mathsf{inflation\ rate = \frac{CPI,\ later\ year - CPI,\ earlier\ year}{CPI,\ earlier\ year}}$$

And so, we find that the rate of inflation for 2018 to 2019 is 12.73%.

$$ \mathsf{2018\ to\ 2019\ inflation\ rate = \frac{132.86 - 117.86\ }{117.86} = 12.73\%}$$

##### The basket of goods

In our example, we imagined that the typical consumer just pays rent on a two-bedroom apartment and buys burritos and movie tickets. This is an example of a **basket of goods**: a set of goods and services that represent typical consumer purchases.

The U.S. Bureau of Labor Statistics (BLS), which calculates the official consumer price index, also uses a basket of goods to do so, although the basket of goods that they use is much larger than the one in our example. In fact, it is much larger than what any single consumer or household would purchase in a month (but importantly, it is much less than everything that is counted in GDP).

In our example, the goods were weighted by the quantities of each that were purchased. As such, burritos, for instance, had a much larger impact on the CPI that we calculated than movie tickets because many more were purchased each month. The actual consumer price index weights goods and services, not by quantities purchased each month, but by how important the item is for consumers.

The categories for the basket of goods that the BLS uses are listed [here](https://www.bls.gov/news.release/cpi.t01.htm) (and as more detailed categories, [here](https://www.bls.gov/news.release/cpi.t02.htm).)
