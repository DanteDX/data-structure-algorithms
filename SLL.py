class Node:
    def __init__(self,val):
        self.val = val
        self.next = None 

class SLL:
    def __init__(self):
        self.head = None 
        self.tail = None 
        self.length = 0

    def add(self,val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode 
            self.tail = newNode 
        else:
            self.tail.next = newNode 
            self.tail = newNode 
        
        self.length += 1
        return self 
    
    def remove(self):
        if self.head == None:
            return None 
        current = self.head
        newTail = current 
        while (current.next != None):
            newTail = current 
            current = current.next 
        self.tail = newTail
        self.tail.next = None
        self.length -= 1
        if self.length == 0:
            self.head = None 
            self.tail = None
        return current
    
    def shift(self):
        if self.head == None:
            return None 
        currentHead = self.head 
        self.head = currentHead.next 
        self.length -= 1
        if self.length == 0:
            self.tail = None 
        return currentHead
    
    def unshift(self, val):
        newNode = Node(val)
        if self.head == None:
            self.head = newNode 
            self.tail = self.head 
        else:
            newNode.next = self.head
            self.head = newNode 
        self.length += 1
        return self
    
    def get(self,index):
        if index<0 or index>self.length:
            return None 
        counter = 0
        current = self.head 
        while counter != index:
            current = current.next 
            counter += 1
        return current 
    
    def get(self,index,val):
        foundNode = self.get(index)
        if foundNode != None:
            foundNode.val = val
            return True
        else:
            return False
        
    def insert(self, index, val):
        if index<0 or index>self.length:
            return False
        if index == self.length:
            self.push(val)
            return True 
        if index == 0:
            self.unshift(val)
            return True
        
        newNode = Node(val)
        prev = self.get(index - 1)
        temp = prev.next 
        prev.next = newNode 
        newNode.next = temp 
        self.length += 1
        return True 
    
    def remove(self, index):
        if index<0 or index>self.length:
            return None 
        if index==0:
            return self.shift()
        if index==self.length-1:
            return self.pop() 
        previousNode = self.get(index-1)
        removed = previousNode.next 
        previousNode.next = removed.next 
        self.length -= 1
        return removed
    
    def reverse(self):
        node = self.head
        self.head = self.tail 
        self.tail = node

        _next = None
        prev = None 
        for _ in range(0,self.length,1):
            _next = node.next 
            node.next = prev 
            prev = node 
            node = _next
        return self
    
    def print(self):
        arr = []
        current = self.head 
        while current.next != None:
            arr.append(current.val)
            current = current.next 
        arr.append(current.val)
        print("Total value list is ", arr)

SLL_new = SLL()
SLL_new.add(1)
SLL_new.add(2)
SLL_new.add(3)
SLL_new.print()
print(SLL_new.length)