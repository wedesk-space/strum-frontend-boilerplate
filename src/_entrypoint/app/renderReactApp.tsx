import Root from './Root'
import { render } from 'react-dom'

export function renderReactApp() {
  render(<Root />, document.getElementById('app'))

  if ((module as any).hot) {
    (module as any).hot.accept('./Root', () => {
      // eslint-disable-next-line global-require
      const NextRoot = require('./Root').default
      render(
        <NextRoot />,
        document.getElementById('app'),
      )
    })
  }
}
