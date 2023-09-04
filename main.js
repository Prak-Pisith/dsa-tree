/*
  Tree Data Structure

*/
// Family Node Footprint
var FamilyTreeNode = /** @class */ (function () {
    function FamilyTreeNode(value, children) {
        if (children === void 0) { children = []; }
        this.value = value;
        this.children = children;
    }
    return FamilyTreeNode;
}());
// Create family members
var greatGrandParent = new FamilyTreeNode('Great-Grand-Parent');
var grandParent = new FamilyTreeNode('Grand-Parent');
var parents = new FamilyTreeNode('Parents');
var you = new FamilyTreeNode('You');
var sibling1 = new FamilyTreeNode('Sibling-1');
var sibling2 = new FamilyTreeNode('Sibling-2');
// Build Family Tree
greatGrandParent.children.push(grandParent);
grandParent.children.push(parents);
parents.children.push(you);
parents.children.push(sibling1);
parents.children.push(sibling2);
console.log('Family Tree');
console.log(greatGrandParent);
