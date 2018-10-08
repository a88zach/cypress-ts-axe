// importing into the TS module that merged module interface does not work
// https://github.com/cypress-io/add-cypress-custom-command-in-typescript/issues/2
// import {foo, foo2} from './actions'
// but requiring in CommonJS style works
; (() => {
    const { checkAccessibility } = require('./actions')
    const _ = Cypress._

    // add commands to Cypress
    Cypress.Commands.add('checkAccessibility', checkAccessibility)
})()

// add new command to the existing Cypress interface
declare namespace Cypress {
    interface Chainable {
        /**
         *
         * @memberof Chainable
         * @example
         *    cy.checkAccessibility();
         */
        checkAccessibility: (done: MochaDone) => void;
    }
}