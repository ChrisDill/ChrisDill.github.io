---
layout: post
title: 'Keeping code up to date'
author: Chris Dill
---

Working on code generation for bindings. Motivated by seeing how bindings get out of date with the original. This is taking longer than I wanted however.

[![xkcd automation](https://imgs.xkcd.com/comics/automation.png)](https://xkcd.com/1319/)

I tested existing generators but they didn't work out the way I wanted so I made a few attempts to generate from the header(.h) file. I found the output was close, but there were edge cases for higher level features.

For example changing some functions to use a enum instead of a int removing the need to explicitly cast every time you use it with the enum.

```csharp
bool IsKeyPressed(int key); // Original function
bool IsKeyPressed(KeyboardKey key); // Takes enum directly
```

Or a issue with pointer types like int * where you need to find out if it should be a reference to a single value or a array but you can't tell from the declaration.

```csharp
void Thing1(ref int count); // Used as a single value
void Thing1(int[] values);  // Used as a array
```

My latest attempt was inspired by [this post](https://ourmachinery.com/post/creating-cross-language-apis/) that is tackling similar problems! :)
It suggests a interface definition language(.idl) to store extra higher level details instead of using the .h file.

Here is a example of what it could look like.

```
module raylib {

    /* ignore block comments as comments use single line comments for documentaion generation */

    //----------------------------------------------------------------------------------
    // basic raylib types
    //----------------------------------------------------------------------------------

    // Vector2 type
    typedef struct Vector2 {
        float x;
        float y;
    } Vector2;

    /* ... */

    //----------------------------------------------------------------------------------
    // Enumerators Definition
    //----------------------------------------------------------------------------------
    // System config flags
    // NOTE: Used for bit masks
    typedef enum {
        FLAG_SHOW_LOGO          = 1,    // Set to show raylib logo at startup
        FLAG_FULLSCREEN_MODE    = 2,    // Set to run program in fullscreen
        FLAG_WINDOW_RESIZABLE   = 4,    // Set to allow resizable window
        FLAG_WINDOW_UNDECORATED = 8,    // Set to disable window decoration (frame and buttons)
        FLAG_WINDOW_TRANSPARENT = 16,   // Set to allow transparent window
        FLAG_WINDOW_HIDDEN      = 128,  // Set to create the window initially hidden
        FLAG_WINDOW_ALWAYS_RUN  = 256,  // Set to allow windows running while minimized
        FLAG_MSAA_4X_HINT       = 32,   // Set to try enabling MSAA 4X
        FLAG_VSYNC_HINT         = 64    // Set to try enabling V-Sync on GPU
    } ConfigFlag;

    /*...*/

    interface raylib {
        //------------------------------------------------------------------------------------
        // Window and Graphics Device Functions (Module: core)
        //------------------------------------------------------------------------------------

        // Window-related functions
        void InitWindow(int width, int height, const char *title)  // Initialize window and OpenGL context

        /*...*/
    }
}
```

You could try to parse as a .h file with changes so it works with the module and interface keywords although a custom parser might be better. You can also extend this format with other
features such as operator overloading etc. Although these files need to be maintained, they have the benefit of making it easy to generating code for different purposes as the high level details are in one place. For example, documentation and autocomplete support.
