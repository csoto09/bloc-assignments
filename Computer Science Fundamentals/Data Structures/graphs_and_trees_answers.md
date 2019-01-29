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

1. Given a Binary Search Tree and a value, write a function that checks to see whether the value exists within the tree.

	``` JavaScript
	class Node {
	    constructor(value) {
	        this.value = value;
	        this.left = null;
	        this.right = null;
	    }
	}

	class BinarySearchTree {
	    constructor() {
	        this.root = null;
	    }
	    insert(value) {
	        let newNode = new Node(value);
	        if (this.root === null) {
	            this.root = newNode;
	            return this;
	        }
	        let current = this.root;
	        while (true) {
	            if (value === current.value) return undefined;
	            if (value < current.value) {
	                if (current.left === null) {
	                    current.left = newNode;
	                    return this;
	                }
	                current = current.left;
	            } else {
	                if (current.right === null) {
	                    current.right = newNode;
	                    return this;
	                }
	                current = current.right;
	            }
	        }
	    }
	    find(value) {
	        if (this.root === null) return false;
	        let current = this.root,
	            found = false;
	        while (current && !found) {
	            if (value < current.value) {
	                current = current.left;
	            } else if (value > current.value) {
	                current = current.right;
	            } else {
	                found = true;
	            }
	        }
	        if (!found) return undefined;
	        return current;
	    }
	    contains(value) {
	        if (this.root === null) return false;
	        let current = this.root,
	            found = false;
	        while (current && !found) {
	            if (value < current.value) {
	                current = current.left;
	            } else if (value > current.value) {
	                current = current.right;
	            } else {
	                return true;
	            }
	        }
	        return false;
	    }
	}

	let tree = new BinarySearchTree();
	tree.insert(8)
	tree.insert(3)
	tree.insert(10)
	tree.insert(1)
	tree.insert(6)
	tree.insert(14)
	tree.insert(4)
	tree.insert(7)
	tree.insert(13)


	tree.contains(23) //false
	tree.contains(10) //true

	```
2. Given a Binary Search Tree and two nodes,  `n1`  and  `n2`, write a function that finds the distance between the two nodes.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTcxMjcwNjY2LC00NDUwNTQ4MzAsLTUwMD
Q2OTAwMCwxMzExNjA4ODg4LDg1NjMyNjcxNCw4NzE2NzEwODVd
fQ==
-->