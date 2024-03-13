---
layout: page
permalink: /macro/inflation_2/
title: Inflation, part 2
nav: false
---

<link rel="stylesheet" href="/assets/css/table.css">

[<small>HOME</small>](/macro/)


##### Inflation data on FRED

*Video about the FRED site here.*

##### Inflation and wages

It's generally expected that prices will rise at least a little bit each year. The other side of this, however, is wages. A person's wage can rise every year, but if prices rise at the same rate, then this person gains nothing (and also loses nothing). To make this more precise, let us define nominal and real wages.

> **Nominal wage**: The wage that a worker earns given in terms of the amount that he or she is paid by an employer.
>
> **Real wage**: The wage that a worker earns adjusted for inflation.

As an example, let's say that in 2023 Mary graduates from college and immediately begins a job that pays her \$60,000 per year. At some point, she mentions this starting salary to her grandfather who responds, "Wow! Back in 1973, in my first job after graduating from college, my yearly salary was only \$10,000." But who was really making more?

The \$60,000 and \$10,000 are nominal wages, and it is no surprise that Mary's will be higher than her grandfather's. What we need to compare, however, are their real wages. We calculate them using the Consumer Price Index and the formula given right below.


<p align="center"><iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1idzS&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe></p>
<div class="caption"><div align="left">
<strong>Figure 1</strong>&nbsp;&nbsp;The Consumer Price Index (CPI), 1950 to the present.</div></div>


$$ \mathsf{real\ wage = \ \frac{nominal\ wage}{\left( \frac{CPI\ for\ that\ year}{100} \right)}}$$

The CPI uses an average from 1982, 1983, and 1984 as the base year, and so the real wage that we calculate will be given in 1982 -- 1984 dollars.

$$ \mathsf{real\ wage,\ Mary = \frac{\$ 60,000}{\left( \frac{307.702}{100} \right)} = \$ 19,691.37}$$

$$ \mathsf{real\ wage,\ her\ grandfather = \frac{\$ 10,000}{\left( \frac{44.4}{100} \right)} = \$ 22,522.52}$$

So, although her salary was six times larger than her grandfather's, in real terms, Mary's grandfather earned more in 1973.

If we want to compare real wages that are more than a few years apart, using the CPI is the easiest method. If we want to compare real wages that are only a year or two apart, then we can use this formula, as long as we know the rate of inflation:

$$ \mathsf{real\ wage = (nominal\ wage)(1 - the\ rate\ of\ inflation)}$$

The earlier year becomes the base year, and the real wage that we calculate is relative to it. For instance, let's say that, just as it was in 2023, Mary's salary in 2024 is \$60,000. But the rate of inflation from 2023 to 2024 is 3.1%. Consequently, Mary's real wage will likewise fall:

$$ \mathsf{2024\ real\ wage = (\$ 60,000)(.969) = \$ 58,140}$$


##### The effects of inflation

###### Low inflation: 1 -- 3%

Although it might seem counterintuitive, in most cases, a low level of inflation is actually better for society than deflation or 0% inflation, both of which can slow spending. For instance, consider what you would do if you wanted to buy a new tv. If there is deflation---that is, prices are falling a little bit each month---then your incentive is to keep putting the purchase off. This prevents you from having the product that you want and a company from selling you the product that you want.

A low level inflation also allows for some easy adjustments to sticky downward wages (link). Recall that sticky downward wages can keep unemployment higher than it otherwise would be. If there is some inflation, however, then employees' real wages can fall without employers having to impose a cut to nominal wages.

For example, let's say that you are making \$60,000 per year and this doesn't change for several years. During this period inflation is 3% each year. In this case, your real wage---that is, your wage adjusted for inflation---is falling. In effect, you are getting a wage cut. Obviously, you don't want a wage cut, but if real wages are above the equilibrium, this will help lower unemployment (and perhaps keep you from being laid off).

  
<table class="styled-table">
<thead>
<tr>
<th></th>
<th>year 1</th>
<th>year 2</th>
<th>year 3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">nominal wage</td>
<td>$60,000</td>
<td>$60,000</td>
<td>$60,000</td>
</tr>
<tr>
<td style="text-align: left;">real wage</td>
<td>$60,000</td>
<td>$58,200</td>
<td>$56,454</td>
</tr>
</tbody>
<caption><strong>Table 1</strong>&nbsp;&nbsp;Real wages, relative to year 1, when the nominal wage is constant and inflation is 3% per year.</caption>
</table>

At the same time, if real wages don't need to fall, then as long as workers are receiving a 1 to 3% raise each year, they won't be affected by this level of inflation.

A similar phenomenon occurs with debts. For instance, if you are paying back a \$10,000 loan, inflation is 3% per year, and your wage is rising with inflation, then, in effect, your loan is shrinking. Of course, banks know this, and so they offset this gain to the person paying off the loan with interest payments.


<table class="styled-table">
<thead>
<tr>
<th></th>
<th>year 1</th>
<th>year 2</th>
<th>year 3</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">nominal value of the loan</td>
<td>$10,000</td>
<td>$10,000</td>
<td>$10,000</td>
</tr>
<tr>
<td style="text-align: left;">real value of the loan</td>
<td>$10,000</td>
<td>$9,700</td>
<td>$9,409</td>
</tr>
</tbody>
<caption><strong>Table 2</strong>&nbsp;&nbsp;The real value of a loan, relative to year 1, when the loan is being deferred (without interest) and inflation is 3% per year.</caption>
</table>



