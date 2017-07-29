This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It's intented to reproduce the error explained here:
https://github.com/nfl/react-metrics/issues/49

Do:

```
$ yarn
$ yarn test
```

Then press 'a' to trigger a test run, it should raise this error:

```
Invariant Violation: `metrics` should only be added once to the root level component. You have added to both App and App.

    at invariant (node_modules/fbjs/lib/invariant.js:44:15)
    at MetricsContainer.componentWillMount (node_modules/react-metrics/lib/react/metrics.js:94:49)
    at node_modules/react-test-renderer/lib/shallow/ReactCompositeComponent.js:347:23
    at measureLifeCyclePerf (node_modules/react-test-renderer/lib/shallow/ReactCompositeComponent.js:75:12)
    at ShallowComponentWrapper.performInitialMount (node_modules/react-test-renderer/lib/shallow/ReactCompositeComponent.js:346:9)
    at ShallowComponentWrapper.mountComponent (node_modules/react-test-renderer/lib/shallow/ReactCompositeComponent.js:257:21)
    at Object.mountComponent (node_modules/react-test-renderer/lib/shallow/ReactReconciler.js:45:35)
    at ReactShallowRenderer._render (node_modules/react-test-renderer/lib/shallow/ReactShallowRenderer.js:138:23)
    at _batchedRender (node_modules/react-test-renderer/lib/shallow/ReactShallowRenderer.js:85:12)
    at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactDefaultBatchingStrategy.js:60:14)
    at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactUpdates.js:97:27)
    at ReactShallowRenderer.render (node_modules/react-test-renderer/lib/shallow/ReactShallowRenderer.js:112:18)
    at ReactShallowRenderer.render (node_modules/enzyme/build/react-compat.js:171:37)
    at node_modules/enzyme/build/ShallowWrapper.js:128:26
    at ReactDefaultBatchingStrategyTransaction.perform (node_modules/react-test-renderer/lib/shallow/Transaction.js:143:20)
    at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactDefaultBatchingStrategy.js:62:26)
    at Object.batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactUpdates.js:97:27)
    at ReactShallowRenderer.unstable_batchedUpdates (node_modules/react-test-renderer/lib/shallow/ReactShallowRenderer.js:130:25)
    at performBatchedUpdates (node_modules/enzyme/build/ShallowWrapper.js:103:21)
    at node_modules/enzyme/build/ShallowWrapper.js:127:9
    at withSetStateAllowed (node_modules/enzyme/build/Utils.js:284:3)
    at new ShallowWrapper (node_modules/enzyme/build/ShallowWrapper.js:126:38)
    at shallow (node_modules/enzyme/build/shallow.js:19:10)
    at Object.<anonymous>.it (src/App.test.js:14:39)
    at Promise.resolve.then.el (node_modules/p-map/index.js:42:16)
    at process._tickCallback (internal/process/next_tick.js:109:7)
```
