export const aakarProject = {
  id: 1,
  imgSrc: '/assets/booking.svg',
  projectTitle: 'Employee Leave Pass and Visitor Booking',
  employer: 'Aakar Foundry Pvt Ltd',
  desc: 'This web application brings entire visitor appointment booking, authentication and employee leave pass generation for over 400+ employees online.', 
  links: [
    {
      id:1,
      title: 'Github',
      src: 'https://github.com/RohanIRathi/AakarProject'
    },
    {
      id:2,
      title: 'Live',
      src: 'http://aakarfoundry.com/egatepass'
    },
    {
      id:3,
      title: 'Demo Video',
      src: 'https://drive.google.com/file/d/1sShp50O4X9FAHMs_f4mZ-Yx85bFsmue-/view?usp=sharing'
    },
    {
      id:4,
      title: 'Internship Letter',
      src: '/assets/Aakar_Intership_Letter.pdf',
      publicAsset: true
    }
  ],
  techUsed : [
    'HTML','CSS','Javascript','Bootstrap','jQuery','PHP','MySQL'
  ],
  mainDesc: 
    `This web application is currently being used by 400+ employees. It brings entire visitor appointment booking, authentication and employee leave pass generation online.<br>Since it is currently in use, I cannot provide dummy credentials for demo of the website which is covered with an authentication page.<br>It has four main actors : Admin, HOD, Employee and Security. They follow a hierarchical order, Admin being the top Level user, then HOD, Employee and Security. Admin has the ability to sign up new HOD's, employees and security/receptionists. There's a one to many relationship between HOD and Employee, every employee is assigned to an HOD and multiple Employees can be assigned to a single Employee.<br> Visitor Booking : The first three users, namely Admin, HOD, Employee have the ability to book visitor appointments and whenever an appointment is booked, a mail is sent to the visitor containing the Time, Visitee Name and a secret OTP, which the visitor has to show the security guard  on arrival without which the visitor won't be granted entry. There's also an option for walk in visitor where the visitor meets the receptionist and fills his/her details. The visitor also selects the Employee he/she wants to meet and a notification is sent to that employee and that employee has an option to either accept or reject that request. The acknowledgement is sent back to the receptionist based on which the receptionist either lets the visitor in or doesn't.<br>Employee Leave Pass : Every employee can request for a leave pass entering the time and the reason, which is sent to the HOD assigned. The HOD can either accept or reject that request and the acknowledgement is sent back to the employee.<br>All this information is saved in a database which can be viewed later by Admin and can also generate CSV files for information within a particular time range.`
};

export const crwnClothing = {
  id: 2,
  imgSrc: '/assets/shopping.svg',
  projectTitle: 'E Commerce Application',
  employer: 'Personal',
  desc: 'A fully fledged E-Commerce website with Sign In and Goggle O-Authentication feature.',
  links: [
    {
      id:1,
      title: 'Github',
      src: 'https://github.com/siddharth997-png/crwn-clothing'
    },
    {
      id:1,
      title: 'Live Website',
      src: 'https://crwn-977.herokuapp.com'
    }
  ],
  techUsed : [
    'JSX','Sass','Javascript','React','Redux','Redux Sagas','Firebase','FLUX Pattern'
  ],
  mainDesc: 
    `This website is a full fleged E-Commerce website. I initially started with this project to gain proficiency in React but I plan to sell it later.<br>I have used React Router Dom for navigation, Redux as a state management tool, Redux Sagas for asynchronous Redux and Firebase as a NoSQL database. It has Sign In and Sign Up including Google O Auth.It also has Add To Cart feature. I am using Stripe to handle online payments (still in test mode). All the items/catogeries are stored in firebase, I am yet to build the Content Management System for this application.`
}

