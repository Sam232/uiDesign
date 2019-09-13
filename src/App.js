import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import $ from "jquery";
import AdminLogin from "./components/admin/Login/Login";
import Dashboard from './components/admin/Dashboard/Dashboard';
import MobileMoney from './components/admin/Transactions/MobileMoney';
import DebitCard from './components/admin/Transactions/DebitCard';
import AirtelTigo from './components/admin/Transactions/DetailedTransactions/AirtelTigo';
import Glo from './components/admin/Transactions/DetailedTransactions/Glo';
import MTN from './components/admin/Transactions/DetailedTransactions/MTN';
import Vodafone from './components/admin/Transactions/DetailedTransactions/Vodafone';
import MasterCard from './components/admin/Transactions/DetailedTransactions/MasterCard';
import VisaCard from './components/admin/Transactions/DetailedTransactions/VisaCard';
import Businesses from './components/admin/EndUsers/Businesses';
import Business from './components/admin/EndUsers/Business';
import Clients from './components/admin/EndUsers/Clients';
import Client from './components/admin/EndUsers/Client';
import ServiceRequests from './components/admin/ServiceRequest/ServiceRequests';
import ServiceRequest from './components/admin/ServiceRequest/ServiceRequest';
import Supports from './components/admin/Support/Supports';
import Support from './components/admin/Support/Support';
import FailedTransactions from './components/admin/Transactions/FailedTransactions/Transactions';
import FailedTransaction from './components/admin/Transactions/FailedTransactions/Transaction';
import SuccessfulTransactions from './components/admin/Transactions/SuccessfulTransaction/Transactions';
import AdminUpdate from './components/admin/Update/UpdateDetails';
import Checkout from './components/checkout/Checkout';
import PaymentStatus from './components/checkout/PaymentStatus/PaymentStatus';
import BusinessLogin from './components/store/Login/Login';
import BusinessRegister from './components/store/Register/Register';
import BusinessDashboard from './components/store/Dashboard/Dashboard';
import BusinessDCTransactions from './components/store/Transactions/DebitCard';
import BusinessMMTransactions from './components/store/Transactions/MobileMoney';
import BusinessMCTransactions from './components/store/Transactions/DetailedTransactions/MasterCard';
import BusinessVCTransactions from './components/store/Transactions/DetailedTransactions/VisaCard';
import BusinessMTNTransactions from './components/store/Transactions/DetailedTransactions/MTN';
import BusinessATOTransactions from './components/store/Transactions/DetailedTransactions/AirtelTigo';
import BusinessVODTransactions from './components/store/Transactions/DetailedTransactions/Vodafone';
import BusinessGLOTransactions from './components/store/Transactions/DetailedTransactions/Glo';
import BusinessSUCCTransactions from './components/store/Transactions/SuccessfulTransaction/Transactions';
import BusinessFAILTransactions from './components/store/Transactions/FailedTransactions/Transactions';
import BusinessFAILTransaction from './components/store/Transactions/FailedTransactions/Transaction';
import ConfigurePayment from './components/store/Payment/ConfigPayment';
import ConfigureAPIs from './components/store/ConfigureAPIs/ConfigureAPIs';
import BusinessUpdate from './components/store/Update/Update';
import FAQs from './components/store/FAQs/FAQs';
import BusinessSupport from './components/store/Support/Support';
import ForgotPassword from './components/store/ForgotPassword/ForgotPassword';
import AdminForgotPassword from './components/admin/ForgotPassword/ForgotPassword';
import TransactionPeriod from './components/admin/TransactionPeriod/TransactionPeriod';
import Transaction from './components/admin/TransactionPeriod/Transaction';
import BusinessTransactionPeriod from './components/store/TransactionPeriod/TransactionPeriod';
import BusinessTransaction from './components/store/TransactionPeriod/Transaction';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {/*Admin Routes*/}
        <Route exact path="/admin/login-129004801" component={AdminLogin} />
        <Route exact path="/dashboard/statistics/:statsName" component={Dashboard} />
        <Route exact path="/dashboard/transactions/mobile-money" component={MobileMoney} /> 
        <Route exact path="/dashboard/transactions/debit-card" component={DebitCard} /> 
        <Route exact path="/dashboard/transactions/mobile-money/airteltigo" component={AirtelTigo} />
        <Route exact path="/dashboard/transactions/mobile-money/glo" component={Glo} /> 
        <Route exact path="/dashboard/transactions/mobile-money/mtn" component={MTN} />
        <Route exact path="/dashboard/transactions/mobile-money/vodafone" component={Vodafone} /> 
        <Route exact path="/dashboard/transactions/debit-card/mastercard" component={MasterCard} /> 
        <Route exact path="/dashboard/transactions/debit-card/visacard" component={VisaCard} /> 
        <Route exact path="/dashboard/registered-businesses" component={Businesses} /> 
        <Route exact path="/dashboard/business/:id" component={Business} />
        <Route exact path="/dashboard/tracked-checkouts" component={Clients} /> 
        <Route exact path="/dashboard/client/:id" component={Client} />  
        <Route exact path="/dashboard/service-requests/" component={ServiceRequests} /> 
        <Route exact path="/dashboard/service-request/:id" component={ServiceRequest} /> 
        <Route exact path="/dashboard/user-supports" component={Supports} />  
        <Route exact path="/dashboard/user-support/:id" component={Support} />
        <Route exact path="/dashboard/successful-transactions" component={SuccessfulTransactions} /> 
        <Route exact path="/dashboard/failed-transactions" component={FailedTransactions} /> 
        <Route exact path="/dashboard/transaction-period/" component={TransactionPeriod} /> 
        <Route exact path="/dashboard/failed-transaction/:id" component={FailedTransaction} />
        <Route exact path="/dashboard/transaction-period/:id" component={Transaction} /> 
        <Route exact path="/dashboard/admin/profile" component={AdminUpdate} />  

        {/* Store */}
        <Route exact path="/" component={BusinessLogin} />
        <Route exact path="/business/login" component={BusinessLogin} />
        <Route exact path="/business/register" component={BusinessRegister} />
        <Route exact path="/business/dashboard/statistics/:statsName" component={BusinessDashboard} />
        <Route exact path="/business/dashboard/debit-card/transactions" component={BusinessDCTransactions} />
        <Route exact path="/business/dashboard/mobile-money/transactions" component={BusinessMMTransactions} />
        <Route exact path="/business/dashboard/transactions/debit-card/mastercard" component={BusinessMCTransactions}/>
        <Route exact path="/business/dashboard/transactions/debit-card/visacard" component={BusinessVCTransactions}/>

        <Route exact path="/business/dashboard/transaction-period" component={BusinessTransactionPeriod} />
        <Route exact path="/business/dashboard/transaction-period/:id" component={BusinessTransaction} />
        
        <Route exact path="/business/dashboard/transactions/mobile-money/mtn" component={BusinessMTNTransactions}/>
        <Route exact path="/business/dashboard/transactions/mobile-money/airtelTigo" component={BusinessATOTransactions}/>
        <Route exact path="/business/dashboard/transactions/mobile-money/vodafone" component={BusinessVODTransactions}/>
        <Route exact path="/business/dashboard/transactions/mobile-money/glo" component={BusinessGLOTransactions}/>

        <Route exact path="/business/dashboard/transactions/succssful" component={BusinessSUCCTransactions}/>
        <Route exact path="/business/dashboard/transactions/failed" component={BusinessFAILTransactions}/>
        <Route exact path="/business/dashboard/failed-transaction/:id" component={BusinessFAILTransaction}/>

        <Route exact path="/business/dashboard/configure-payment" component={ConfigurePayment}/>
        <Route exact path="/business/dashboard/configure-apis" component={ConfigureAPIs}/>

        <Route exact path="/business/dashboard/update" component={BusinessUpdate}/>

        <Route exact path="/business/dashboard/faqs" component={FAQs} />
        <Route exact path="/business/dashboard/support" component={BusinessSupport} />

        <Route exact path="/business/forgot-password" component={ForgotPassword} />

        <Route exact path="/admin/forgot-password" component={AdminForgotPassword} />

        {/* Checkout */}
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/payment-status" component={PaymentStatus} />


      </Switch>
    </Router>
  );
}

export default App;
