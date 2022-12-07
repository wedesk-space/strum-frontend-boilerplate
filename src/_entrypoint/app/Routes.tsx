import { Route, Switch } from 'react-router-dom'

import { Dashboard } from 'src/pages/dashboard'

export const routes = {
  Auth: '/auth',
  Dashboard: '/',
  Admin: '/admin',
  Article: '/article',
  NotFound: '/404',
}

const Routes = () => {
  return (
    <Switch>
      <Route exact path={routes.Dashboard} component={Dashboard} />
    </Switch>
  )
}

export default Routes
