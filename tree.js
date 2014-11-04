function Node(val) {
  this.value = val,
  this.children = [];

  return this;
}

Node.prototype.add = function(val) {
  this.children.push(new Node(val));
  return this;
}

Node.prototype.isLeaf = function() {
  return !this.children.length;
}

function Tree(val) {
  this.root = new Node(val);
  this.children = this.root.children;

  this.toString = function() {
    return "hi";
  }

  return this;
}

var searchTree = function(tree, value){
  search(tree.root, value);
};

var search = function(node, value){
  if(node.value == value){
    console.log('Num found: ' + value);
  }
  for(var i = 0; i < node.children.length; i++){
    search(node.children[i], value);
  }
};

//reconstruct image
function getTestTree() {
  var tree = new Tree(2);
  var root = tree.root;
  lvl1 = root.add(7).add(5);
  var node7 = lvl1.children[0];

  node7.add(2).add(6).children[1].add(5).add(11);

  var node5 = lvl1.children[1];
  node5.add(9).children[0].add(4);

  return tree;
}

var tree = getTestTree ();
console.log(tree.toString());
console.log(searchTree(tree, 5));
