---
layout: post
title: 'Sirius devlog 002'
author: Chris Dill
---

Finally back with a progress update!
Took longer than I wanted to get back to it. Mostly behind the scenes stuff but its settled down now and I am happy with the direction its going!

Most work has been technical that I can't easily show but I have few gifs this time! :)

#### Gameplay

Have a basic game loop setup with a player and some enemies. Currently using basic placeholder art until the core gameplay is stable so bullets etc are plain circles. Dosn't look much yet but it works for now. :)

Testing a pause mechanic that gives players time in a chaotic situation to stop and plan out what they want to do next. As the game evolves and enemies becomre varied and difficult, this will keep it accessible and allow for some really cool strategies to be found.

Setup camera shake to give impact and a screen flash when a unit dies. Inspired by a talk on [game juice](https://www.youtube.com/watch?v=Fy0aCDmgnxg&ab_channel=grapefrukt). Its really cool to see those effects come together to bring the game to life. Really helps with motivation too and gives me some cool ideas!

![progress](/assets/gifs/Sirius1-60.gif)

#### Technical

Sirius is being made in C# using a binding of [raylib](https://github.com/ChrisDill/Raylib-cs) that I made. I learnt alot about project management, open source aswell as getting better at using git. The binding was a test at first but it quickly proved itself so started using it for the game.

I changed the Entity type to be data oriented instead of using inheritance. This means Instead of player inheriting from entity, a player is a entity with a set of components.

This makes it easier to test new ideas and reuse logic since it is not tied to a type. Such as using logic for player movement with enemies creating a mind control mechanic.

Also a little test using raylib example shaders on a RenderTexture2D to give the game a unique look. The results are interesting...

![progress](/assets/gifs/Sirius2-60.gif)
