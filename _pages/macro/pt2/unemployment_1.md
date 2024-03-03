---
layout: page
permalink: /macro/unemployment_1/
title: Unemployment, part 1
nav: false
---

<link rel="stylesheet" href="/assets/css/table.css">

[<small>HOME</small>](/macro/)


Unemployment can be a terrible and wrenching experience---not unlike a serious automobile accident or a messy divorce. Only someone who has gone through it can fully understand its consequences. For unemployed individuals and their families, there is the day-to-day financial stress of not having a paycheck. There are painful adjustments, like watching your savings account dwindle, selling a car and buying a cheaper one, or finding a less expensive place to live. Even when the unemployed person finds a new job, it may pay less than the previous one. 

For many people, their job is an important part of their self-worth, and when unemployment separates people from the workforce, it can affect family relationships as well as mental and physical health.

The human costs of unemployment alone would justify making a low level of unemployment an important public policy priority. However, unemployment also includes economic costs to the broader society. When millions of unemployed but willing workers cannot find jobs, economic resources are unused. An economy with high unemployment is like a company operating with a functional but unused factory. The opportunity cost of unemployment is the output that the unemployed workers could have produced.

##### The unemployment rate

In the United States, every time the unemployment rate increases by just 0.1%, there are 167,451 more people who are out of work. Hence, large rises in the unemployment rate reflect large numbers of job losses. Even with the unemployment rate now at [3.7%](https://fred.stlouisfed.org/series/UNRATE) (as of December 2023), about 6.2 million people who would like to have jobs are out of work---although as we will see, we expect a healthy economy to always have some people who are unemployed.

But what is the *unemployment rate*? Should we count everyone without a job as unemployed? No, we shouldn't. We don't count children as unemployed. We don't count the retired as unemployed. And then there are many people who are not working because they are raising children, ill, attending college, or in prison.

So, we don't want to just divide the adult population into the people who are employed and then count everyone else as unemployed. Instead, we define *unemployed* this way:

> **Unemployed**: Those people, age 16 and over, who are without a job, currently available to work, and have been actively looking for a job during the previous four weeks.[^1]

[^1]: The number of people who are unemployed is based on the "[Current Population Survey](https://www.census.gov/programs-surveys/cps.html)," a monthly survey of 60,000 households that is carried out by the U.S. Census Bureau. (See also [bls.gov/cps/](https://www.bls.gov/cps/).) Tracking the number of people who are receiving unemployment benefits (or are enrolled in other government assistance programs) is not part of how unemployment is calculated.


Thus, a person who does not have a job and is not currently available to work or has not actively looked for work in the last four weeks is not, by this definition, unemployed. 

Using this definition of *unemployed*, the **labor force** is defined as those people who are currently working for pay (in either full-time or part-time jobs) plus those who are unemployed. Meanwhile, **not in the labor force** consists of those people who are 16 and over but (1) not doing paid work and (2) are not actively looking for a job. 

---

Children under 16 years of age are neither (*a*) in the labor force nor (*b*) not in the labor force. They are excluded from this analysis altogether. Also exclude from both categories are active-duty members of the military and people living in institutions---e.g., prisons, nursing homes, etc. Everyone else is either in the 'labor force' or 'not in the labor force'.

---

With this definition of *labor force*, we define the unemployment rate this way:

$$unemployement\ rate = \frac{unemployed}{labor\ force}$$


##### Calculating the unemployment rate

Let's say that somewhere there is a labor force that consists of 100,000 people. In January, 10,000 people are unemployed (by the definition just given). Consequently, for January, the unemployment rate is 10%.

$$unemployement\ rate = \frac{10,000}{100,000} = 10\%$$

Then, in February, 2,000 people who have been looking for full-time work take part-time jobs even though they are over-qualified and want full-time work. Having a part-time job counts as being employed, however, and so, the unemployment rate falls to 8%.

$$unemployement\ rate = \frac{8,000}{100,000} = 8\%$$

In March, 4,000 people who have been trying to find jobs stop looking because they don't think that they will find one. This brings the unemployment rate down to 4.17%.

$$unemployement\ rate = \frac{4,000}{96,000} = 4.17\%$$

Notice that, when people who were unemployed leave the labor force, the numerator (unemployed) gets smaller and the denominator (labor force) also gets smaller. This will always have the effect illustrated here: the unemployment rate will get smaller.

This is how the unemployment rate is calculated. And as the example illustrates, the unemployment rate doesn't precisely reflect the true employment picture. There are some people with only part-time or temporary jobs who are looking for full-time, permanent employment. They are counted as employed, even though they are not employed in the way that they would like or need to be. On the other hand, there are the people who would like to have a job and are available to work but have not actively sought a job in the past four weeks because they believe that they won't find one. These people are removed from the calculation altogether, even though they are, in a looser sense, *unemployed*.

There are also individuals who are underemployed. This includes those who are trained or skilled for one type or level of work but are working in a lower paying job or one that does not utilize their skills. For example, an individual with a college degree in economics who is working as a salesclerk is underemployed. He or she is, however, counted as employed. 

Underemployed, working part-time when a full-time job is desired, and leaving the labor force out of discouragement constitutes **hidden unemployment**. Hidden unemployment doesn't register in the unemployment rate, but just like the unemployed that is counted, hidden unemployment keeps an economy from operating at its full productive capacity.


##### The U-5 and U-6 measures of unemployment

Currently (as of December 2023), the official unemployment rate is 3.7% By historical standards, this is quite low. Two other relevant measures of unemployment are termed "U-5" and "U-6," which, as you can see in figure 1, are higher than the official unemployment rate (the blue line).


<p align="center"><iframe src="https://fred.stlouisfed.org/graph/graph-landing.php?g=1eTHl&width=670&height=475" scrolling="no" frameborder="0" style="overflow:hidden; width:670px; height:525px;" allowTransparency="true" loading="lazy"></iframe></p>
<div class="caption"><div align="left">
<strong>Figure 1</strong>&nbsp;&nbsp;Measures of unemployment 1996 to the present: U-3 (blue), the official unemployment rate; U-5 (red); and U-6 (green).</div></div>

U-5 and U-6 both include people who are, by the official definition, unemployed. U-5 also includes those who are "marginally attached to the labor force" and "discouraged workers." These terms are characterized as follows in the [Current Population Survey](https://www.bls.gov/cps/definitions.htm).

> People classified as **marginally attached to the labor force** are a subset of those not in the labor force who 
currently want a job.
>
> In response to survey questions, people marginally attached to the labor force indicate that they have searched for work during the prior 12 months (or since their last job if it ended within the last 12 months), but not in the most recent 4 weeks. Because they did not actively search for work in the last 4 weeks, they are not classified as *unemployed*. In other words, the marginally attached are people who say they want a job, but who have recently stopped looking for work.
>
> People marginally attached to the labor force also must have been available to take a job during the survey reference week, unless they were temporarily ill. Specifically, they are asked "Last week, could you have started a job if one had been offered?"
>
> The marginally attached are further divided into two subgroups: (1) discouraged workers and (2) other people marginally attached to the labor force.



> **Discouraged workers** are a subset of people marginally attached to the labor force, and also part of the broader group of people not in the labor force. They are not classified as *unemployed* because they have not actively searched for work in the last 4 weeks.
>
> When asked, "What is the main reason you were not looking for work during the last 4 weeks," these individuals indicate some type of discouragement about their job prospects. Their specific responses vary, but common ones include the following:
>
> 1. There are no jobs available, or none for which they would qualify.
> 2. They have been unable to find work in the past.
> 3. They lack the education, training, or experience needed for available jobs.
> 4. Employers think that they are too young or too old, or they are subject to some other type of discrimination.

U-6, meanwhile, includes everyone in U-5 plus people who are working part-time but want full-time work. The U-6 unemployment rate is in some ways closer to the general understanding of *unemployed*. It includes everyone who has some attachment to the labor market, even if they aren't technically unemployed, as well as people who have part-time jobs but want to be working full-time.

---