export const msaProject = {
  id: 3,
  imgSrc: '/assets/data-reports.svg',
  projectTitle: 'Measurement System Analysis',
  employer: 'Fluid Control Pvt Ltd',
  desc: 'This web application helps identify, catalog, calibrate and study the measurement certainty of inspection, testing, and lab equipment.',
  links: [
    {
      id:1,
      title: 'Github',
      src: 'https://github.com/siddharth997-png/MSA-fluid'
    },
    {
      id: 2,
      title: 'Demo Video',
      src: 'https://drive.google.com/file/d/1KSIlb3D7NEOSTZeg5xKjf5ivbP0FHac1/view?usp=sharing'
    },
    {
      id:3,
      title: 'Internship Letter',
      src: '/assets/MSA_Internship_Letter.pdf',
      publicAsset: true
    }
  ],
  techUsed : [
    'HTML','CSS','Javascript','Bootstrap','jQuery','PHP','MySQL'
  ],
  mainDesc: 
    `This web application helps identify, catalog, calibrate and study the measurement certainty of inspection, testing, and lab equipment.<br>It basically verifies the accuracy and precision of a measurement system. <br>This application has two actors, Admin and Instructor. The admin has the ability to sign up different instructors. <br>Measurement System Analysis : The admin enters various details about a particular instrument. Then he selects 3 different Instructors. Then each instructor is supposed to measure the 10 similar instruments in 3 trials. This brings the total number of inputs to 90. All this data then undergoes various calculations and computations. A report is generated based on the result which basically says whether the instructors are fit for measurement of instruments or not. And if not, what they did wrong and what all they need to work on. These reports are stored in a database which can accessed by the admin whenever they want.<br>Since this application is hosted on the company's private servers, I can't post the link for the live website. You can check out the demo video to see what the project is about.`
};

export const chatApp = {
  id: 4,
  imgSrc: '/assets/chat.svg',
  projectTitle: 'Real Time Chat Application',
  employer: 'Personal',
  desc: 'This web application supports real-time bi-directional communication, which makes it a great fit for a chat app.',
  links: [
    {
      id:1,
      title: 'Github',
      src: 'https://github.com/siddharth997-png/chat-app'
    },
    {
      id:2,
      title: 'Live Website',
      src: 'https://siddharth997-node-chat-app.herokuapp.com/'
    }
  ],
  techUsed : [
    'Node JS','Express JS','Mustache JS','Javascript','CSS','Web Sockets Protocol','Socket.io','HTML'
  ],
  mainDesc: 
    `I built this application to gain experience in Web Sockets Protocol. I had earlier worked with HTTP protocol which is the default protocol the web works upon.<br> The problem with HTTP protocol is that there's no bi-direction communication. What I mean by that is, a server can't send a response to a client until and unless the client sends a request first. So using HTTP, the client would have to periodically send a request to the server which is very inefficient and also not real time.<br> Web Sockets solves this problem as the server can directly interact with the client. To implement WebSockets I have used sockets.io library. I have used Mustache.js as the templating engine and Express.js as the web application framework.<br>The users have the ability to enter a unique username and join rooms. They can send text messages and send their location which will be broadcased to everyone in the present room.`
}

export const ticTacToe = {
  id: 5,
  imgSrc: '/assets/gaming.svg',
  projectTitle: 'Single Player Tic Tac Toe',
  employer: 'Personal',
  desc: 'This is a single player Tic Tac Toe game where it is impossible to defeat the computer. The game is based on Minimax Algorithm from game Theory. ',
  links: [
    {
      id:1,
      title: 'Live Website',
      src: '/projects/tic-tac-toe-sp/',
      publicAsset: true
    },
    {
      id:2,
      title: 'Github',
      src: 'https://github.com/siddharth997-png/SinglePlayerTicTacTow'
    }
  ],
  techUsed: [
    'HTML','CSS','JavaScript','Minimax Algorithm'
  ],
  mainDesc: `This is a single player Tic Tac Toe game where it is impossible to defeat the computer. The game is based on Minimax Algorithm from game Theory.<br> Minimax is a kind of backtracking algorithm that is used in decision making and game theory to find the optimal move for a player, assuming that your opponent also plays optimally.<br>The key to the Minimax algorithm is a back and forth between the two players, where the player whose "turn it is" desires to pick the move with the maximum score. In turn, the scores for each of the available moves are determined by the opposing player deciding which of its available moves has the minimum score. And the scores for the opposing players moves are again determined by the turn-taking player trying to maximize its score and so on all the way down the move tree to an end state. `
}