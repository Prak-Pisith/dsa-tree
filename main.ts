/* 
  Tree Data Structure

*/

// Family Node Footprint
class FamilyTreeNode {
  constructor (public value: string, public children: FamilyTreeNode[] = []) {}
}

// Create family members
const greatGrandParent = new FamilyTreeNode('Great-Grand-Parent');
const grandParent = new FamilyTreeNode('Grand-Parent');
const parents = new FamilyTreeNode('Parents');
const you = new FamilyTreeNode('You');
const sibling1 = new FamilyTreeNode('Sibling-1');
const sibling2 = new FamilyTreeNode('Sibling-2');

// Build Family Tree
greatGrandParent.children.push(grandParent);
grandParent.children.push(parents);
parents.children.push(you);
parents.children.push(sibling1);
parents.children.push(sibling2);

console.log('Family Tree');
console.log(greatGrandParent);