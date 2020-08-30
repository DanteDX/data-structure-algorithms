class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val,priority){
        this.values.push({val,priority});
        this.sort();
    }
    sort(){
        this.values.sort((a,b)=> a.priority - b.priority);
    }
    dequeue(){
        return this.values.shift();
    }
}


class WeightedGraph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }
    addEdge(v1,v2,w){
        if(this.adjacencyList[v1] && this.adjacencyList[v2]){
            if(this.adjacencyList[v1].some(x=> x['node'] === v2)){
                return false;
            }
            this.adjacencyList[v1].push({'node':v2,'weight':w});
            this.adjacencyList[v2].push({'node':v1,'weight':w});
            return true;
        }
        return undefined;
    }
    Dijkstra(start,finish){
        let nodes = new PriorityQueue();
        let distances = {};
        let previous = {};
        let path = [];
        let smallest;

        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex,0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }
            previous[vertex] = null;
        }

        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest]!==Infinity){
                for(let n in this.adjacencyList[smallest]){
                    let nextNode = this.adjacencyList[smallest][n];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]){
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor,candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


graph.Dijkstra("A", "E");

// ["A", "C", "D", "F", "E"]