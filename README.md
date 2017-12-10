![](https://imgur.com/7OlUAY1.jpg)
## **RxWebpage**- The reactive front end component of our UCF Senior Design project, Clever Coasters

A simple single page application that automatically refreshes whenever a change occurs in the database. Uses Node, Express and Mongoose to handle listening and handling requests, while our React component handles refreshing the display so waiters get real time updates on every coaster without having to press any buttons. 

-Green = Full cup
-Yellow = Half full (or empty!) cup
-Red = Empty cup
-Grey = No cup detected

The latency of the entire system, (Microcontroller sensor reads a value in a different threshold --> Microcontroller Bluetooth transmits new status --> Android Bluetooth receives new status --> Android put request transmit --> Server put request receive --> Database update --> Update react component), takes roughly a second, so the waiters are as up to date as possible.

![](https://imgur.com/a7DVdxN.jpg)

![](https://imgur.com/0qNEvlZ.png)

[The code for the Android app can be found here.](https://github.com/mrcrozier/RxCoaster)

Contact me at mrcrozier@gmail.com if you want to know more