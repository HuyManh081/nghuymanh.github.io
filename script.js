// Tạo các node (thiết bị mạng)
var nodes = new vis.DataSet([
    {id: 1, label: 'Router Core', shape: 'image', image: 'https://img.icons8.com/color/48/router.png'},
    {id: 2, label: 'Switch L2', shape: 'image', image: 'https://img.icons8.com/color/48/switch.png'},
    {id: 3, label: 'PC Admin', shape: 'image', image: 'https://img.icons8.com/color/48/workstation.png'},
    {id: 4, label: 'Server', shape: 'image', image: 'https://img.icons8.com/color/48/server.png'},
    {id: 5, label: 'Laptop Guest', shape: 'image', image: 'https://img.icons8.com/color/48/laptop.png'}
]);

// Tạo các cạnh (dây cáp kết nối)
var edges = new vis.DataSet([
    {from: 1, to: 2, label: 'Gig0/0'},
    {from: 2, to: 3, label: 'Fa0/1 (VLAN 10)'},
    {from: 2, to: 4, label: 'Fa0/2 (VLAN 20)'},
    {from: 1, to: 5, label: 'Wi-Fi', dashes: true} // Kết nối không dây
]);

// Vẽ lên màn hình
var container = document.getElementById('mynetwork');
var data = { nodes: nodes, edges: edges };
var options = {
    nodes: {
        borderWidth: 2,
        size: 30
    }
};
var network = new vis.Network(container, data, options);