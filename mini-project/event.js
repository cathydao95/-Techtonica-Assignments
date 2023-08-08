class Event {
  constructor(name, description, date) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.availableTickets = [];
  }

  // Create new ticket using TicketType and add to availableTicket array
  addAvailableTickets(name, price) {
    const newTicket = new TicketType(name, price);
    this.availableTickets.push(newTicket);
  }

  allTickets() {
    let list = "All tickets ";
    // Iterate through availableTicket array and add to list variable
    this.availableTickets.forEach((ticket, index) => {
      list += `${index + 1}. ${ticket.name} $(${ticket.price}) `;
    });
    // remove last space character
    return list.slice(0, list.length - 1);
  }

  searchTickets(minPrice, maxPrice) {
    let list = [];
    let elgibleList = "Eligible tickets: ";
    // iterate through each ticket to compare price
    this.availableTickets.forEach((ticket) => {
      if (minPrice <= 0 || maxPrice <= 0) {
        return "Invalid price";
      }
      // if price is less than max and greater than min, push ticket name and priceinto list
      if (ticket.price <= maxPrice && ticket.price >= minPrice) {
        list.push({ name: ticket.name, price: ticket.price });
      }
    });
    // if length of list is less than 0, return "no tickets available"
    if (list.length === 0) {
      return "No tickets available";
      // iterate through each ticket and add to elgible list variable
    } else {
      list.forEach((ticket, index) => {
        elgibleList += `${index + 1}. ${ticket.name} ($${ticket.price}) `;
      });
    }
    return elgibleList.slice(0, elgibleList.length - 1);
  }
}

// create new TicketType Class
class TicketType {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// The below statement creates an object.
const eventObj1 = new Event(
  "KLOS Golden Gala",
  "An evening with hollywood vampires",
  "1/01/2023"
);

const eventObj2 = new Event(
  "Skillet & Sevendust",
  "Victorious war tour",
  "2/02/2023"
);
const eventObj3 = new Event(
  "Jenny Lewis",
  "On the line tour 2019",
  "3/03/2023"
);

const eventArray = new Array();

// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);

// in order to check whether the elements are pushed, use console.log
console.log(eventArray);

eventObj1.addAvailableTickets("human", 299);
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25);
eventObj2.addAvailableTickets("Floor Seating", 80);

eventObj3.addAvailableTickets("Orchestra", 300);
eventObj3.addAvailableTickets("Mezzanine", 200);
eventObj3.addAvailableTickets("Balcony", 100);

console.log(eventArray);

document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded
  let html = "";
  eventArray.forEach((item) => {
    html += `<li>${item.date}: ${item.name} - ${
      item.description
    } -  ${item.searchTickets(5, 100)}`;
  });
  document.querySelector("#event").innerHTML = html;
});
