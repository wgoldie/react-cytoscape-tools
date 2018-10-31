# react-cytoscape-provider

This package attemps to provide a set of modules for integrating Cytoscape.JS into React applications.
Most of the existing Cytoscape/React integrations are outdated and have narrow applicability.
This package is designed to make integration with a diverse range of React applications possible by not assuming too much about your code.

Cytoscape I/O with React/Redux state is not covered (though possible to achieve in your own code).
In the future, features like this may be added, but as new features, not changes that break the existing use cases of the package.

## Modules 

### `CytoscapeContext`
A React context type that stores a Cytoscape object.

#### Keys:
- `cy`: The Cytoscape object (created by invoking the library's default export function)
- `setCy`: A setter function for `cy`.

### `<CytoscapeProvider>...</CytoscapeProvider>`
A provider element that will manage the CytoscapeContext for its children.
You can also manage CytoscapeContext with your own provider, using the `<CytoscapeContext.Provider>` element.

### `<CytoscapeGate gateComponent={...}>...</CytoscapeGate>`
A gating component that will conditionally render children
once the 'cy' element of the parent Cytoscape context has been set.
Note that nested CytoscapeProviders will required correspondingly nested CytoscapeGates,
as the youngest parent CytoscapeProvider will provide context for any given consumer.

#### Props:
- `children`: Required, React child element(s).
- `gateComponent`: Optional, the component to render when the gate is 'locked'
  ('cy' is not yet initialized);

### `<CytoscapeView cytoscape={null} cyInitJSON={{}} style={{}} className="">...</CytoscapeView>`
A component that renders a div and attaches a new Cytoscape object to it, registering that Cytoscape instance to its `CytoscapeContext`.

You do not need to use CytoscapeView to use the rest of these modules,
it is mainly a convenience element that attaches a Cytoscape object to its rendered div on mount.

#### Props:
- `cytoscape`: Optional, a copy of the Cytoscape library's default export,
  which will be used to initialize the Cytoscape object for this view.
  This is useful for if, for instance, you need to register Cytoscape plugins.
  By default, the peer-dependency-installed version of Cytoscape will be imported and used.
- `cyInitJSON`: Optional, a JSON object that will be used to initialize Cytoscape.
  You can provide keys like `style`, `elements`, etc. here. 
  Note that passing the `container` key will override the div used to
  attach Cytoscape and possibly break things.
  If you want to do this for some reason, pass in a DOM node at that key.
  By default, only the `container` element is used to initialize Cytoscape.
- `style`: Optional, style for the Cytoscape div.
 Note that styling the Cytoscape *instance* should be done through `cyInitJSON`.
 By default, no style is passed to the div.
- `className`: Optional, class name string for the Cytoscape div.
 By default, the div has no class name.
- `children`: Optional, React child element(s).
 They will be rendered as children of the Cytoscape div.

## Roadmap:

- [ ] Example project
- [ ] React Native support
- [ ] Better initialization hooks
- [ ] Publish to NPM
