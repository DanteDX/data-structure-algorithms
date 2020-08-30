class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
    }
    addEdge(v1,v2){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(this.adjacencyList[v1].includes(v2)){
                return false;
            }
            this.adjacencyList[v1].push(v2);
            this.adjacencyList[v2].push(v1);
            return true;
        }
        return undefined;
    }
    removeEdgeMine(v1,v2){
        if(!this.adjacencyList[v2] || !this.adjacencyList[v1]){
            return false;
        }
        this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2),1);
        this.adjacencyList[v2].splice(this.adjacencyList[v2].indexOf(v1),1);
        return true;
    }
    removeEdge(v1,v2){
        if(!this.adjacencyList[v2] || !this.adjacencyList[v1]){
            return false;
        }
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        return true;
    }

    removeVertexMine(v1){
        if(!this.adjacencyList[v1]){
            return undefined;
        }
        this.adjacencyList[v1].forEach(v => {
            this.adjacencyList[v].splice(this.adjacencyList[v].indexOf(v1),1);
        });
        delete this.adjacencyList[v1];
        return true;
    }
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex,adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    depthFirstRecursive(start){
        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        function dfs(vertex){
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(n => {
                if(!visited[n]){
                    dfs(n);
                }
            })
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        visited[start] = true;

        while(stack.length){
            let current = stack.pop();
            result.push(current);
            this.adjacencyList[current].forEach(n => {
                if(!visited[n]){
                    visited[n] = true;
                    stack.push(n);
                }
            })
        }
        return result;
    }

    breadthFirst(start){
        let queue = [start];
        let result = [];
        let visited = {};
        visited[start] = true;

        while(queue.length){
            let current = queue.shift();
            result.push(current);
            this.adjacencyList[current].forEach(n => {
                if(!visited[n]){
                    visited[n] = true;
                    queue.push(n);
                }
            })
        }
        return result;
    }

}

var g = new Graph();
g.addVertex('Dhaka');
g.addVertex('Rajshahi');
g.addVertex('Chittagong');
g.addVertex('Khulna');

g.addEdge('Dhaka','Rajshahi');
g.addEdge('Dhaka','Chittagong');
g.addEdge('Dhaka','Khulna');
g.addEdge('Rajshahi','Khulna');
g.addEdge('Khulna','Chittagong');
