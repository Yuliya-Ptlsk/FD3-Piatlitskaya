"use strict";

import {EventEmitter} from "events";

let mobileEvents = new EventEmitter();
//In mobileEvents flow will be all events connected with behaviour of MobileCompany component
//event "EEditClient"
//event "EDeleteClient"
//event "ECancel"
//event "ESaveEditClient"
//event "ESaveNewClient"

export {mobileEvents};