import { getToday } from "./date.js";
import { makingTemplate, sendTemplate } from "./template.js";

getToday();

const name = "고경택";
const email = "codetaek@gmail.com";
const citizenNum = "971016-1******";
const phone = "010-2777-9255";
const siteAdd = "google.com";

const mytemplate = makingTemplate({ name, email, citizenNum, phone, siteAdd });

sendTemplate(email, mytemplate);
