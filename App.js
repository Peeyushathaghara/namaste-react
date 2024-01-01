const heading = React.createElement('parent', {
    "id": "parent",
    "abcp": "eaxy"
}, [ 
    (React.createElement('child1', {"id":"child1"}, 
    [(React.createElement('h1', {}, 'I m an h1 tag')),
    (React.createElement('h2', {}, 'I m an h2 tag'))])),
    (React.createElement('child2', {"id":"child2"}, 
    [(React.createElement('h1', {}, 'I m an h1 tag')),
    (React.createElement('h2', {}, 'I m an h2 tag'))]))
]
)

// console.log(heading)
const root = ReactDOM.createRoot(document.getElementById('root'))
// console.log(root)
root.render(heading)