// Linked List Node class
class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  // Convert array to linked list
  function buildLinkedList(arr) {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new Node(arr[i]);
      current = current.next;
    }
    return head;
  }
  
  // Check palindrome using stack
  function isPalindromeStack(head) {
    let stack = [];
    let current = head;
  
    // Push all values to stack
    while (current) {
      stack.push(current.value);
      current = current.next;
    }
  
    // Reset current and compare with stack
    current = head;
    while (current) {
      if (current.value != stack.pop()) return false;
      current = current.next;
    }
    return true;
  }
  
  // Optional: Check palindrome using recursion
  function isPalindromeRecursive(head) {
    let front = { node: head };
  
    function recurse(current) {
      if (current === null) return true;
      let isPal = recurse(current.next) && current.value === front.node.value;
      front.node = front.node.next;
      return isPal;
    }
  
    return recurse(head);
  }
  
  function checkPalindrome() {
    const input = document.getElementById("listInput").value.trim();
    const arr = input.split(",").map(x => x.trim());
    if (arr.length === 0 || arr[0] === "") {
      document.getElementById("result").innerText = "Please enter values.";
      return;
    }
  
    const head = buildLinkedList(arr);
    const result = isPalindromeStack(head); // or use isPalindromeRecursive(head)
    document.getElementById("result").innerText =
      result ? "✅ It's a Palindrome!" : "❌ Not a Palindrome.";
  }