import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'card',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Card = require('./containers/CardContainer').default
      const reducer = require('./modules/card').default

      injectReducer(store, { key: 'card', reducer })

      /*  Return getComponent   */
      cb(null, Card)

    /* Webpack named bundle   */
    }, 'card')
  }
})
