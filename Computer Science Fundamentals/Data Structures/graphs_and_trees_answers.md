
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
			let current = this.root
			let	found = false;
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
			let current = this.root;
			let	found = false;
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
			const newNode = new Node(value);
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
			let current = this.root;

			let found = false;
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
			let current = this.root;

			const found = false;
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

		lca(n1, n2) {
			let node = this.root;

			if (this.contains(n1) === false || this.contains(n2) === false) return 'Values not found in tree.';
			while (node != null) {
			if (node.value > n1 && node.value > n2) {
				node = node.left;
			} else if (node.value < n1 && node.value < n2) {
				node = node.right;
			} else { return node; }
			}
		}

		getPath(n1) {
			let root = this.root;
			const path = [root.value];

			while (root != null) {
			if (root.value > n1) {
				root = root.left;
				path.push(root.value);
			} else if (root.value < n1) {
				root = root.right;
				path.push(root.value);
			} else return path;
			}
		}

		findDistance(n1, n2) {
			const lca = this.lca(n1, n2);
			const path1 = this.getPath(n1).length;
			const path2 = this.getPath(n2).length;
			const lcaPath = this.getPath(lca.value).length;

			return path1 + path2 - (lcaPath * 2);
		}
		}

		const tree = new BinarySearchTree();
		tree.insert(8);
		tree.insert(3);
		tree.insert(10);
		tree.insert(1);
		tree.insert(6);
		tree.insert(14);
		tree.insert(4);
		tree.insert(7);
		tree.insert(13);
		tree.insert(12.2);
		tree.insert(22);
		tree.insert(35);
		tree.insert(42);
		tree.insert(9);
		tree.insert(3.5);

		tree.findDistance(3.5,42) //returns 9
		tree.findDistance(12.2,35) //returns 4
	```
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTIyNzc0MjMyMCwtNzEyNzA2NjYsLTQ0NT
A1NDgzMCwtNTAwNDY5MDAwLDEzMTE2MDg4ODgsODU2MzI2NzE0
LDg3MTY3MTA4NV19
-->