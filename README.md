# react-cytoscape-tools

This package attemps to provide a set of modules for integrating Cytoscape.JS into React applications.
Most of the existing Cytoscape/React integrations are outdated and have narrow applicability.
This package is designed to make integration with a diverse range of React applications possible by not assuming too much about your code.

## Modules 

Rather than providing a single element with many props and complex behavior, 
the modules in this package allow you to integrate CytoscapeJS into a React app with varying levels of abstraction.

The simplest and most abstract components are described first.
At each level of abstraction,
the element's source code provides an example of how you can implement similar functionality using lower level primitives from
`react-cytoscape-provider`.
For example, if you need a modified version of `CytoscapeView`,
the source file in this repo will show you have to achieve this using `CytoscapeElement`, `CytoscapeController`, and `CytoscapeGate`.

### `<Cytoscape>`
An all-in-one component that attaches, renders, and manages a Cytoscape view.

#### Props:
- `cytoscape`: Optional, a copy of the Cytoscape library's default export,
  which will be used to initialize the Cytoscape object for this view.
  This is useful for if, for instance, you need to register Cytoscape plugins.
  By default, the peer-dependency-installed version of Cytoscape will be imported and used.
  Note that changes to this prop do not result in updates/rerenders/reattachments
  (this behavior is anticipated and may change in a pre-1.0.0 minor release).
- `cyJSON`: Optional, a JSON object that will be passed to Cytoscape.
  You can provide keys like `style`, `elements`, etc. here. 
  Note that passing the `container` key will override the div used to
  attach Cytoscape and possibly break things.
  If you want to do this for some reason, pass in a DOM node at that key.
  By default, only the `container` element is used to initialize Cytoscape.
- `cyInitJSON`: Optional, a JSON object used to initialize Cytoscape.
  By default, the value of `cyJSON` is used.
  Note that changes to this prop do not reliably result in updates/renders/reattachements.
- `style`: Optional, style for the Cytoscape div.
 Note that styling the Cytoscape *instance* should be done through `cyInitJSON`.
 By default, no style is passed to the div.
- `className`: Optional, class name string for the Cytoscape div.
 By default, the div has no class name.
- `children`: Optional, React child element(s).
 They will be rendered as children of the Cytoscape div.

### `CytoscapeContext`
A React context type that stores a Cytoscape object.

#### Keys:
- `cy`: The Cytoscape object (created by invoking the library's default export function)
- `setCy`: A setter function for `cy`.

### `<CytoscapeProvider>`
A provider element that will manage the CytoscapeContext for its children.
You can also manage CytoscapeContext with your own provider,
created using the `<CytoscapeContext.Provider>` element.

### `<CytoscapeGate>`
A gating component that will conditionally render children
once the `cy` element of the parent Cytoscape context has been set.
Note that nested CytoscapeProviders will required correspondingly nested CytoscapeGates,
as the youngest parent CytoscapeProvider will provide context for any given consumer.

#### Props:
- `children`: Required, React child element(s).
  They will be rendered when the gate is 'unlocked'(i.e., when 'cy' is initialized).
- `gateComponent`: Optional, the component to render when the gate is 'locked'
  (i.e., when `cy` is not yet initialized). By default, an empty div is rendered.

### `<CytoscapeView>`
An element that attaches and renders a Cytoscape view.
Cytoscape will be updated (using `cy.json(cyJSON)`) on prop changes.
It must be rendered with a `CytoscapeContext` context, such as from `<CytoscapeProvider>`.
This allows you to achieve the same behavior as `<Cytoscape>`,
but with your own context management,
or with other context subscribers that are not children of the Cytoscape div.

#### Props:
- `cytoscape`, `cyJSON`, `cyInitJSON`, `style`, `className`, `children`:
 Same definitions as in `<Cytoscape>`


### `<CytoscapeElement>`
A component that renders a div and attaches a new Cytoscape object to it,
registering that Cytoscape instance to its `CytoscapeContext`.
It must be rendered with a `CytoscapeContext` context, such as from `<CytoscapeProvider>`.
This allows you to achieve the same behavior as `<CytoscapeView>`,
but with your own Cytoscape state management.

#### Props:
- `cytoscape`, `cyInitJSON`, `style`, `className`, `children`:
 Same definitions as in `<Cytoscape>`.

### `<CytoscapeController>`
A component that updates the parent context's Cytoscape state on prop changes (and mount).
Optionally, children may be provided (otherwise an empty div is rendered).
It must be rendered with a `CytoscapeContext` context, such as from `<CytoscapeProvider>`.
It should only be rendered if `cy` is initialized for the parent `CytoscapeContext` context - as with `<CytoscapeGate>`.

### Props:
- `cyJSON`: Same definition as in `<Cytoscape>`.
- `children`: Optional, React child element(s). 

### `PropTypes`
Prop type definitions for Cytoscape and this module.

### Types:
- cyId: Valid ID values for Cytoscape elements
- cyJSON: Valid initialization/update object for Cytoscape
 (using `cytoscape(...)` or `cy.json(...)`).
 Note that this doesn't enforce serializability or proper JSON,
 because Cytoscape allows non-serializable objects (functions, promises) in several keys.^ww
- cyNode: Valid init/update object for a node
- cyEdge: Valid init/update object for an edge
- cyElement: Valid init/update object for a Cytoscape element
- cyLayout: Valid init/update object for layout
- cyStyle: Valid init/update object for style

## Roadmap:

- [ ] Babel transpile
- [ ] Example project
- [ ] React Native support
- [ ] Publish to NPM
