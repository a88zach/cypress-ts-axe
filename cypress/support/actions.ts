import * as axe from 'axe-core';

export function checkAccessibility(done: MochaDone) {
    cy.window()
        .then((win) => {
            let window: any = win;
            window.eval(axe.source);

            return window.axe.run().then((results: axe.AxeResults) => {
                let errors = '';
                results.violations.forEach(violation => {
                    errors = errors + `${violation.description}\n`
                });

                expect(results.violations.length).to.equal(0, errors);
                done();
            });
        });
}