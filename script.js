let events = [ 
    { 
        title: 'Product Management',
        date: new Date('2024-04-20'),
        location: 'CIH',
        attendees: new Set([
            'Diana', 'Kajuju', 'Maggie', 'Makena'
        ])
    },

    {
        
        title: 'Project Management',
        date: new Date('2024-05-25'),
        location: 'CIH',
        attendees: new Set([
            'Judy', 'Eric', 'Alora', 'Amalia'
        ])
    }
]

console.log(events);

let currentDate = new Date();
console.log(currentDate.toLocaleDateString());
console.log(currentDate.toLocaleTimeString());

let next7Days = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000 );
console.log(next7Days);
console.log(next7Days.toLocaleTimeString());
console.log(next7Days.toLocaleDateString());


let upCommingEvents = events.filter(myEvent => myEvent.date <= next7Days);
//console.log(upCommingEvents);

function displayUpcommingEvents(){
    upCommingEvents.map(event => {
        console.log(event.title)
    })
}
displayUpcommingEvents()












