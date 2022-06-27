/* LEET-CODE #572
    Given the roots of two binary trees root and subRoot, 
    return true if there is a subtree of root with the same structure 
    and node values of subRoot and false otherwise.

    A subtree of a binary tree tree is a tree that consists of a node in tree 
    and all of this node's descendants. The tree tree could also be considered 
    as a subtree of itself.
 */


/**
 * Definition for a binary tree node.
 *  function TreeNode(val, left, right) {
 *      this.val = (val===undefined ? 0 : val)
 *      this.left = (left===undefined ? null : left)
 *      this.right = (right===undefined ? null : right)
 *  }
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 const isSubtree = (root, subRoot) => {
    let helper = (rootTree, subRootTree) => {
        if(!rootTree && ! subRootTree) return true;
        
        if(rootTree && subRootTree && rootTree.val === subRootTree.val){
            return (helper(rootTree.left, subRootTree.left)) && (helper(rootTree.right, subRootTree.right));
        }
        return false;
    }
    
    if(!subRoot) return true;
    if(!root) return false;
    
    if(helper(root, subRoot)) return true;
    
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};