# Debugging Node

1. How do you access the DevTools for Node in Chrome?
   * Enter chrome://inspect in the address bar and then click on "Open dedicated DevTools for Node".
1. What are the main differences between the regular Chrome DevTools and the DevTools for Node?
   * The Console, Sources and Memory tabs are present and identical.
   * The Elements, Network, Performance, Application, Security and Audits tabs are not present in Node Devtools
   * Node Devtools also adds Connection (to specify a port to listen and attach to) and Profiler (to measure CPU usage) tabs
1. Using the built-in Node debug tool, what command do you use to continue the execution of your code?
   * `cont` or `c`
1. Which statement do you put in your code to set a breakpoint?
   * `debugger`