There is also sometimes a relationship between inflation and unemployment: as unemployment goes down, inflation goes up. Inflation may bother us sometimes, but unemployment can be a serious problem for the people who experience it and their families. Hence, because of this trade-off with unemployment, the benefits caused by some inflation seem to outweigh the costs.

###### Moderate inflation: 4 -- 12%

Slightly higher levels of inflation can amply the benefits of low inflation: real wages will fall by more (although this drop may be more easily perceived by workers, which will reintroduce the reasons why wages are downward sticky in the first place), the real value of loans will fall by more, and unemployment might be much lower than it otherwise would be.

The problem with inflation in the 4 to 12% range, at least in the United States, is that it is less stable than lower levels of inflation. If inflation is, say 8%, but households, firms, and the government don't know if it will increase from there, decrease, or stay the same, it becomes more difficult to make economic plans for the future.

###### Hyperinflation

**Hyperinflation** is sometimes defined as inflation that is above 50% for a month, which is equivalent to a yearly inflation rate of 12,875%. Much lower levels of inflation, however---say, a yearly rate of 500 or 1,000%---might also be counted as hyperinflation. 

(Monthly inflation is sometimes reported in the news, but so far, we have only discussed yearly inflation rates. *Monthly inflation* is the rate of inflation from the beginning of one month to the beginning of the next.)

The harms versus the benefits of moderate inflation can be debated, but there is no question that hyperinflation is devastating. Hyperinflation wipes out the value of savings and makes it impossible to set long term economic plans.


<table class="styled-table">
<thead>
<tr>
<th></th>
<th>start date</th>
<th>end date</th>
<th>peak</th>
<th>peak monthly inflation rate</th>
<th>equivalent daily inflation rate</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left;">Hungary</td>
<td>Aug. 1945</td>
<td>Jul. 1946</td>
<td>Jul. 1946</td>
<td>4.19 x 10<sup>16</sup>%</td>
<td>207%</td>
</tr>
<tr>
<td style="text-align: left;">Zimbabwe</td>
<td>Mar. 2007</td>
<td>Mid-Nov. 2008</td>
<td>Mid-Nov. 2008</td>
<td>7.96 x 10<sup>10</sup>%</td>
<td>98%</td>
</tr>
<tr>
<td style="text-align: left;">Yugoslavia</td>
<td>Apr. 1992</td>
<td>Jan. 1994</td>
<td>Jan. 1994</td>
<td>313,000,000%</td>
<td>64.60%</td>
</tr>
<tr>
<td style="text-align: left;">Republika Srpska</td>
<td>Apr. 1992</td>
<td>Jan. 1994</td>
<td>Jan. 1994</td>
<td>297,000,000%</td>
<td>64.30%</td>
</tr>
<tr>
<td style="text-align: left;">Germany</td>
<td>Aug. 1922</td>
<td>Dec. 1923</td>
<td>Oct. 1923</td>
<td>29,500%</td>
<td>20.90%</td>
</tr>
<tr>
<td style="text-align: left;">Greece</td>
<td>May. 1941</td>
<td>Dec. 1945</td>
<td>Oct. 1944</td>
<td>13,800%</td>
<td>17.90%</td>
</tr>
<tr>
<td style="text-align: left;">China</td>
<td>Oct. 1947</td>
<td>Mid-May 1949</td>
<td>Apr. 1949</td>
<td>5,070%</td>
<td>14.10%</td>
</tr>
<tr>
<td style="text-align: left;">Free City of Danzig</td>
<td>Aug. 1922</td>
<td>Mid-Oct. 1923</td>
<td>Sep. 1923</td>
<td>2,440%</td>
<td>11.40%</td>
</tr>
<tr>
<td style="text-align: left;">Armenia</td>
<td>Oct. 1993</td>
<td>Dec. 1994</td>
<td>Nov. 1993</td>
<td>438%</td>
<td>5.77%</td>
</tr>
<tr>
<td style="text-align: left;">Turkmenistan</td>
<td>Jan. 1992</td>
<td>Nov. 1993</td>
<td>Nov. 1993</td>
<td>429%</td>
<td>5.71%</td>
</tr>
<tr>
<td style="text-align: left;">Taiwan</td>
<td>Aug. 1945</td>
<td>Sep. 1945</td>
<td>Aug. 1945</td>
<td>399%</td>
<td>5.50%</td>
</tr>
<tr>
<td style="text-align: left;">Peru</td>
<td>Jul. 1990</td>
<td>Aug. 1990</td>
<td>Aug. 1990</td>
<td>397%</td>
<td>5.49%</td>
</tr>
</tbody>
<caption><strong>Table 3</strong>&nbsp;&nbsp;The 12 highest periods of hyperinflation. From <a href="https://www.cato.org/sites/cato.org/files/pubs/pdf/hanke-krus-hyperinflation-table-may-2013.pdf">Hanke and Krus (2012)</a>.</caption>
</table>


Video here
