# Graphs and Trees

1. What is a binary tree and what makes it unique to other trees?
   * Binary tree is a tree-like data structure unique to others in that each node can only point to up to two child nodes.
2. What is a heuristic?
   * a "best guess" approach to solving a problem, as opposed to having to calculate all possible approaches, potentially at the expense of accuracy
3. What is another problem besides the shortest-path problem that requires the use of heuristics?
   * some theoretical applications of heuristics include the Null-move heuristic, N-queens problem and the traveling salesman problem.
   * real life applications include maps (as discussed in checkpoint), search engines and antivirus programs.
4. What is the difference between a depth-first search and a breadth-first search?
	* DFS travels *down* a single branch while looking for a specific node. If not found, it switches to an adjacent branch and travels up to continue the search.
	* BFS travels through a single row while searching. If not found, it goes down a row before continuing to search laterally.
5. Explain in your own words what an undirected, a-cyclic, unweighted graph is.
	* undirected - able to move back and forth through the graph
	* a-cyclic - defined start and finish. does not loop to beginning when reaching the leaf node.
	* unweighted - no penalty to move from one node to another.
6. What kind of graph is a binary search tree? 
	* directed, a-cyclic, unweighted

## Programming Questions
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NjU3ODAzNDQsLTUwMDQ2OTAwMCwxMz
ExNjA4ODg4LDg1NjMyNjcxNCw4NzE2NzEwODVdfQ==
-->