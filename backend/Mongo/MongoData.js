const { DsaModel } = require("./MongoModels");
async function f() {
   const rll =
    "public class ReverseLinkedList {\n" +
    "    static class ListNode {\n" +
    "        int val;\n" +
    "        ListNode next;\n" +
    "        ListNode(int val) { this.val = val; }\n" +
    "    }\n" +
    "    public static ListNode reverseList(ListNode head) {\n" +
    "        ListNode prev = null;\n" +
    "        while (head != null) {\n" +
    "            ListNode nextNode = head.next;\n" +
    "            head.next = prev;\n" +
    "            prev = head;\n" +
    "            head = nextNode;\n" +
    "        }\n" +
    "        return prev;\n" +
    "    }\n" +
    "    public static void main(String[] args) {\n" +
    "        ListNode head = new ListNode(1);\n" +
    "        head.next = new ListNode(2);\n" +
    "        head.next.next = new ListNode(3);\n" +
    "        head = reverseList(head);\n" +
    "        while (head != null) {\n" +
    "            System.out.print(head.val + \" \");\n" +
    "            head = head.next;\n" +
    "        }\n" +
    "    }\n" +
    "}";

const mtsl =
    "public class MergeTwoSortedLists {\n" +
    "    static class ListNode {\n" +
    "        int val;\n" +
    "        ListNode next;\n" +
    "        ListNode(int val) { this.val = val; }\n" +
    "    }\n" +
    "    public static ListNode mergeTwoLists(ListNode l1, ListNode l2) {\n" +
    "        ListNode dummy = new ListNode(-1);\n" +
    "        ListNode current = dummy;\n" +
    "        while (l1 != null && l2 != null) {\n" +
    "            if (l1.val <= l2.val) {\n" +
    "                current.next = l1;\n" +
    "                l1 = l1.next;\n" +
    "            } else {\n" +
    "                current.next = l2;\n" +
    "                l2 = l2.next;\n" +
    "            }\n" +
    "            current = current.next;\n" +
    "        }\n" +
    "        current.next = (l1 != null) ? l1 : l2;\n" +
    "        return dummy.next;\n" +
    "    }\n" +
    "    public static void main(String[] args) {\n" +
    "        ListNode l1 = new ListNode(1);\n" +
    "        l1.next = new ListNode(2);\n" +
    "        l1.next.next = new ListNode(4);\n" +
    "        ListNode l2 = new ListNode(1);\n" +
    "        l2.next = new ListNode(3);\n" +
    "        l2.next.next = new ListNode(4);\n" +
    "        ListNode merged = mergeTwoLists(l1, l2);\n" +
    "        while (merged != null) {\n" +
    "            System.out.print(merged.val + \" \");\n" +
    "            merged = merged.next;\n" +
    "        }\n" +
    "    }\n" +
    "}";

const rl =
    "public class ReorderList {\n" +
    "    static class ListNode {\n" +
    "        int val;\n" +
    "        ListNode next;\n" +
    "        ListNode(int val) { this.val = val; }\n" +
    "    }\n" +
    "    public static void reorderList(ListNode head) {\n" +
    "        if (head == null || head.next == null) return;\n" +
    "        ListNode slow = head, fast = head.next;\n" +
    "        while (fast != null && fast.next != null) {\n" +
    "            slow = slow.next;\n" +
    "            fast = fast.next.next;\n" +
    "        }\n" +
    "        ListNode second = slow.next;\n" +
    "        slow.next = null;\n" +
    "        ListNode prev = null;\n" +
    "        while (second != null) {\n" +
    "            ListNode temp = second.next;\n" +
    "            second.next = prev;\n" +
    "            prev = second;\n" +
    "            second = temp;\n" +
    "        }\n" +
    "        ListNode first = head;\n" +
    "        second = prev;\n" +
    "        while (second != null) {\n" +
    "            ListNode temp1 = first.next;\n" +
    "            ListNode temp2 = second.next;\n" +
    "            first.next = second;\n" +
    "            second.next = temp1;\n" +
    "            first = temp1;\n" +
    "            second = temp2;\n" +
    "        }\n" +
    "    }\n" +
    "    public static void main(String[] args) {\n" +
    "        ListNode head = new ListNode(1);\n" +
    "        head.next = new ListNode(2);\n" +
    "        head.next.next = new ListNode(3);\n" +
    "        head.next.next.next = new ListNode(4);\n" +
    "        reorderList(head);\n" +
    "        while (head != null) {\n" +
    "            System.out.print(head.val + \" \");\n" +
    "            head = head.next;\n" +
    "        }\n" +
    "    }\n" +
    "}";

const rnnfeol =
    "public class RemoveNthNodeFromEnd {\n" +
    "    static class ListNode {\n" +
    "        int val;\n" +
    "        ListNode next;\n" +
    "        ListNode(int val) { this.val = val; }\n" +
    "    }\n" +
    "    public static ListNode removeNthFromEnd(ListNode head, int n) {\n" +
    "        ListNode dummy = new ListNode(0);\n" +
    "        dummy.next = head;\n" +
    "        ListNode first = dummy, second = dummy;\n" +
    "        for (int i = 0; i <= n; i++) {\n" +
    "            first = first.next;\n" +
    "        }\n" +
    "        while (first != null) {\n" +
    "            first = first.next;\n" +
    "            second = second.next;\n" +
    "        }\n" +
    "        second.next = second.next.next;\n" +
    "        return dummy.next;\n" +
    "    }\n" +
    "    public static void main(String[] args) {\n" +
    "        ListNode head = new ListNode(1);\n" +
    "        head.next = new ListNode(2);\n" +
    "        head.next.next = new ListNode(3);\n" +
    "        head.next.next.next = new ListNode(4);\n" +
    "        head.next.next.next.next = new ListNode(5);\n" +
    "        head = removeNthFromEnd(head, 2);\n" +
    "        while (head != null) {\n" +
    "            System.out.print(head.val + \" \");\n" +
    "            head = head.next;\n" +
    "        }\n" +
    "    }\n" +
    "}";

const clwrp =
   "import java.util.HashMap;\n" +
   "public class CopyListWithRandomPointer {\n" +
   "    static class Node {\n" +
   "        int val;\n" +
   "        Node next, random;\n" +
   "        Node(int val) { this.val = val; }\n" +
   "    }\n" +
   "    public static Node copyRandomList(Node head) {\n" +
   "        if (head == null) return null;\n" +
   "        HashMap<Node, Node> map = new HashMap<>();\n" +
   "        Node current = head;\n" +
   "        while (current != null) {\n" +
   "            map.put(current, new Node(current.val));\n" +
   "            current = current.next;\n" +
   "        }\n" +
   "        current = head;\n" +
   "        while (current != null) {\n" +
   "            map.get(current).next = map.get(current.next);\n" +
   "            map.get(current).random = map.get(current.random);\n" +
   "            current = current.next;\n" +
   "        }\n" +
   "        return map.get(head);\n" +
   "    }\n" +
   "}";
   
   const dsaData = [
      {
         Topic: "Linked List",
         QA: [
            { question: "Reverse Linked List", answer: rll },
            { question: "Merge Two Sorted Lists", answer: mtsl },
            { question: "Reorder List", answer: rl },
            { question: "Remove Nth Node From End of List", answer: rnnfeol },
            { question: "Copy List With Random Pointer", answer: clwrp },
         ],
      },
   ];
   await DsaModel.insertMany(dsaData);
}
module.exports = f;
