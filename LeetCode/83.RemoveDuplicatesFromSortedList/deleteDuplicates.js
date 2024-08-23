export class ListNode {
  constructor(val, next) {
    if (Array.isArray(val)) {
      this.val = val[0] !== undefined ? val[0] : 0;
      let current = this;
      for (let i = 1; i < val.length; i++) {
        current.next = new ListNode(val[i]);
        current = current.next;
      }
    } else {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  // Override toString to provide a custom string representation
  toString() {
    let current = this;
    const values = [];
    while (current) {
      values.push(current.val);
      current = current.next;
    }
    return values.join(" -> ");
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const deleteDuplicates = (head) => {
  if (!head) return null; // If the list is empty, return null

  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      // Skip the next node since it's a duplicate
      current.next = current.next.next;
    } else {
      // Move to the next unique node
      current = current.next;
    }
  }

  return head;
};

// Example usage
const list = new ListNode([1, 1, 2]);
console.log("🚀 ~ deleteDuplicates:", `${deleteDuplicates(list)}`);
