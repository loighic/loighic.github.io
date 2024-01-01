---
layout: post
title:  the Monty Hall problem
date:   2022-03-14
description: 
tags: 
categories: inductive-logic

---

I don’t include the Monty Hall problem in my course, but I have found that, sometimes, someone who knows that I’m teaching inductive logic will ask about it. That happened recently, and we ended up discussed a couple of ways of explaining the solution that I haven’t seen before. So here they are&mdash;but first, a quick explanation of the game.

The Monty Hall problem is named for the original host of *Let’s Make a Deal*, although this exact game may not have been on the show. Anyway, let’s say you are a contestant. You are shown three doors. Behind one of the doors is a new car. A goat is behind each of the other two. If you pick the door with the car behind it, you win the car. Otherwise, you lose. (I don’t think that you get to keep the goat, but I’m not sure.) So, you pick a door. Before it is opened, however, Monty Hall opens one of the other two doors, revealing a goat. At this point, with two of the doors still closed, he asks you if you want to switch from the door that you chose to the other one. Should you switch?

At first glance, it looks like it doesn’t matter. There are two closed doors. Behind one is a goat, and behind the other is a car---apparently, it’s a 50-50 chance. But that’s not right. Originally, there were three options, so when you made your choice, you had a 1/3 chance of selecting correctly. The other two doors, together, comprised a 2/3 chance. When Monty Hall opened a door, however, he knew that he was opening a door that had a goat behind it. (It would ruin the game, or at least end it abruptly, if he opened the door with the car behind it.) So, if there was a 2/3 chance that the car was behind one of the two doors that you didn’t pick, then there is still a 2/3 chance that the car is behind the door that Monty Hall didn’t open. Hence, you should switch from the door that you picked (which has only a 1/3 chance of having a car behind it) to the other closed door (which has a 2/3 chance of having a car behind it).

Now, two other ways of explaining the solution.

(a) Instead of three doors, imagine that there are 100 doors. Randomly placed behind the 100 doors are 99 goats and one new car. Just as in the original version of the game, you select a door. Then, before that door is opened, Monty Hall opens 98 of the other doors, revealing 98 goats—and, again, he was only opening doors that he knew had goats behind them. Now there are only two doors that are still closed: the one that you selected and one other. Monty Hall asks you if you want to switch to this other door. Should you? I think it’s more obvious here than in the original version of the game that you should switch. The chance that the car is behind the door that you picked is very small, 1/100. The chance that it is behind one of the other doors is very large, 99/100&mdash;and, remember, all that Monty Hall did was open doors that he knew would reveal goats. So there is still the very high chance that the car is behind the one door that he didn’t open, and you should, therefore, switch to that door.

(b) At the beginning of the game, you pick a door. But now let’s say that Monty Hall offers you this choice: stay with the door that you just picked or switch to one of the two other doors. If you switch, he will open one of those two doors and, at the same time, you will open the other one. If a car is behind either of the two doors, then you will get it. (But we can assume that Monty Hall will open a door that definitely has a goat behind it.) I think it’s clear that you should switch because you get two doors (and a 2/3 chance of winning) instead of only one door (and a 1/3 chance of winning). But except for the timing of when Monty Hall opens his door, this version of the game is the same as the original. Hence, you should switch so that you get the 2/3 chance of winning.
