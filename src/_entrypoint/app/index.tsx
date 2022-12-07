import '../../assets/preloader.css'
import '../../styles/tailwind.css'

import * as dotenv from 'dotenv'

import { renderReactApp } from './renderReactApp'

/**
 * This is main entry point
 */
async function main() {
  /**
   * 1. Setup things before the first render and initialization
   *    Put initialization functions here before rendering
   */
  dotenv.config()
  renderReactApp()
}

// Here is the entry point of this application
main()
