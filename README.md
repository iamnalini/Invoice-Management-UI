# Invoice Management UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.5.

**OVERVIEW**

Open source web application for Invoice tracking to keep track of the invoice raised and their corresponding amount.

**FEATURES**

  **User**
  
    *	Can create, edit and delete their own invoice.
    *	Can view the invoices in the tabular format.
    *	In tabular view, the filter option is enabled for user to view the invoices in selected date range.
    *	In bar chart view, list the invoices with date on x-axis and number of invoices on y-axis.

  **ADMIN**
  
    *	Can only view invoices of all users.
    *	Can view your invoices in the tabular format.
    *	In tabular view the filter option is enabled for admin to view the invoices in selected date range.
    *	Can view the bar charts with date on x-axis and number of invoices on y-axis and also username on x-axis and number of invoices on y-axis.


**SCREENSHOTS**


  **Register**
  
  ![Register Screen](/register.png)
  
  **Login**
  
  ![Login Screen](/login.png)
  
  **User View**
  
  ![User View Screen](/userview.png)
  
  **Create Invoice View**
  
  ![Create Invoice Screen](/createinvoice.png)
  
  **Edit Invoice View**
  
  ![Edit Invoice Screen](/edit.png)
  
  **Chart View of User**
  
  ![Bar graph for User Screen](/usergraph.png)
  
  **Admin View**
  
  ![Admin View Screen](/adminview.png)
  
  **Filter Option**
  
  ![Filter Option Screen](/filteroption.png)
  
  **Chart View of Admin**
  
  ![Admin Bargraph 1 Screen](/admingraph1.png)
  
  ![Admin Bargraph 2 Screen](/admingraph2.png)
  
  
**WHY**

The main reason I decided to build this is because I need a simple tool to create good looking invoices, estimates, and receipts but couldn't find one that suits my needs. I don't do invoicing for a living but I do need it occasionally so an ideal invoicing web app just needs to be good at one thing and one thing only, which is making invoices. 


**TECHNOLOGIES**

  * Angular v10
  * Node v12
  * PostgreSQL
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
